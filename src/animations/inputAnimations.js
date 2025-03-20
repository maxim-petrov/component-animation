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

// Конфигурация анимации для компонента Input
export const inputAnimationConfig = {
  type: "tween",
  duration: Duration.S,
  ease: Easing.standard
};

// Анимация для лейбла при фокусе
export const labelAnimation = {
  initial: { 
    y: 0,
    scale: 1,
    color: "#757575"
  },
  focus: { 
    y: -12, 
    scale: 0.9,
    color: "#4a6cf7"
  },
  transition: {
    duration: Duration.S,
    ease: Easing.entrance
  }
};

// Анимация для иконки очистки
export const clearIconAnimation = {
  initial: { 
    opacity: 0,
    scale: 0.8,
    rotate: -45
  },
  animate: { 
    opacity: 1,
    scale: 1,
    rotate: 0
  },
  exit: { 
    opacity: 0,
    scale: 0.8,
    rotate: 45
  },
  transition: {
    duration: Duration.S,
    ease: Easing.standard,
    exit: {
      duration: Duration.XS,
      ease: Easing.exit
    }
  }
};

// Анимация для информационной иконки
export const infoIconAnimation = {
  whileHover: { 
    scale: 1.1,
    color: "#4a6cf7"
  },
  whileTap: { 
    scale: 0.9
  },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
};

// Анимация для бордера при фокусе
export const borderAnimation = {
  initial: { 
    boxShadow: "0 0 0 0 rgba(74, 108, 247, 0)"
  },
  focus: { 
    boxShadow: "0 0 0 2px rgba(74, 108, 247, 0.3)"
  },
  transition: {
    duration: Duration.S,
    ease: Easing.standard
  }
}; 