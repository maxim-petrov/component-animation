import { Duration, Easing, ComponentAnimations } from './tokens';

// Конфигурация анимации для компонента Accordion
export const accordionAnimationConfig = {
  type: "tween",
  duration: Duration.M,
  ease: Easing.Standard
};

// Анимация для стрелки
export const arrowAnimation = {
  transition: {
    duration: Duration.S,
    ease: Easing.Standard,
    type: "tween"
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
      ease: Easing.Spring,
      type: "spring",
      stiffness: 250,
      damping: 25
    },
    opacity: {
      duration: Duration.S,
      ease: Easing.Standard
    }
  },
  style: { overflow: "hidden" }
}; 