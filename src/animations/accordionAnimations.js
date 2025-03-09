import { Duration, Easing, ComponentAnimations } from './tokens';

// Конфигурация анимации для компонента Accordion
export const accordionAnimationConfig = {
  type: "tween",
  duration: Duration.M,
  ease: Easing.standard
};

// Анимация для стрелки
export const arrowAnimation = {
  animate: (isOpen) => ({ rotate: isOpen ? 180 : 0 }),
  transition: {
    duration: Duration.S,
    ease: Easing.standard
  }
};

// Анимация для контента
export const contentAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: {
    height: {
      duration: ComponentAnimations.accordion.expand.duration,
      ease: ComponentAnimations.accordion.expand.easing
    },
    opacity: {
      duration: Duration.S,
      ease: Easing.standard
    }
  },
  style: { overflow: "hidden" }
}; 