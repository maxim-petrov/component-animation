import { Duration, Easing, ComponentAnimations } from './tokens';

// Конфигурация анимации для компонента Checkbox
export const checkboxAnimationConfig = {
  type: "tween",
  duration: Duration.S,
  ease: Easing.standard
};

// Анимация для чекбокса при наведении
export const checkboxHoverAnimation = {
  whileHover: { 
    scale: 1.05,
    boxShadow: "0px 0px 4px rgba(74, 108, 247, 0.5)"
  },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
};

// Анимация для иконки галочки
export const checkIconAnimation = {
  initial: { 
    opacity: 0,
    scale: 0.5,
    pathLength: 0
  },
  checked: { 
    opacity: 1,
    scale: 1,
    pathLength: 1
  },
  transition: {
    duration: ComponentAnimations.toggle.duration,
    ease: Easing.entrance
  }
};

// Анимация для контейнера иконки
export const iconContainerAnimation = {
  initial: {
    backgroundColor: "transparent",
    borderColor: "#757575"
  },
  checked: {
    backgroundColor: "#4a6cf7",
    borderColor: "#4a6cf7"
  },
  transition: {
    duration: Duration.S,
    ease: Easing.standard
  }
};

// Анимация для текста чекбокса
export const checkboxTextAnimation = {
  whileHover: { 
    color: "#4a6cf7"
  },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
}; 