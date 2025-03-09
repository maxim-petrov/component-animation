import { Duration, Easing } from './tokens';

// Конфигурация анимации для компонента Tabs
export const tabsAnimationConfig = {
  type: "tween",
  duration: Duration.M,
  ease: Easing.standard
};

// Анимация для контента табов
export const tabContentAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: Duration.M,
    ease: Easing.entrance,
    exit: {
      duration: Duration.S,
      ease: Easing.exit
    }
  }
};

// Анимация для стрелки прокрутки
export const scrollArrowAnimation = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
    duration: Duration.XS
  }
}; 