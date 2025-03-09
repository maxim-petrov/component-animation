// Конфигурация анимации для компонента Accordion
export const accordionAnimationConfig = {
  type: "spring",
  stiffness: 290,
  damping: 22.22,
  mass: 1,
  duration: 0.54
};

// Анимация для стрелки
export const arrowAnimation = {
  animate: (isOpen) => ({ rotate: isOpen ? 180 : 0 }),
  transition: accordionAnimationConfig
};

// Анимация для контента
export const contentAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: accordionAnimationConfig,
  style: { overflow: "hidden" }
}; 