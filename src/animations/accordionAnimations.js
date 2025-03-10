import { Duration, Easing, ComponentAnimations, Spring, createSpringConfig } from './tokens';

// Конфигурация анимации для компонента Accordion
export const accordionAnimationConfig = {
  type: "tween",
  duration: Duration.M,
  ease: Easing.Standard
};

// Анимация для стрелки
export const arrowAnimation = {
  transition: createSpringConfig({
    stiffness: Spring.Stiffness.Firm,
    damping: Spring.Damping.High,
    mass: Spring.Mass.Default
  }).transition
};

// Анимация для контента
export const contentAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: {
    height: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      when: "beforeChildren"
    },
    opacity: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  style: { overflow: "hidden" }
}; 