import { Duration, Easing } from './tokens';

// Конфигурация анимации для компонента Button
export const buttonAnimationConfig = {
  type: "spring",
  stiffness: 290,
  damping: 22.22,
  mass: 1,
  duration: Duration.M
};

// Анимация для кнопки при наведении
export const buttonHoverAnimation = {
  whileHover: { 
    scale: 1.05,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"
  },
  whileTap: { 
    scale: 0.95
  },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
    duration: Duration.S
  }
};

// Анимация для иконки внутри кнопки
export const iconAnimation = {
  initial: { 
    scale: 1
  },
  hover: { 
    scale: 1.15,
    rotate: [0, 5, -5, 0],
    transition: {
      rotate: {
        repeat: 0,
        duration: Duration.S
      },
      scale: {
        duration: Duration.XS,
        ease: Easing.spring
      }
    }
  },
  tap: { 
    scale: 0.9
  },
  transition: {
    duration: Duration.S,
    ease: Easing.spring
  }
}; 