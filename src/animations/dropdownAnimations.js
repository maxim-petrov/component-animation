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
    y: 40,
    height: '96px',
    transformOrigin: "top"
  },
  animate: { 
    opacity: 1,
    y: 0,
    height: 'auto',
    transformOrigin: "top"
  },
  exit: { 
    opacity: 0,
    y: 40,
    height: '96px',
    transformOrigin: "top"
  },
  transition: {
    type: "tween",
    duration: 0.25,
    ease: Easing.Standard,
    height: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1] // Кастомный easing для более плавного изменения высоты
    }
  }
};

// Анимация для пунктов выпадающего меню
export const menuItemAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 + custom * 0.04,
      duration: 0.25,
      ease: Easing.Standard
    }
  })
}; 