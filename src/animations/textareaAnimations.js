// Конфигурация анимации для компонента Textarea
export const textareaAnimationConfig = {
  type: "spring",
  stiffness: 290,
  damping: 22.22,
  mass: 1,
  duration: 0.54
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
  transition: textareaAnimationConfig
};

// Анимация для изменения высоты текстовой области
export const heightAnimation = {
  transition: {
    type: "spring",
    stiffness: 500,
    damping: 30,
    mass: 1
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
    duration: 0.2
  }
}; 