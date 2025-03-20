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

// Конфигурация анимации для компонента Tabs
export const tabsAnimationConfig = {
  type: "tween",
  duration: Duration.M,
  ease: Easing.standard
};

// Анимация для контента табов
export const tabContentAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: Duration.M,
    ease: Easing.entrance,
    exit: {
      duration: Duration.S,
      ease: Easing.exit
    }
  }
};

// Анимация для стрелки прокрутки
export const scrollArrowAnimation = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
    duration: Duration.XS
  }
}; 