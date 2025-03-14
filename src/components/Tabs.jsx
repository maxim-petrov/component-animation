import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tab from './Tab';
import { tabsAnimationConfig, tabContentAnimation, scrollArrowAnimation } from '../animations/tabsAnimations';
import { activeLineAnimation } from '../animations/tabAnimations';
import '../global.css';
import '../styles/components/Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('value-0');
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [activeTabRect, setActiveTabRect] = useState(null);
  const [prevTabRect, setPrevTabRect] = useState(null);
  const [customTransition, setCustomTransition] = useState(activeLineAnimation.transition);
  const buttonsRef = useRef(null);
  const tabRefs = useRef({});

  // Помогаем браузеру понять, что навигация должна работать
  useEffect(() => {
    // Функция для обработки кликов на ссылках навигации
    const handleNavigationLinks = (e) => {
      // Проверяем, что клик произошел на ссылке
      if (e.target.tagName === 'A' && e.target.href) {
        // Позволяем браузеру обработать клик
        e.stopPropagation();
      }
    };

    // Добавляем обработчик на capture-фазе, чтобы он выполнялся до других обработчиков
    document.addEventListener('click', handleNavigationLinks, true);

    return () => {
      document.removeEventListener('click', handleNavigationLinks, true);
    };
  }, []);

  // Check if scroll is needed
  const checkScroll = useCallback(() => {
    if (buttonsRef.current) {
      const { scrollWidth, clientWidth } = buttonsRef.current;
      setShowRightArrow(scrollWidth > clientWidth);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    
    return () => {
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  // Calculate adaptive duration based on distance
  const calculateAdaptiveDuration = useCallback((prevRect, nextRect) => {
    if (!prevRect || !nextRect) return activeLineAnimation.transition;

    // Calculate distance between centers of tabs
    const prevCenter = prevRect.left + prevRect.width / 2;
    const nextCenter = nextRect.left + nextRect.width / 2;
    const distance = Math.abs(nextCenter - prevCenter);
    
    // Base duration for short distances
    const baseDuration = 0.25; // 250ms
    
    // Maximum duration for very long distances
    const maxDuration = 0.5; // 500ms
    
    // Calculate adaptive duration based on distance
    // Use a logarithmic scale to prevent extremely slow animations for very distant tabs
    let adaptiveDuration = baseDuration;
    if (distance > 0) {
      // 200px is considered a "standard" distance between adjacent tabs
      const factor = Math.log10(distance / 200 + 1) + 1;
      adaptiveDuration = Math.min(baseDuration * factor, maxDuration);
    }
    
    // Return modified transition object
    return {
      ...activeLineAnimation.transition,
      duration: adaptiveDuration,
      // Adjust stiffness inversely to distance - stiffer for shorter distances
      stiffness: Math.max(400 - distance / 2, 200),
      // Increase damping for longer distances to prevent oscillation
      damping: Math.min(25 + distance / 20, 40)
    };
  }, []);

  // Update the active tab rect when active tab changes
  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const currentRect = {
        width: tabRefs.current[activeTab].getBoundingClientRect().width,
        left: tabRefs.current[activeTab].offsetLeft
      };
      
      // Calculate custom transition based on distance
      const newTransition = calculateAdaptiveDuration(prevTabRect, currentRect);
      setCustomTransition(newTransition);
      
      // Update states
      setPrevTabRect(currentRect);
      setActiveTabRect(currentRect);
    }
  }, [activeTab, calculateAdaptiveDuration, prevTabRect]);

  // Scroll tabs to the right
  const scrollRight = (e) => {
    if (buttonsRef.current) {
      buttonsRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  // Handle tab click
  const handleTabClick = (e) => {
    // Получаем ID таба
    const tabId = e.currentTarget.value;
    
    // Сохраняем позицию предыдущего таба
    if (tabRefs.current[activeTab]) {
      setPrevTabRect({
        width: tabRefs.current[activeTab].getBoundingClientRect().width,
        left: tabRefs.current[activeTab].offsetLeft
      });
    }
    
    // Обновляем активный таб
    setActiveTab(tabId);
  };

  // Tab content data
  const tabsData = [
    { id: 'value-0', label: 'Первый таб', content: 'Контент 1' },
    { id: 'value-1', label: 'Второй таб', content: 'Контент 2' },
    { id: 'value-2', label: 'Третий таб', content: 'Контент 3' },
    { id: 'value-3', label: 'Четвертый таб', content: 'Контент 4' },
    { id: 'value-4', label: 'Пятый таб', content: 'Контент 5' },
    { id: 'value-5', label: 'Шестой таб', content: 'Контент 6' },
    { id: 'value-6', label: 'Седьмой таб', content: 'Контент 7' },
    { id: 'value-7', label: 'Восьмой таб', content: 'Контент 8' },
    { id: 'value-8', label: 'Девятый таб', content: 'Контент 9' },
  ];

  return (
    <div className="tabs-tabs-d69-15-1-1 tabs-primary-9de-15-1-1" data-e2e-id="example-default">
      <div className="tabs-head-8e7-15-1-1 tabs-headMobileOffset-fe8-15-1-1">
        {showRightArrow && (
          <motion.div 
            className="tabs-arrow-d5b-15-1-1 tabs-arrowRight-c14-15-1-1" 
            data-e2e-id="example-default-right-arrow"
            onClick={scrollRight}
            {...scrollArrowAnimation}
          >
            <div className="icon-root-864-6-0-3 tabs-arrowIcon-a77-15-1-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <path 
                  fill="currentColor" 
                  fillRule="evenodd" 
                  d="M11.09 8.59a.833.833 0 0 0 0-1.18l-5-5a.833.833 0 1 0-1.18 1.18L9.322 8l-4.41 4.41a.833.833 0 1 0 1.178 1.18l5-5Z" 
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
        )}
        <div className="tabs-headInner-892-15-1-1 tabs-headInnerDivider-028-15-1-1">
          <div 
            className="tabs-buttons-fc1-15-1-1" 
            ref={buttonsRef}
            style={{ position: 'relative' }}
          >
            {tabsData.map(tab => (
              <Tab
                key={tab.id}
                id={tab.id}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={handleTabClick}
                ref={el => tabRefs.current[tab.id] = el}
              />
            ))}
            
            {activeTabRect && (
              <motion.div
                className="active-tab-line"
                initial={false}
                animate={{
                  width: activeTabRect.width,
                  left: activeTabRect.left
                }}
                transition={customTransition}
                style={{
                  position: 'absolute',
                  height: '2px',
                  backgroundColor: 'var(--color-primary, #009e36)',
                  bottom: '0',
                  borderRadius: '2px'
                }}
              />
            )}
          </div>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        {tabsData.map(tab => (
          activeTab === tab.id && (
            <div key={tab.id} className="tabs-content-cfb-15-1-1 tabs-contentActive-b38-15-1-1">
              <motion.div 
                className="FeC6G"
                {...tabContentAnimation}
              >
                {tab.content}
              </motion.div>
            </div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Tabs; 