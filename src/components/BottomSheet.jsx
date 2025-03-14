import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Duration, Easing, Spring, createSpringConfig } from '../animations/tokens';
import '../global.css';
import '../styles/components/BottomSheet.css';

const BottomSheet = ({
  isOpen = false,
  onClose,
  title = "Заголовок",
  subtitle = "Подзаголовок",
  children,
  withBanner = true,
  primaryButtonText = "Кнопка",
  secondaryButtonText = "Кнопка",
  tertiaryButtonText = "Кнопка",
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  onTertiaryButtonClick,
}) => {
  const sheetRef = useRef(null);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('auto');
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  // Определяем высоту контента при рендере
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, children]);

  // Настройки Spring-анимации для появления
  const bottomSheetAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: createSpringConfig({
        stiffness: Spring.Stiffness.Medium,
        damping: Spring.Damping.High,
        mass: Spring.Mass.Default
      }).transition
    },
    exit: { 
      y: '100%', 
      opacity: 0,
      transition: {
        duration: Duration.M,
        ease: Easing.Exit
      }
    }
  };

  // Настройки анимации для overlay
  const overlayAnimation = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: Duration.M,
        ease: Easing.Entrance
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: Duration.S,
        ease: Easing.Exit
      }
    }
  };

  // Обработчик начала перетаскивания
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartY(e.clientY || e.touches[0].clientY);
    setCurrentY(0);
  };

  // Обработчик перетаскивания
  const handleDrag = (e) => {
    if (!isDragging) return;
    const clientY = e.clientY || e.touches[0].clientY;
    const deltaY = clientY - startY;
    
    // Ограничиваем перетаскивание только вниз
    if (deltaY > 0) {
      setCurrentY(deltaY);
    }
  };

  // Обработчик окончания перетаскивания
  const handleDragEnd = () => {
    if (currentY > 100) { // Если перетащили достаточно далеко вниз
      onClose();
    } else {
      // Возвращаем на место с анимацией
      setCurrentY(0);
    }
    setIsDragging(false);
  };

  // Обработчик клика по overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="overlay-root-798-6-0-2" data-dc-overlay="opened" onClick={handleOverlayClick}>
          <motion.div
            className="f-cl-root-1f7-4-0-2 overlay-inner-71e-6-0-2"
            tabIndex="-1"
            variants={overlayAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div tabIndex="0" className="f-cl-sentinel-42b-4-0-2" role="presentation"></div>
            <div role="presentation" className="btm-sht-overlay-1dd-8-0-2">
              <motion.div
                className="btm-sht-root-c2e-8-0-2 btm-sht-withTitle-f76-8-0-2 btm-sht-withSubtitle-50b-8-0-2 btm-sht-withFooter-dca-8-0-2"
                variants={bottomSheetAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ 
                  transform: isDragging ? `translateY(${currentY}px)` : undefined,
                }}
                ref={sheetRef}
                onTouchStart={handleDragStart}
                onTouchMove={handleDrag}
                onTouchEnd={handleDragEnd}
                onMouseDown={handleDragStart}
                onMouseMove={handleDrag}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
              >
                {/* Иконка для закрытия/перетаскивания */}
                <div className="btm-sht-iconContainer-fcd-8-0-2" onClick={onClose}>
                  <div className="btm-sht-icon-06c-8-0-2"></div>
                </div>
                
                {/* Баннер/Шапка (если указано) */}
                {withBanner && (
                  <div className="btm-sht-header-76f-8-0-2 btm-sht-header-banner-aaa-8-0-2">
                    <div style={{ backgroundColor: "var(--color_bg_surface_secondary)", height: "156px" }}></div>
                  </div>
                )}
                
                {/* Заголовок и подзаголовок */}
                <div className="btm-sht-title-7f1-8-0-2">{title}</div>
                <div className="btm-sht-subtitle-5f8-8-0-2">{subtitle}</div>
                
                {/* Эффект затухания верхней части */}
                <div className="btm-sht-fadeWrapper-06f-8-0-2">
                  <div className="btm-sht-fadeTop-006-8-0-2"></div>
                </div>
                
                {/* Контент */}
                <div ref={contentRef}>
                  {children}
                </div>
                
                {/* Эффект затухания нижней части */}
                <div className="btm-sht-fadeWrapper-06f-8-0-2">
                  <div className="btm-sht-fadeBottom-cb5-8-0-2"></div>
                </div>
                
                {/* Футер с кнопками */}
                <div className="btm-sht-footer-090-8-0-2">
                  <div className="btm-sht-footerButtons-47b-8-0-2">
                    <div className="btm-sht-footerButton-2b6-8-0-2">
                      <button 
                        className="btn-root-119-18-1-1 btn-primary-a30-18-1-1 btn-medium-fdc-18-1-1 btn-typeButtonReset-268-18-1-1 btn-fluid-af4-18-1-1" 
                        type="button"
                        onClick={onPrimaryButtonClick}
                      >
                        <span className="btn-text-398-18-1-1">{primaryButtonText}</span>
                      </button>
                    </div>
                    <div className="btm-sht-footerButton-2b6-8-0-2">
                      <button 
                        className="btn-root-119-18-1-1 btn-secondary-alternative-4c1-18-1-1 btn-medium-fdc-18-1-1 btn-typeButtonReset-268-18-1-1 btn-fluid-af4-18-1-1" 
                        type="button"
                        onClick={onSecondaryButtonClick}
                      >
                        <span className="btn-text-398-18-1-1">{secondaryButtonText}</span>
                      </button>
                    </div>
                    <div className="btm-sht-footerButton-2b6-8-0-2">
                      <button 
                        className="btn-root-119-18-1-1 btn-secondary-alternative-4c1-18-1-1 btn-medium-fdc-18-1-1 btn-typeButtonReset-268-18-1-1 btn-fluid-af4-18-1-1" 
                        type="button"
                        onClick={onTertiaryButtonClick}
                      >
                        <span className="btn-text-398-18-1-1">{tertiaryButtonText}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div tabIndex="0" className="f-cl-sentinel-42b-4-0-2" role="presentation"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet; 