// Конфигурация анимации для компонента Tabs
export const tabsAnimationConfig = {
  type: "spring",
  stiffness: 290,
  damping: 22.22,
  mass: 1,
  duration: 0.54
};

// Анимация для контента табов
export const tabContentAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: tabsAnimationConfig
};

// Анимация для стрелки прокрутки
export const scrollArrowAnimation = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17
  }
}; 