
// Длительность анимаций (в секундах) 
const Duration = {
  XXS: 0.05,   // 50ms - для мгновенных микро-анимаций
  XS: 0.1,     // 100ms - быстрые микро-анимации (ховер-эффекты)
  S: 0.15,     // 150ms - небольшие UI-изменения (кнопки, переключатели)
  M: 0.25,     // 250ms - стандартные переходы (модальные окна, выпадающие меню)
  L: 0.3,      // 300ms - крупные изменения (карточки, панели)
  XL: 0.4,     // 400ms - сложные/выразительные анимации
  XXL: 0.7     // 700ms - особо выразительные анимации
};

// Кривые ускорения (easing)
const Easing = {
  // Базовые кривые
  standard: [0.4, 0.0, 0.2, 1.0],    // Стандартная кривая
  entrance: [0.0, 0.0, 0.3, 1.0],    // Для появления элементов
  exit: [0.4, 0.14, 1.0, 1.0],       // Для исчезновения элементов
  spring: [0.43, 0.28, 0.52, 1.23]   // Пружинная кривая
};

// Задержки анимаций (в секундах)
const Delay = {
  none: 0,      // без задержки, мгновенный отклик
  short: 0.05,  // 50мс - для последовательного появления элементов
  medium: 0.1,  // 100мс - средняя задержка
  long: 0.2,    // 200мс - для более ощутимой паузы
  extended: 0.5, // 500мс
  extra: 1.0    // 1000мс
};

// Анимации для различных компонентов
const ComponentAnimations = {
  dropdown: {
    appear: {
      duration: Duration.M,
      easing: Easing.entrance
    }
  }
};

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