import React from 'react';
import '../global.css';

const Tab = ({ id, label, isActive, onClick }) => {
  return (
    <button 
      type="button" 
      className={`tabs-button-beb-15-1-1 ${isActive ? 'tabs-selected-fe9-15-1-1' : ''}`} 
      value={id} 
      tabIndex="0" 
      data-e2e-id={`example-default-${id}`}
      onClick={() => onClick(id)}
    >
      <span className="tabs-label-bd1-15-1-1">{label}</span>
    </button>
  );
};

export default Tab; 