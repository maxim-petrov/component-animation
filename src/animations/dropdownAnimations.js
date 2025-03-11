import { Duration, Easing, Delay, ComponentAnimations } from './tokens';

// Конфигурация анимации для компонента DropdownButton
export const dropdownAnimationConfig = {
  type: "tween",
  duration: Duration.M,
  ease: Easing.Standard
};

// Анимация для стрелки выпадающего списка
export const arrowAnimation = {
  initial: { rotate: 0 },
  animate: (isOpen) => ({ 
    rotate: isOpen ? 180 : 0 
  }),
  transition: {
    duration: Duration.S,
    ease: Easing.Standard
  }
};

// Анимация для кнопки при наведении
export const buttonHoverAnimation = {
  whileHover: { 
    scale: 1.03,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
  },
  whileTap: { 
    scale: 0.97
  },
  transition: {
    duration: Duration.XS,
    ease: Easing.Standard
  }
};

// Анимация для выпадающего меню
export const menuAnimation = {
  initial: { 
    opacity: 0,
    scale: 0.98,
    transformOrigin: "top center",
    y: -5
  },
  animate: { 
    opacity: 1,
    scale: 1,
    transformOrigin: "top center",
    y: 0
  },
  exit: { 
    opacity: 0,
    scale: 0.98,
    transformOrigin: "top center",
    y: -5
  },
  transition: {
    type: "spring",
    stiffness: 350,
    damping: 25,
    mass: 0.8,
    opacity: {
      duration: 0.1
    }
  }
};

// Анимация для пунктов выпадающего меню
export const menuItemAnimation = {
  initial: { opacity: 0, y: -3 },
  animate: { opacity: 1, y: 0 },
  transition: (custom) => ({
    duration: Duration.S,
    ease: Easing.Entrance,
    delay: custom * 0.03
  })
}; 