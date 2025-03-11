import { Duration, Easing, Delay } from './tokens';

// Конфигурация анимации для компонента Banners
export const bannerAnimationConfig = {
  type: "tween",
  duration: Duration.M,
  ease: Easing.standard
};

// Анимация для баннера при наведении
export const bannerHoverAnimation = {
  whileHover: { 
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)"
  },
  whileTap: { 
    scale: 0.98,
    y: 0
  },
  transition: {
    duration: Duration.S,
    ease: Easing.spring
  }
};

// Анимация для иконки в баннере
export const bannerIconAnimation = {
  whileHover: { 
    scale: 1.2,
    rotate: 10,
    color: "#ff4157"
  },
  transition: {
    duration: Duration.S,
    ease: Easing.spring
  }
};

// Анимация для появления баннеров
export const bannerAppearAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: (custom) => ({
    duration: Duration.M,
    ease: Easing.entrance,
    delay: custom * Delay.medium // Последовательное появление баннеров
  })
}; 