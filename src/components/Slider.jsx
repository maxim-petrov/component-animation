import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Duration, Easing, Spring, createSpringConfig } from '../animations/tokens';
import '../global.css';

const Slider = ({ 
  min = 0, 
  max = 100, 
  step = 1, 
  defaultValue = 0,
  label = "Значение",
  steps = [0, 25, 50, 75, 100],
  withInput = true,
  active = false
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  
  // Рассчитываем процент для отображения ползунка и заполнения оси
  const percentage = ((value - min) / (max - min)) * 100;
  
  // Обработчик изменения значения в поле ввода
  const handleInputChange = (e) => {
    const newValue = Math.min(Math.max(parseInt(e.target.value) || min, min), max);
    setValue(newValue);
  };
  
  // Обработчик начала перетаскивания
  const handleDragStart = () => {
    setIsDragging(true);
  };
  
  // Обработчик окончания перетаскивания
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  
  // Обработчик перетаскивания
  const handleDrag = (e, info) => {
    if (!sliderRef.current) return;
    
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const sliderWidth = sliderRect.width;
    const offset = info.point.x - sliderRect.left;
    
    // Рассчитываем новое значение на основе позиции
    let newPercentage = Math.max(0, Math.min(100, (offset / sliderWidth) * 100));
    let newValue = min + Math.round((newPercentage / 100) * (max - min) / step) * step;
    
    setValue(newValue);
  };
  
  // Обработчик клика по оси
  const handleAxisClick = (e) => {
    if (!sliderRef.current || isDragging) return;
    
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const sliderWidth = sliderRect.width;
    const offset = e.clientX - sliderRect.left;
    
    // Рассчитываем новое значение на основе клика
    let newPercentage = Math.max(0, Math.min(100, (offset / sliderWidth) * 100));
    let newValue = min + Math.round((newPercentage / 100) * (max - min) / step) * step;
    
    setValue(newValue);
  };
  
  // Анимация ползунка, используя Spring
  const thumbAnimation = {
    initial: { x: 0 },
    animate: { x: 0 },
    transition: createSpringConfig({
      stiffness: Spring.Stiffness.Firm,
      damping: Spring.Damping.High,
      mass: Spring.Mass.Default
    }).transition
  };
  
  // Анимация заполнения оси
  const fillAnimation = {
    initial: { right: '100%' },
    animate: { right: `${100 - percentage}%` },
    transition: createSpringConfig({
      stiffness: Spring.Stiffness.Firm,
      damping: Spring.Damping.High,
      mass: Spring.Mass.Default
    }).transition
  };
  
  // Вариант с текстовым полем ввода
  const renderWithInput = () => (
    <div className="_Gq5_ ql7Up" data-e2e-id="slider-default">
      <div style={{ width: '282px' }}>
        <div className="slider-inputRoot-bee-11-0-8" data-e2e-id="slider">
          <div className="inpt-fluid-199-12-3-0">
            <div className="inpt-root-670-12-3-0 inpt-large-258-12-3-0 inpt-primary-8dd-12-3-0 inpt-notEmpty-432-12-3-0 inpt-fluid-199-12-3-0 inpt-hasLabel-14b-12-3-0 nmbr-inp-root-220-11-1-0" data-e2e-id="slider-input">
              <div className="inpt-inputContainer-d7e-12-3-0">
                <input
                  className="inpt-input-3c4-12-3-0"
                  step={step}
                  tabIndex="0"
                  value={value}
                  onChange={handleInputChange}
                />
                <label className="inpt-label-a7f-12-3-0 inpt-labelWithoutLabelId-299-12-3-0">{label}</label>
              </div>
            </div>
          </div>
          
          <span className="slider-root-80f-11-0-8 slider-inputSliderMode-be3-11-0-8" data-e2e-id="slider-slider">
            <span 
              className="slider-axisContainer-04b-11-0-8" 
              ref={sliderRef}
              onClick={handleAxisClick}
            >
              <span className="slider-axis-923-11-0-8">
                <motion.span 
                  className="slider-axisFill-f1d-11-0-8" 
                  initial="initial"
                  animate="animate"
                  variants={fillAnimation}
                  style={{ right: `${100 - percentage}%` }}
                />
              </span>
              
              <motion.span 
                className="slider-thumb-2b5-11-0-8" 
                data-e2e-id="slider-slider-thumb" 
                style={{ left: `${percentage}%` }}
                drag="x"
                dragConstraints={sliderRef}
                dragElastic={0}
                dragMomentum={false}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDrag={handleDrag}
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.1 }}
                transition={thumbAnimation.transition}
              >
                <span className="slider-thumbInner-c38-11-0-8" />
              </motion.span>
            </span>
            
            <span className="slider-valueHints-c0e-11-0-8">
              {steps.map((step, index) => (
                <span key={index} className="slider-valueHint-1ed-11-0-8">
                  <span className="slider-hintText-eb7-11-0-8">{step}</span>
                </span>
              ))}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
  
  // Вариант без текстового поля ввода
  const renderWithoutInput = () => (
    <div className="_Gq5_ ql7Up" data-e2e-id="slider-default">
      <div style={{ width: '282px' }}>
        <span 
          className={`slider-root-80f-11-0-8 ${active ? 'slider-active-c30-11-0-8' : ''}`} 
          data-e2e-id="slider" 
          tabIndex="0"
        >
          <span 
            className="slider-axisContainer-04b-11-0-8" 
            ref={sliderRef}
            onClick={handleAxisClick}
          >
            <span className="slider-axis-923-11-0-8">
              <motion.span 
                className="slider-axisFill-f1d-11-0-8" 
                initial="initial"
                animate="animate"
                variants={fillAnimation}
                style={{ right: `${100 - percentage}%` }}
              />
            </span>
            
            <motion.span 
              className="slider-thumb-2b5-11-0-8" 
              data-e2e-id="slider-thumb" 
              style={{ left: `${percentage}%` }}
              drag="x"
              dragConstraints={sliderRef}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDrag={handleDrag}
              whileTap={{ scale: 1.2 }}
              whileHover={{ scale: 1.1 }}
              transition={thumbAnimation.transition}
            >
              <span className="slider-thumbInner-c38-11-0-8" />
            </motion.span>
          </span>
          
          <span className="slider-valueHints-c0e-11-0-8">
            {steps.map((step, index) => (
              <span key={index} className="slider-valueHint-1ed-11-0-8">
                <span className="slider-hintText-eb7-11-0-8">{step}</span>
              </span>
            ))}
          </span>
        </span>
      </div>
    </div>
  );
  
  return withInput ? renderWithInput() : renderWithoutInput();
};

export default Slider; 