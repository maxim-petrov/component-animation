import { Duration, Easing, Spring, createSpringConfig, ComponentAnimations } from './tokens';

// Конфигурация анимации для компонента Button
export const buttonAnimationConfig = {
  ...createSpringConfig({
    ...Spring.Strong
  })
};

// Анимация для кнопки при наведении и клике
export const buttonHoverAnimation = {
  whileHover: { 
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"
  },
  whileTap: { 
    scale: 0.96,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 20,
      mass: 0.5
    }
  },
  transition: createSpringConfig({
    ...Spring.Strong
  })
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
    ease: Easing.standard
  }
}; 