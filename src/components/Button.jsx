import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  buttonAnimationConfig, 
  buttonHoverAnimation, 
  iconAnimation
} from '../animations/buttonAnimations';
import '../styles/components/Button.css';
import '../styles/typography.css';

const Button = ({ 
  text = 'Кнопка', 
  type = 'button', 
  variant = 'primary', 
  size = 'large',
  onClick = () => {}
}) => {
  // Иконка сердца для кнопки
  const HeartIcon = () => (
    <div className="icon-root-864-6-0-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path 
          fill="currentColor" 
          fillRule="evenodd" 
          d="M1.745 2.615a4.215 4.215 0 0 1 6.053 0L8 2.82l.202-.206a4.215 4.215 0 0 1 6.053 0 4.413 4.413 0 0 1 0 6.144l-5.45 5.57c-.442.45-1.168.45-1.609 0l-5.45-5.57a4.414 4.414 0 0 1-.001-6.144Z" 
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
  
  // State для ripple эффекта и отслеживания нажатия
  const [ripple, setRipple] = useState(null);
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef(null);
  
  // Добавляем ripple эффект при mouse down
  const handleRipple = (e) => {
    const button = buttonRef.current;
    if (!button) return;
    
    const buttonRect = button.getBoundingClientRect();
    const size = Math.max(buttonRect.width, buttonRect.height) * 2;
    const x = e.clientX - buttonRect.left;
    const y = e.clientY - buttonRect.top;
    
    // Создаем новый ripple элемент
    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
      show: true
    };
    
    setRipple(newRipple);
    setIsPressed(true);
  };
  
  // Обработчик mouseDown - создаем ripple эффект
  const handleMouseDown = (e) => {
    handleRipple(e);
  };
  
  // Обработчик mouseUp - скрываем ripple эффект
  const handleMouseUp = () => {
    if (ripple) {
      setIsPressed(false);
      // Удаляем ripple с задержкой для плавного исчезновения
      setTimeout(() => {
        setRipple(null);
      }, 300);
    }
  };
  
  // Обработчик mouseLeave - скрываем ripple эффект при выходе курсора за пределы кнопки
  const handleMouseLeave = () => {
    if (isPressed) {
      handleMouseUp();
    }
  };
  
  // Добавляем глобальные обработчики событий для случая, если mouseUp происходит вне кнопки
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isPressed) {
        handleMouseUp();
      }
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isPressed]);
  
  return (
    <div className="_Gq5_ ql7Up" data-e2e-id="button-default">
      <div className="CqkE8">
        <motion.button 
          ref={buttonRef}
          className={`btn-root-119-18-1-1 btn-${variant}-a30-18-1-1 btn-${size}-9e4-18-1-1 btn-typeButtonReset-268-18-1-1 btn-withIcon-a49-18-1-1 btn-ripple-container`} 
          type={type}
          onClick={onClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          whileHover={buttonHoverAnimation.whileHover}
          transition={buttonHoverAnimation.transition}
        >
          {/* Ripple элемент */}
          <AnimatePresence>
            {ripple && (
              <motion.span
                key={ripple.id}
                className="btn-ripple"
                style={{
                  position: 'absolute',
                  left: ripple.x,
                  top: ripple.y,
                  transformOrigin: 'center center',
                  background: '#00822C',
                }}
                initial={{ 
                  width: 0, 
                  height: 0, 
                  opacity: 0.5,
                  transform: 'translate(-50%, -50%) scale(0)',
                }}
                animate={{ 
                  width: ripple.size, 
                  height: ripple.size, 
                  opacity: isPressed ? 0.7 : 0,
                  transform: 'translate(-50%, -50%) scale(1)',
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  width: { duration: 0.5, ease: "easeOut" },
                  height: { duration: 0.5, ease: "easeOut" },
                  transform: { duration: 0.5, ease: "easeOut" },
                  opacity: { duration: isPressed ? 0 : 0.3 }
                }}
              />
            )}
          </AnimatePresence>
          
          <motion.span 
            className="btn-icon-72f-18-1-1 btn-icon--left-5a5-18-1-1"
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={iconAnimation}
          >
            <HeartIcon />
          </motion.span>
          <span className="btn-text-398-18-1-1">{text}</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Button; 