// Конфигурация анимации для компонента Cards
export const cardAnimationConfig = {
  type: "spring",
  stiffness: 290,
  damping: 22.22,
  mass: 1,
  duration: 0.54
};

// Анимация для карточки при наведении
export const cardHoverAnimation = {
  whileHover: { 
    scale: 1.03,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" 
  },
  whileTap: { 
    scale: 0.98 
  },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17
  }
};

// Анимация для иконки сердца
export const heartIconAnimation = {
  whileHover: { 
    scale: 1.2,
    color: "#ff4157"
  },
  whileTap: { 
    scale: 0.9 
  },
  transition: {
    type: "spring",
    stiffness: 500,
    damping: 15
  }
};

// Анимация для появления карточек
export const cardAppearAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: (custom) => ({
    ...cardAnimationConfig,
    delay: custom * 0.1 // Последовательное появление карточек
  })
}; 