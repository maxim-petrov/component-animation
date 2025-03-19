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
  
  // State для ripple эффекта
  const [rippleList, setRippleList] = useState([]);
  const buttonRef = useRef(null);
  
  // Добавляем ripple эффект при mouse down
  const handleRipple = (e) => {
    const button = buttonRef.current;
    if (!button) return;
    
    const buttonRect = button.getBoundingClientRect();
    const size = Math.max(buttonRect.width, buttonRect.height);
    const x = e.clientX - buttonRect.left;
    const y = e.clientY - buttonRect.top;
    
    // Создаем новый ripple элемент
    const ripple = {
      id: Date.now(),
      x,
      y,
      size
    };
    
    setRippleList((prevList) => [...prevList, ripple]);
  };
  
  // Удаляем ripple эффект после завершения анимации
  const removeRipple = (id) => {
    setRippleList((prevList) => prevList.filter(ripple => ripple.id !== id));
  };
  
  // Обработчик события mouse down для ripple эффекта
  const handleMouseDown = (e) => {
    handleRipple(e);
  };
  
  return (
    <div className="_Gq5_ ql7Up" data-e2e-id="button-default">
      <div className="CqkE8">
        <motion.button 
          ref={buttonRef}
          className={`btn-root-119-18-1-1 btn-${variant}-a30-18-1-1 btn-${size}-9e4-18-1-1 btn-typeButtonReset-268-18-1-1 btn-withIcon-a49-18-1-1 btn-ripple-container`} 
          type={type}
          onClick={onClick}
          onMouseDown={handleMouseDown}
          whileHover={buttonHoverAnimation.whileHover}
          transition={buttonHoverAnimation.transition}
        >
          {/* Ripple элементы */}
          <AnimatePresence>
            {rippleList.map((ripple) => (
              <motion.span
                key={ripple.id}
                className="btn-ripple"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  background: '#00822C',
                }}
                initial={{ 
                  width: 0, 
                  height: 0, 
                  opacity: 0.5 
                }}
                animate={{ 
                  width: ripple.size * 2, 
                  height: ripple.size * 2, 
                  opacity: 0,
                  x: -ripple.size,
                  y: -ripple.size,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                onAnimationComplete={() => removeRipple(ripple.id)}
              />
            ))}
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