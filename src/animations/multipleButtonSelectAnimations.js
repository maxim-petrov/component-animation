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

// Конфигурация анимации для компонента MultipleButtonSelect
export const buttonSelectAnimationConfig = {
  type: "tween",
  duration: Duration.S,
  ease: Easing.standard
};

// Анимация для кнопки при наведении
export const buttonHoverAnimation = {
  whileHover: { 
    scale: 1.05,
    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.12)"
  },
  whileTap: { 
    scale: 0.95
  },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
};

// Анимация для активной кнопки
export const activeButtonAnimation = {
  initial: { 
    backgroundColor: "#f5f5f5",
    borderColor: "#e0e0e0",
    color: "#333"
  },
  active: { 
    backgroundColor: "#ebf2ff",
    borderColor: "#4a6cf7",
    color: "#4a6cf7"
  },
  transition: {
    duration: Duration.S,
    ease: Easing.standard
  }
};

// Анимация для перехода между состояниями кнопки
export const buttonToggleAnimation = {
  initial: { scale: 1 },
  toggle: { scale: [1, 1.08, 1] },
  transition: {
    duration: Duration.M,
    ease: Easing.spring,
    times: [0, 0.5, 1]
  }
}; 