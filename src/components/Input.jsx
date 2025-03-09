import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  inputAnimationConfig, 
  labelAnimation, 
  clearIconAnimation, 
  infoIconAnimation,
  borderAnimation
} from '../animations/inputAnimations';
import '../global.css';

const Input = () => {
  const [value, setValue] = useState('Текст');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isNotEmpty = value.length > 0;

  return (
    <div className="_Gq5_ ql7Up" data-e2e-id="input-default">
      <div className="">
        <div className="Za8Yo" style={{ marginBottom: '0px' }}>
          <div className="QEyAr">
            <div className="inpt-fluid-199-12-3-0">
              <motion.div 
                className={`inpt-root-670-12-3-0 inpt-large-258-12-3-0 inpt-primary-8dd-12-3-0 ${
                  isNotEmpty ? 'inpt-notEmpty-432-12-3-0' : ''
                } inpt-withRightSection-66c-12-3-0 inpt-fluid-199-12-3-0 inpt-hasLabel-14b-12-3-0 ${
                  isFocused ? 'inpt-focused-1c6-12-3-0' : ''
                }`} 
                data-e2e-id="base-input"
                animate={isFocused ? "focus" : "initial"}
                variants={borderAnimation}
              >
                <div className="inpt-inputContainer-d7e-12-3-0">
                  <input 
                    type="text" 
                    className="inpt-input-3c4-12-3-0" 
                    tabIndex="0" 
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={inputRef}
                  />
                  <motion.label 
                    className="inpt-label-a7f-12-3-0 inpt-labelWithoutLabelId-299-12-3-0"
                    animate={(isFocused || isNotEmpty) ? "focus" : "initial"}
                    variants={labelAnimation}
                  >
                    Label
                  </motion.label>
                </div>
                
                <AnimatePresence>
                  {isNotEmpty && (
                    <div className="inpt-clearIconWrapper-19d-12-3-0 inpt-clearIconWithRS-b3f-12-3-0">
                      <motion.div 
                        role="presentation" 
                        className="inpt-clearIcon-f2f-12-3-0" 
                        data-e2e-id="base-input-clear-icon"
                        onClick={handleClear}
                        {...clearIconAnimation}
                      >
                        <div className="icon-root-864-6-0-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                            <path 
                              fill="currentColor" 
                              fillRule="evenodd" 
                              d="M3.244 3.244a.833.833 0 0 1 1.179 0l8.333 8.333a.833.833 0 1 1-1.179 1.179L3.244 4.423a.833.833 0 0 1 0-1.179Z" 
                              clipRule="evenodd"
                            />
                            <path 
                              fill="currentColor" 
                              fillRule="evenodd" 
                              d="M12.756 3.244a.833.833 0 0 1 0 1.179l-8.333 8.333a.833.833 0 1 1-1.179-1.179l8.333-8.333a.833.833 0 0 1 1.179 0Z" 
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
                
                <motion.div 
                  role="presentation" 
                  className="inpt-rightSection-fee-12-3-0" 
                  data-e2e-id="base-input__right-section"
                  whileHover={{ opacity: 0.8 }}
                >
                  <div className="JzbtP">
                    <div className="EjILJ">
                      <span>value</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div 
            className="frfl-message-0d5-7-0-3 frfl-message--info-6ff-7-0-3" 
            style={{ marginTop: '4px' }}
          >
            <motion.div 
              {...infoIconAnimation}
              style={{ display: 'inline-block' }}
            >
              Иконка (icon-information) заменяется на иконку очистки поля (icon-close), когда поле заполнено
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input; 