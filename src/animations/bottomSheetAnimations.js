import { Easing } from './tokens';

// Настройки Spring-анимации для появления BottomSheet
export const bottomSheetAnimation = {
  initial: { y: '100%', opacity: 100 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [.25, .46, .45, .94]
    }
  },
  exit: { 
    y: '100%', 
    opacity: 100,
    transition: {
      duration: 0.3,
      ease: Easing.Exit
    }
  }
};

// Анимация для контента внутри BottomSheet
export const contentAnimation = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: Easing.Entrance,
      delay: 0.1 // Небольшая задержка для последовательного появления
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: Easing.Exit
    }
  }
};

// Настройки анимации для overlay - анимируем только фон, не трогая дочерние элементы
export const overlayAnimation = {
  initial: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  animate: { 
    backgroundColor: 'rgba(0, 0, 0, 0.541)',
    transition: {
      duration: 0.3,
      ease: [.645, .045, .355, 1]
    }
  },
  exit: { 
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: {
      duration: 0.3,
      ease: [.455, .03, .515, .955]
    }
  }
}; 