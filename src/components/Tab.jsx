import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { tabButtonAnimation } from '../animations/tabAnimations';
import '../global.css';

const Tab = forwardRef(({ id, label, isActive, onClick }, ref) => {
  return (
    <motion.button 
      ref={ref}
      type="button" 
      className={`tabs-button-beb-15-1-1 ${isActive ? 'tabs-selected-fe9-15-1-1' : ''}`} 
      value={id} 
      tabIndex="0" 
      data-e2e-id={`example-default-${id}`}
      onClick={onClick}
      {...tabButtonAnimation}
    >
      <span className="tabs-label-bd1-15-1-1">{label}</span>
    </motion.button>
  );
});

export default Tab; 