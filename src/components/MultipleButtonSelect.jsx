import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  buttonSelectAnimationConfig, 
  buttonHoverAnimation, 
  activeButtonAnimation,
  buttonToggleAnimation
} from '../animations/multipleButtonSelectAnimations';
import '../global.css';
import '../styles/typography.css';

// Компонент для отдельной кнопки выбора
const SelectButton = ({ id, text, isActive, onToggle }) => {
  // Объединение вариантов анимаций
  const combinedVariants = {
    initial: { 
      ...activeButtonAnimation.initial,
      scale: 1 
    },
    active: { 
      ...activeButtonAnimation.active,
      scale: 1 
    },
    toggle: buttonToggleAnimation.toggle
  };

  return (
    <motion.button 
      data-e2e-id={`default-multiple-select-button__value-${id}`} 
      className={`mb-sel-item-75f-12-2-4 ${isActive ? 'mb-sel-active-7cf-12-2-4' : ''}`} 
      aria-pressed={isActive} 
      type="button"
      onClick={() => onToggle(id)}
      {...buttonHoverAnimation}
      animate={isActive ? 'active' : 'initial'}
      variants={combinedVariants}
      whileTap="toggle"
    >
      <span className="mb-sel-text-5e4-12-2-4">{text}</span>
    </motion.button>
  );
};

// Основной компонент группы кнопок с множественным выбором
const MultipleButtonSelect = () => {
  // Состояние: массив ID активных кнопок (по умолчанию выбраны первые две)
  const [activeButtons, setActiveButtons] = useState([0, 1]);
  
  // Данные для кнопок
  const buttons = [
    { id: 0, text: 'Первая кнопка' },
    { id: 1, text: 'Вторая кнопка' },
    { id: 2, text: 'Третья кнопка' },
    { id: 3, text: 'Четвертая кнопка' },
    { id: 4, text: 'Пятая кнопка' },
    { id: 5, text: 'Шестая кнопка' },
    { id: 6, text: 'Седьмая кнопка' },
    { id: 7, text: 'Восьмая кнопка' },
    { id: 8, text: 'Девятая кнопка' },
    { id: 9, text: 'Десятая кнопка' },
    { id: 10, text: 'Одиннадцатая кнопка' }
  ];

  // Обработчик переключения состояния кнопки
  const handleToggle = (id) => {
    if (activeButtons.includes(id)) {
      // Не даем снять выбор, если останется меньше одной активной кнопки
      if (activeButtons.length > 1) {
        setActiveButtons(activeButtons.filter(buttonId => buttonId !== id));
      }
    } else {
      // Добавляем кнопку в список активных
      setActiveButtons([...activeButtons, id]);
    }
  };

  return (
    <div className="_Gq5_ ql7Up" data-e2e-id="multiple-button-select-default">
      <div className="" style={{ marginBottom: '20px' }}>
        {/* Заголовок группы кнопок */}
        <div 
          className="label-root-303-6-0-3" 
          htmlFor="multiple-select-button" 
          style={{ marginBottom: '8px' }}
        >
          Заголовок
        </div>
        
        {/* Контейнер с кнопками */}
        <div 
          className="mb-sel-root-2a0-12-2-4 mb-sel-large-ef8-12-2-4" 
          data-e2e-id="default-multiple-select-button"
        >
          {buttons.map((button) => (
            <SelectButton 
              key={button.id}
              id={button.id}
              text={button.text}
              isActive={activeButtons.includes(button.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>
        
        {/* Информационное сообщение */}
        <div 
          className="frfl-message-0d5-7-0-3 frfl-message--info-6ff-7-0-3" 
          style={{ marginTop: '4px' }}
        >
          Необходимо выбрать один или несколько
        </div>
      </div>
    </div>
  );
};

export default MultipleButtonSelect; 