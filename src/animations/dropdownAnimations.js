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

// Анимации для различных компонентов (необходимые определения)
const ComponentAnimations = {};

// Конфигурация анимации для компонента DropdownButton
export const dropdownAnimationConfig = {
  type: "tween",
  duration: Duration.M,
  ease: Easing.standard
};

// Анимация для стрелки выпадающего списка
export const arrowAnimation = {
  initial: { rotate: 0 },
  animate: (isOpen) => ({ 
    rotate: isOpen ? 180 : 0 
  }),
  transition: {
    duration: Duration.S,
    ease: Easing.spring,
    type: "spring",
    stiffness: Spring.Strong.stiffness,
    damping: Spring.Strong.damping,
    mass: Spring.Strong.mass
  }
};

// Анимация для кнопки при наведении
export const buttonHoverAnimation = {
  whileHover: { 
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
  },
  whileTap: { },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
};

// Анимация для выпадающего меню
export const menuAnimation = {
  initial: { 
    opacity: 0,
    y: 40,
    height: '96px',
    transformOrigin: "top"
  },
  animate: { 
    opacity: 1,
    y: 0,
    height: 'auto',
    transformOrigin: "top"
  },
  exit: { 
    opacity: 0,
    y: 40,
    height: '96px',
    transformOrigin: "top"
  },
  transition: {
    type: "tween",
    duration: Duration.S,
    ease: Easing.standard,
    height: {
      duration: Duration.M,
      ease: Easing.standard
    }
  }
};

// Анимация для пунктов выпадающего меню
export const menuItemAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: Delay.short + custom * 0.02,
      duration: Duration.S,
      ease: Easing.standard
    }
  })
}; 