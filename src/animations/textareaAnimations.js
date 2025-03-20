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

// Конфигурация анимации для компонента Textarea
export const textareaAnimationConfig = {
  type: "tween",
  duration: Duration.S,
  ease: Easing.standard
};

// Анимация для фокуса на текстовой области
export const focusAnimation = {
  initial: { 
    borderColor: "#e0e0e0",
    boxShadow: "0 0 0 0 rgba(74, 108, 247, 0)"
  },
  focus: { 
    borderColor: "#4a6cf7",
    boxShadow: "0 0 0 2px rgba(74, 108, 247, 0.2)"
  },
  transition: {
    duration: Duration.S,
    ease: Easing.standard
  }
};

// Анимация для изменения высоты текстовой области
export const heightAnimation = {
  transition: {
    duration: Duration.M,
    ease: Easing.standard
  }
};

// Анимация для плейсхолдера
export const placeholderAnimation = {
  initial: { 
    opacity: 1
  },
  focus: { 
    opacity: 0.6
  },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
}; 