import { Duration, Easing, Delay } from './tokens';

// Конфигурация анимации для компонента Cards
export const cardAnimationConfig = {
  type: "tween",
  duration: Duration.M,
  ease: Easing.standard
};

// Анимация для карточки при наведении
export const cardHoverAnimation = {
  whileHover: { 
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" 
  },
  whileTap: { 
    scale: 0.98 
  },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
};

// Анимация для иконки сердца
export const heartIconAnimation = {
  whileHover: { 
    scale: 1.2,
    color: "#ff4157"
  },
  whileTap: { 
    scale: 0.9 
  },
  transition: {
    duration: Duration.S,
    ease: Easing.spring
  }
};

// Анимация для появления карточек
export const cardAppearAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: (custom) => ({
    duration: Duration.M,
    ease: Easing.entrance,
    delay: custom * Delay.short // Последовательное появление карточек
  })
}; 