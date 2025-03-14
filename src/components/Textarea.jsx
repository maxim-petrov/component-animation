import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  textareaAnimationConfig, 
  focusAnimation, 
  heightAnimation,
  placeholderAnimation
} from '../animations/textareaAnimations';
import '../global.css';
import '../styles/typography.css';

const Textarea = () => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState(40);
  
  const visibleTextareaRef = useRef(null);
  const hiddenTextareaRef = useRef(null);

  // Обработчик для изменения текста
  const handleChange = (e) => {
    setValue(e.target.value);
    adjustTextareaHeight();
  };

  // Обработчик для фокуса
  const handleFocus = () => {
    // Отключаем установку фокуса
    // setIsFocused(true);
  };

  // Обработчик для потери фокуса
  const handleBlur = () => {
    // Отключаем сброс фокуса
    // setIsFocused(false);
  };

  // Функция для регулировки высоты текстовой области
  const adjustTextareaHeight = () => {
    if (hiddenTextareaRef.current && visibleTextareaRef.current) {
      // Сначала сбросим высоту скрытой текстовой области
      hiddenTextareaRef.current.style.height = 'auto';
      
      // Теперь получим scrollHeight, который учитывает весь текст
      const scrollHeight = hiddenTextareaRef.current.scrollHeight;
      
      // Устанавливаем минимальную высоту 40px или высоту, соответствующую содержимому
      const newHeight = Math.max(40, scrollHeight);
      
      setTextareaHeight(newHeight);
    }
  };

  // Синхронизируем значение между видимой и скрытой текстовыми областями
  useEffect(() => {
    if (hiddenTextareaRef.current) {
      hiddenTextareaRef.current.value = value;
      adjustTextareaHeight();
    }
  }, [value]);

  return (
    <div className="_Gq5_ ql7Up" data-e2e-id="textarea-base">
      <div className="AwMFO" style={{ marginBottom: '0px' }}>
        <motion.div 
          className="txar-textarea-221-11-1-0" 
          data-e2e-id="textarea" 
          style={{ 
            gridTemplate: '"field" 1fr / 1fr',
            border: '1px solid',
            borderRadius: '8px'
          }}
          variants={focusAnimation}
          initial="initial"
          animate={isFocused ? "focus" : "initial"}
        >
          <motion.textarea 
            className="txar-field-ea3-11-1-0" 
            placeholder="Плейсхолдер" 
            tabIndex="0" 
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={visibleTextareaRef}
            style={{ 
              height: `${textareaHeight}px`
            }}
            animate={{ 
              height: `${textareaHeight}px`
            }}
            transition={heightAnimation.transition}
            variants={placeholderAnimation}
            initial="initial"
            whileFocus="focus"
          />
          <textarea 
            className="txar-fieldHidden-bb9-11-1-0" 
            aria-hidden="true"
            ref={hiddenTextareaRef}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Textarea; 