// Конфигурация анимации для компонента Tab
export const tabAnimationConfig = {
  type: "spring",
  stiffness: 290,
  damping: 22.22,
  mass: 1,
  duration: 0.54
};

// Анимация для кнопки таба
export const tabButtonAnimation = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17
  }
};

// Анимация для подсветки активного таба
export const activeTabAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: tabAnimationConfig
}; 