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

// Анимация для внутреннего изображения при наведении на баннер
export const bannerImageAnimation = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  variants: {
    hover: { scale: 1.1 }
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
  variants: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1.2
      }
    }
  }
}; 