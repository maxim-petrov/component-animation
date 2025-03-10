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
    ease: Easing.Spring,
    type: "spring",
    stiffness: 290,
    damping: 22.22,
    mass: 1
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
      stiffness: 290,
      damping: 22.22,
      mass: 1
    },
    opacity: {
      duration: Duration.S,
      ease: Easing.Standard
    }
  },
  style: { overflow: "hidden" }
}; 