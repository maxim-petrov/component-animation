import { Duration, Easing } from './tokens';

// Конфигурация анимации для компонента Button
export const buttonAnimationConfig = {
  type: "spring",
  stiffness: 290,
  damping: 22.22,
  mass: 1,
  duration: Duration.M
};

// Анимация для кнопки при наведении и клике
export const buttonHoverAnimation = {
  whileHover: { 
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"
  },
  whileTap: { 
    scale: 0.96
  },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
    duration: Duration.S
  }
};

// Анимация для иконки внутри кнопки (без анимации при ховере)
export const iconAnimation = {
  initial: { 
    scale: 1
  },
  hover: { 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0
    }
  },
  tap: { 
    scale: 0.96
  },
  transition: {
    duration: Duration.S,
    ease: Easing.Standard
  }
}; 