import { Duration, Easing, Delay, ComponentAnimations } from './tokens';

// Конфигурация анимации для компонента DropdownButton
export const dropdownAnimationConfig = {
  type: "tween",
  duration: Duration.M,
  ease: Easing.standard
};

// Анимация для стрелки выпадающего списка
export const arrowAnimation = {
  initial: { rotate: 0 },
  animate: (isOpen) => ({ 
    rotate: isOpen ? 180 : 0 
  }),
  transition: {
    duration: Duration.S,
    ease: Easing.standard
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
    ease: Easing.standard
  }
};

// Анимация для выпадающего меню
export const menuAnimation = {
  initial: { 
    opacity: 0,
    y: -10,
    scaleY: 0.8
  },
  animate: { 
    opacity: 1,
    y: 0,
    scaleY: 1
  },
  exit: { 
    opacity: 0,
    y: -10,
    scaleY: 0.8
  },
  transition: {
    duration: ComponentAnimations.dropdown.appear.duration,
    ease: ComponentAnimations.dropdown.appear.easing,
    exit: {
      duration: ComponentAnimations.dropdown.disappear.duration,
      ease: ComponentAnimations.dropdown.disappear.easing
    }
  }
};

// Анимация для пунктов выпадающего меню
export const menuItemAnimation = {
  initial: { opacity: 0, x: -5 },
  animate: { opacity: 1, x: 0 },
  transition: (custom) => ({
    duration: Duration.S,
    ease: Easing.entrance,
    delay: custom * Delay.short // Последовательное появление пунктов
  })
}; 