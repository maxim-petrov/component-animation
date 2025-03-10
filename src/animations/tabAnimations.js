import { Duration, Easing } from './tokens';

// Конфигурация анимации для компонента Tab
export const tabAnimationConfig = {
  type: "tween",
  duration: Duration.S,
  ease: Easing.standard
};

// Анимация для кнопки таба
export const tabButtonAnimation = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
};

// Анимация для активной линии под табом
export const activeLineAnimation = {
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 0.8,
    duration: Duration.M
  }
};

// Анимация для подсветки активного таба
export const activeTabAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: {
    duration: Duration.S,
    ease: Easing.entrance,
    exit: {
      duration: Duration.S,
      ease: Easing.exit
    }
  }
}; 