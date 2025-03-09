import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tab from './Tab';
import { tabsAnimationConfig, tabContentAnimation, scrollArrowAnimation } from '../animations/tabsAnimations';
import '../global.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('value-0');
  const [showRightArrow, setShowRightArrow] = useState(false);
  const buttonsRef = useRef(null);

  // Check if scroll is needed
  useEffect(() => {
    const checkScroll = () => {
      if (buttonsRef.current) {
        const { scrollWidth, clientWidth } = buttonsRef.current;
        setShowRightArrow(scrollWidth > clientWidth);
      }
    };
    
    checkScroll();
    window.addEventListener('resize', checkScroll);
    
    return () => {
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  // Scroll tabs to the right
  const scrollRight = () => {
    if (buttonsRef.current) {
      buttonsRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  // Handle tab click
  const handleTabClick = (tabId) => {
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
          <div className="tabs-buttons-fc1-15-1-1" ref={buttonsRef}>
            {tabsData.map(tab => (
              <Tab
                key={tab.id}
                id={tab.id}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={handleTabClick}
              />
            ))}
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