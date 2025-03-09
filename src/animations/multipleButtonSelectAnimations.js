import { Duration, Easing } from './tokens';

// Конфигурация анимации для компонента MultipleButtonSelect
export const buttonSelectAnimationConfig = {
  type: "tween",
  duration: Duration.S,
  ease: Easing.standard
};

// Анимация для кнопки при наведении
export const buttonHoverAnimation = {
  whileHover: { 
    scale: 1.05,
    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.12)"
  },
  whileTap: { 
    scale: 0.95
  },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
};

// Анимация для активной кнопки
export const activeButtonAnimation = {
  initial: { 
    backgroundColor: "#f5f5f5",
    borderColor: "#e0e0e0",
    color: "#333"
  },
  active: { 
    backgroundColor: "#ebf2ff",
    borderColor: "#4a6cf7",
    color: "#4a6cf7"
  },
  transition: {
    duration: Duration.S,
    ease: Easing.standard
  }
};

// Анимация для перехода между состояниями кнопки
export const buttonToggleAnimation = {
  initial: { scale: 1 },
  toggle: { scale: [1, 1.08, 1] },
  transition: {
    duration: Duration.M,
    ease: Easing.spring,
    times: [0, 0.5, 1]
  }
}; 