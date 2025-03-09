import { Duration, Easing } from './tokens';

// Конфигурация анимации для компонента Textarea
export const textareaAnimationConfig = {
  type: "tween",
  duration: Duration.S,
  ease: Easing.standard
};

// Анимация для фокуса на текстовой области
export const focusAnimation = {
  initial: { 
    borderColor: "#e0e0e0",
    boxShadow: "0 0 0 0 rgba(74, 108, 247, 0)"
  },
  focus: { 
    borderColor: "#4a6cf7",
    boxShadow: "0 0 0 2px rgba(74, 108, 247, 0.2)"
  },
  transition: {
    duration: Duration.S,
    ease: Easing.standard
  }
};

// Анимация для изменения высоты текстовой области
export const heightAnimation = {
  transition: {
    duration: Duration.M,
    ease: Easing.standard
  }
};

// Анимация для плейсхолдера
export const placeholderAnimation = {
  initial: { 
    opacity: 1
  },
  focus: { 
    opacity: 0.6
  },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
}; 