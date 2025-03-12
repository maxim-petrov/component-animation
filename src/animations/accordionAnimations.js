import { Duration, Easing, Spring, createSpringConfig, ComponentAnimations } from './tokens';

// Конфигурация анимации для компонента Accordion
export const accordionAnimationConfig = {
  type: "tween",
  duration: Duration.M,
  ease: Easing.standard
};

// Анимация для стрелки
export const arrowAnimation = {
  transition: {
    duration: Duration.S,
    ease: Easing.spring,
    type: "spring",
    stiffness: Spring.Strong.stiffness,
    damping: Spring.Strong.damping,
    mass: Spring.Strong.mass
  }
};

// Анимация для контента
export const contentAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: {
    height: {
      duration: Duration.M,
      ease: Easing.spring,
      type: "spring",
      stiffness: Spring.Strong.stiffness,
      damping: Spring.Strong.damping,
      mass: Spring.Strong.mass
    },
    opacity: {
      duration: Duration.S,
      ease: Easing.standard
    }
  },
  style: { overflow: "hidden" }
}; 