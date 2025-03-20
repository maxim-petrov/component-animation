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

// Анимации для различных компонентов
const ComponentAnimations = {
  toggle: {
    duration: Duration.S // Длительность для переключателей
  }
};

// Конфигурация анимации для компонента Checkbox
export const checkboxAnimationConfig = {
  type: "tween",
  duration: Duration.S,
  ease: Easing.standard
};

// Анимация для чекбокса при наведении
export const checkboxHoverAnimation = {
  whileHover: { 
    scale: 1.05,
    boxShadow: "0px 0px 4px rgba(74, 108, 247, 0.5)"
  },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
};

// Анимация для иконки галочки
export const checkIconAnimation = {
  initial: { 
    opacity: 0,
    scale: 0.5,
    pathLength: 0
  },
  checked: { 
    opacity: 1,
    scale: 1,
    pathLength: 1
  },
  transition: {
    duration: ComponentAnimations.toggle.duration,
    ease: Easing.entrance
  }
};

// Анимация для контейнера иконки
export const iconContainerAnimation = {
  initial: {
    backgroundColor: "transparent",
    borderColor: "#757575"
  },
  checked: {
    backgroundColor: "#4a6cf7",
    borderColor: "#4a6cf7"
  },
  transition: {
    duration: Duration.S,
    ease: Easing.standard
  }
};

// Анимация для текста чекбокса
export const checkboxTextAnimation = {
  whileHover: { 
    color: "#4a6cf7"
  },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
}; 