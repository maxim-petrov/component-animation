// Конфигурация анимации для компонента Input
export const inputAnimationConfig = {
  type: "spring",
  stiffness: 290,
  damping: 22.22,
  mass: 1,
  duration: 0.54
};

// Анимация для лейбла при фокусе
export const labelAnimation = {
  initial: { 
    y: 0,
    scale: 1,
    color: "#757575"
  },
  focus: { 
    y: -12, 
    scale: 0.9,
    color: "#4a6cf7"
  },
  transition: {
    ...inputAnimationConfig,
    stiffness: 350
  }
};

// Анимация для иконки очистки
export const clearIconAnimation = {
  initial: { 
    opacity: 0,
    scale: 0.8,
    rotate: -45
  },
  animate: { 
    opacity: 1,
    scale: 1,
    rotate: 0
  },
  exit: { 
    opacity: 0,
    scale: 0.8,
    rotate: 45
  },
  transition: {
    ...inputAnimationConfig,
    stiffness: 350
  }
};

// Анимация для информационной иконки
export const infoIconAnimation = {
  whileHover: { 
    scale: 1.1,
    color: "#4a6cf7"
  },
  whileTap: { 
    scale: 0.9
  },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17
  }
};

// Анимация для бордера при фокусе
export const borderAnimation = {
  initial: { 
    boxShadow: "0 0 0 0 rgba(74, 108, 247, 0)"
  },
  focus: { 
    boxShadow: "0 0 0 2px rgba(74, 108, 247, 0.3)"
  },
  transition: {
    ...inputAnimationConfig,
    stiffness: 350
  }
}; 