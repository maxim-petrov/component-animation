import { Duration, Easing, createSpringConfig, Spring, ComponentAnimations } from './tokens';

// Конфигурация анимации для компонента Tab
export const tabAnimationConfig = {
  type: "tween",
  duration: Duration.S,
  ease: Easing.standard
};

// Анимация для кнопки таба
export const tabButtonAnimation = {
  whileHover: {},
  whileTap: {},
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
};

// Анимация для активной линии под табом
export const activeLineAnimation = {
  ...ComponentAnimations.tabs.indicator
};

// Анимация для подсветки активного таба
export const activeTabAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: {
    duration: ComponentAnimations.tabs.active.duration,
    ease: ComponentAnimations.tabs.active.easing,
    exit: {
      duration: Duration.S,
      ease: Easing.exit
    }
  }
}; 