// Конфигурация анимации для компонента SearchBox
export const searchBoxAnimationConfig = {
  type: "spring",
  stiffness: 290,
  damping: 22.22,
  mass: 1,
  duration: 0.54
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
    ...searchBoxAnimationConfig,
    stiffness: 350
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
      duration: 0.2
    }
  },
  transition: {
    ...searchBoxAnimationConfig,
    stiffness: 350
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
    ...searchBoxAnimationConfig,
    delay: custom * 0.05 // Последовательное появление элементов
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
    ...searchBoxAnimationConfig,
    stiffness: 350,
    delay: 0.1
  }
}; 