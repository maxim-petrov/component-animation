import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  dropdownAnimationConfig, 
  arrowAnimation, 
  buttonHoverAnimation, 
  menuAnimation,
  menuItemAnimation
} from '../animations/dropdownAnimations';
import '../global.css';

const DropdownItem = ({ id, title, onClick, isSelected, index }) => {
  return (
    <motion.div 
      id={`Dropdown-option-${id}`} 
      role="option" 
      className="list-box-itemWrapper-a44-13-1-0"
      variants={menuItemAnimation}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      <motion.label 
        className={`list-cell-root-0ea-2-2-1 list-cell-p-medium-707-2-2-1 ${isSelected ? 'list-cell-selected-faf-2-2-1' : ''}`}
        tabIndex="0" 
        aria-checked={isSelected} 
        data-e2e-id={`base-dropdown-button_item_${id}`}
        onClick={() => onClick(id, title)}
        whileHover={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          scale: 1.02,
          transition: { duration: 0.1 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="list-cell-wrapper-1a8-2-2-1">
          <div className="list-cell-title-64d-2-2-1">
            <div className="list-cell-highlightMatchRoot-160-2-2-1">{title}</div>
          </div>
        </div>
      </motion.label>
    </motion.div>
  );
};

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonText, setButtonText] = useState('Текст');
  const dropdownRef = useRef(null);

  const options = [
    { id: 'variant1', title: '1 вариант' },
    { id: 'variant2', title: '2 вариант' },
    { id: 'variant3', title: '3 вариант' },
    { id: 'variant4', title: '4 вариант' }
  ];

  // Открытие и закрытие выпадающего меню
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Выбор опции
  const handleOptionClick = (id, title) => {
    setSelectedOption(id);
    setButtonText(title);
    setIsOpen(false);
  };

  // Закрытие выпадающего меню при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="_Gq5_ ql7Up" data-e2e-id="dropdown-button-base">
      <div className="N1H3G">
        <div 
          className={`dd-btn-root-4f6-8-3-0 ${isOpen ? 'dd-btn-open-357-8-3-0' : ''}`} 
          data-e2e-id="base-dropdown-button"
          ref={dropdownRef}
        >
          <div className="ppr-container-ab9-12-2-0">
            <div>
              <motion.button 
                type="button" 
                className="dd-btn-button-376-8-3-0 dd-btn-button-large-015-8-3-0 dd-btn-button-primary-78f-8-3-0" 
                data-e2e-id="base-dropdown-button_button"
                onClick={toggleDropdown}
                {...buttonHoverAnimation}
              >
                <span className="dd-btn-title-7d3-8-3-0">{buttonText}</span>
                <div className="dd-btn-arrow-2cb-8-3-0">
                  <motion.div 
                    className="icon-root-864-6-0-3"
                    custom={isOpen}
                    transition={dropdownAnimationConfig}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                      <path 
                        fill="currentColor" 
                        fillRule="evenodd" 
                        d="M7.41 11.09a.833.833 0 0 0 1.18 0l5-5a.833.833 0 0 0-1.18-1.18L8 9.322l-4.41-4.41A.833.833 0 0 0 2.41 6.09l5 5Z" 
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>
            </div>
            
            <div style={{ position: 'relative', zIndex: 100 }}>
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    className="ppr-root-43f-12-2-0 ppr-shadow-small-9f9-12-2-0" 
                    style={{ 
                      maxHeight: '240px', 
                      borderRadius: '8px', 
                      width: '208px', 
                      minWidth: '208px', 
                      position: 'absolute', 
                      right: 0,
                      top: '10px',
                      overflow: 'hidden'
                    }}
                    initial={menuAnimation.initial}
                    animate={menuAnimation.animate}
                    exit={menuAnimation.exit}
                    transition={menuAnimation.transition}
                  >
                    <div role="listbox" aria-multiselectable="false">
                      {options.map((option, index) => (
                        <DropdownItem 
                          key={option.id}
                          id={option.id} 
                          title={option.title}
                          onClick={handleOptionClick}
                          isSelected={selectedOption === option.id}
                          index={index}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownButton; 