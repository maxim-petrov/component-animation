import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  checkboxAnimationConfig, 
  checkboxHoverAnimation, 
  checkIconAnimation, 
  iconContainerAnimation,
  checkboxTextAnimation
} from '../animations/checkboxAnimations';
import '../global.css';

const CheckboxItem = ({ id, label, isChecked, onChange }) => {
  return (
    <motion.label 
      className="checkbox-root-09c-9-1-0 checkbox-checkbox-53f-9-1-0" 
      data-e2e-id={`checkbox__${id}`}
      {...checkboxHoverAnimation}
    >
      <input 
        className="checkbox-input-688-9-1-0" 
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(id)}
      />
      <motion.div 
        className="checkbox-iconContainer-80d-9-1-0"
        animate={isChecked ? "checked" : "initial"}
        variants={iconContainerAnimation}
      >
        <motion.div 
          className="icon-root-864-6-0-3 checkbox-icon-044-9-1-0"
          animate={isChecked ? "checked" : "initial"}
          variants={checkIconAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
            <motion.path 
              fill="currentColor" 
              fillRule="evenodd" 
              d="M14.015 4.092a.863.863 0 0 1-.018 1.202l-6.58 6.513a1.232 1.232 0 0 1-1.755-.014L1.994 8.049a.863.863 0 0 1 0-1.203.822.822 0 0 1 1.179 0l3.378 3.448 6.285-6.22a.822.822 0 0 1 1.179.018Z" 
              clipRule="evenodd"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isChecked ? 1 : 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35
              }}
            />
          </svg>
        </motion.div>
      </motion.div>
      <motion.span 
        className="checkbox-text-0de-9-1-0"
        {...checkboxTextAnimation}
      >
        {label}
      </motion.span>
    </motion.label>
  );
};

const Checkbox = () => {
  const [checkedItems, setCheckedItems] = useState({
    'value-1': false,
    'value-2': false,
    'value-3': false,
    'value-4': false
  });

  const handleCheckboxChange = (id) => {
    setCheckedItems({
      ...checkedItems,
      [id]: !checkedItems[id]
    });
  };

  const checkboxItems = [
    { id: 'value-1', label: 'Лейбл' },
    { id: 'value-2', label: 'Лейбл' },
    { id: 'value-3', label: 'Лейбл' },
    { id: 'value-4', label: 'Лейбл' }
  ];

  return (
    <div className="_Gq5_ ql7Up" data-e2e-id="checkbox-list">
      <div className="" style={{ marginBottom: '0px' }}>
        <div className="checkbox-list-33c-9-1-0 checkbox-vertical-d04-9-1-0">
          {checkboxItems.map((item) => (
            <CheckboxItem 
              key={item.id}
              id={item.id}
              label={item.label}
              isChecked={checkedItems[item.id]}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkbox; 