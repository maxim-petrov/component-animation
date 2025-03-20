import React from 'react';
import '../animations/buttonAnimations.css';
import '../global.css';

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

  return (
    <div className="_Gq5_ ql7Up" data-e2e-id="button-default">
      <div className="CqkE8">
        <button 
          className={`btn-root-119-18-1-1 btn-${variant}-a30-18-1-1 btn-${size}-9e4-18-1-1 btn-typeButtonReset-268-18-1-1 btn-withIcon-a49-18-1-1 animated-button`} 
          type={type}
          onClick={onClick}
        >
          <span className="btn-icon-72f-18-1-1 btn-icon--left-5a5-18-1-1 button-icon">
            <HeartIcon />
          </span>
          <span className="btn-text-398-18-1-1">{text}</span>
        </button>
      </div>
    </div>
  );
};

export default Button; 