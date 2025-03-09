import { Duration, Easing, Delay, ComponentAnimations } from './tokens';

// Конфигурация анимации для компонента SearchBox
export const searchBoxAnimationConfig = {
  type: "tween",
  duration: Duration.S,
  ease: Easing.standard
};

// Анимация для иконки поиска
export const searchIconAnimation = {
  initial: { 
    scale: 1
  },
  focus: { 
    scale: 1.1,
    color: "#4a6cf7"
  },
  transition: {
    duration: Duration.S,
    ease: Easing.standard
  }
};

// Анимация для выпадающего меню
export const dropdownAnimation = {
  initial: { 
    opacity: 0,
    y: -10,
    scaleY: 0.95
  },
  animate: { 
    opacity: 1,
    y: 0,
    scaleY: 1
  },
  exit: { 
    opacity: 0,
    y: -10,
    scaleY: 0.95,
    transition: {
      duration: Duration.S,
      ease: Easing.exit
    }
  },
  transition: {
    duration: ComponentAnimations.dropdown.appear.duration,
    ease: ComponentAnimations.dropdown.appear.easing
  }
};

// Анимация для элементов списка в выпадающем меню
export const listItemAnimation = {
  initial: { 
    opacity: 0,
    x: -5
  },
  animate: { 
    opacity: 1,
    x: 0
  },
  transition: (custom) => ({
    duration: Duration.S,
    ease: Easing.entrance,
    delay: custom * Delay.short // Последовательное появление элементов
  })
};

// Анимация для группировки элементов в выпадающем меню
export const groupTitleAnimation = {
  initial: { 
    opacity: 0,
    y: -5
  },
  animate: { 
    opacity: 1,
    y: 0
  },
  transition: {
    duration: Duration.S,
    ease: Easing.standard,
    delay: Delay.medium
  }
}; 