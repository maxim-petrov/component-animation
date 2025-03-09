import React from 'react';
import { motion } from 'framer-motion';
import { tabButtonAnimation } from '../animations/tabAnimations';
import '../global.css';

const Tab = ({ id, label, isActive, onClick }) => {
  return (
    <motion.button 
      type="button" 
      className={`tabs-button-beb-15-1-1 ${isActive ? 'tabs-selected-fe9-15-1-1' : ''}`} 
      value={id} 
      tabIndex="0" 
      data-e2e-id={`example-default-${id}`}
      onClick={() => onClick(id)}
      {...tabButtonAnimation}
    >
      <span className="tabs-label-bd1-15-1-1">{label}</span>
    </motion.button>
  );
};

export default Tab; 