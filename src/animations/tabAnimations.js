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

// Параметры пружинной анимации (spring)
const Spring = {
  // Готовые конфигурации для различных сценариев
  Strong: { stiffness: 290, damping: 22, mass: 1 },   // энергичный эффект для быстрых и отзывчивых элементов, включая аккордеон
  Medium: { stiffness: 200, damping: 18, mass: 1 },   // сбалансированный эффект для большинства интерфейсных анимаций
  Gentle: { stiffness: 120, damping: 14, mass: 1.2 }  // мягкий, плавный эффект для больших элементов и эмоциональных анимаций
};

// Создает конфигурацию пружинной анимации для Framer Motion
const createSpringConfig = ({
  stiffness = Spring.Medium.stiffness,
  damping = Spring.Medium.damping,
  mass = Spring.Medium.mass,
  delay = 0,
  ...rest
}) => ({
  transition: {
    type: "spring",
    stiffness,
    damping,
    mass,
    delay,
    ...rest
  }
});

// Анимации для различных компонентов
const ComponentAnimations = {
  tabs: {
    indicator: {
      transition: {
        type: "spring",
        stiffness: Spring.Medium.stiffness,
        damping: Spring.Medium.damping,
        mass: 1
      }
    },
    active: {
      duration: Duration.S,
      easing: Easing.standard
    }
  }
};

// Конфигурация анимации для компонента Tab
export const tabAnimationConfig = {
  type: "tween",
  duration: Duration.S,
  ease: Easing.standard
};

// Анимация для кнопки таба
export const tabButtonAnimation = {
  whileHover: {},
  whileTap: {},
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
};

// Анимация для активной линии под табом
export const activeLineAnimation = {
  ...ComponentAnimations.tabs.indicator
};

// Анимация для подсветки активного таба
export const activeTabAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: {
    duration: ComponentAnimations.tabs.active.duration,
    ease: ComponentAnimations.tabs.active.easing,
    exit: {
      duration: Duration.S,
      ease: Easing.exit
    }
  }
}; 