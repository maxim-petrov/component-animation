// Конфигурация анимации для компонента DropdownButton
export const dropdownAnimationConfig = {
  type: "spring",
  stiffness: 290,
  damping: 22.22,
  mass: 1,
  duration: 0.54
};

// Анимация для стрелки выпадающего списка
export const arrowAnimation = {
  initial: { rotate: 0 },
  animate: (isOpen) => ({ 
    rotate: isOpen ? 180 : 0 
  }),
  transition: dropdownAnimationConfig
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
    type: "spring",
    stiffness: 400,
    damping: 17
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
    ...dropdownAnimationConfig,
    stiffness: 350
  }
};

// Анимация для пунктов выпадающего меню
export const menuItemAnimation = {
  initial: { opacity: 0, x: -5 },
  animate: { opacity: 1, x: 0 },
  transition: (custom) => ({
    ...dropdownAnimationConfig,
    delay: custom * 0.05 // Последовательное появление пунктов
  })
}; 