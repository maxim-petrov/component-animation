// Конфигурация анимации для компонента Banners
export const bannerAnimationConfig = {
  type: "spring",
  stiffness: 290,
  damping: 22.22,
  mass: 1,
  duration: 0.54
};

// Анимация для баннера при наведении
export const bannerHoverAnimation = {
  whileHover: { 
    scale: 1.04,
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
    y: -5
  },
  whileTap: { 
    scale: 0.98,
    y: 0
  },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 15
  }
};

// Анимация для иконки в баннере
export const bannerIconAnimation = {
  whileHover: { 
    scale: 1.2,
    rotate: 10,
    color: "#ff4157"
  },
  transition: {
    type: "spring",
    stiffness: 500,
    damping: 10
  }
};

// Анимация для появления баннеров
export const bannerAppearAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: (custom) => ({
    ...bannerAnimationConfig,
    delay: custom * 0.15 // Последовательное появление баннеров с большей задержкой
  })
}; 