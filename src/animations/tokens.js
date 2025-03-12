/**
 * Система токенов анимации
 * 
 * Основана на лучших практиках UI анимаций:
 * - Длительность: 70-700мс оптимальный диапазон
 * - Easing: нелинейные кривые для естественного движения
 * - Задержки: минимальные, для последовательного появления элементов
 * - Spring: параметры пружинной анимации для естественного движения
 */

// Импорт дополнительных модулей
import { motion } from 'framer-motion';

// Длительность анимаций (в секундах)
export const Duration = {
  XXS: 0.05,   // 50ms - для мгновенных микро-анимаций
  XS: 0.1,     // 100ms - быстрые микро-анимации (ховер-эффекты)
  S: 0.15,     // 150ms - небольшие UI-изменения (кнопки, переключатели)
  M: 0.25,     // 250ms - стандартные переходы (модальные окна, выпадающие меню)
  L: 0.3,      // 300ms - крупные изменения (карточки, панели)
  XL: 0.4      // 400ms - сложные/выразительные анимации, декоративные эффекты
};

// Кривые ускорения (easing)
export const Easing = {
  // Базовые кривые
  standard: [0.4, 0.0, 0.2, 1.0],    // Стандартная кривая
  entrance: [0.0, 0.0, 0.3, 1.0],    // Для появления элементов
  exit: [0.4, 0.14, 1.0, 1.0],       // Для исчезновения элементов
  spring: [0.43, 0.28, 0.52, 1.23],  // Пружинная кривая
};

// Строковые значения для CSS
export const EasingCSS = {
  standard: `cubic-bezier(${Easing.standard.join(', ')})`,
  entrance: `cubic-bezier(${Easing.entrance.join(', ')})`,
  exit: `cubic-bezier(${Easing.exit.join(', ')})`,
  spring: `cubic-bezier(${Easing.spring.join(', ')})`
};

// Задержки анимаций (в секундах)
export const Delay = {
  none: 0,      // без задержки, мгновенный отклик
  short: 0.05,  // 50мс - для последовательного появления элементов
  medium: 0.1,  // 100мс - средняя задержка
  long: 0.2     // 200мс - для более ощутимой паузы
};

// Параметры пружинной анимации (spring)
export const Spring = {
  // Готовые конфигурации для различных сценариев
  Strong: { stiffness: 290, damping: 22, mass: 1 },  // энергичный эффект для быстрых и отзывчивых элементов, включая аккордеон
  Medium: { stiffness: 200, damping: 18, mass: 1 },    // сбалансированный эффект для большинства интерфейсных анимаций
  Gentle: { stiffness: 120, damping: 14, mass: 1.2 },  // мягкий, плавный эффект для больших элементов и эмоциональных анимаций
  
  // Жесткость пружины (stiffness)
  Stiffness: {
    Soft: 120,       // Мягкая пружина - медленное движение
    Medium: 200,     // Стандартная пружина - сбалансированное движение
    Firm: 290,       // Упругая пружина - быстрое, энергичное движение
  },
  
  // Затухание (damping)
  Damping: {
    Low: 10,         // Слабое затухание - множественные колебания
    Medium: 18,      // Среднее затухание - небольшое перелетание
    High: 22,        // Сильное затухание - минимальные колебания
  },
  
  // Масса объекта (mass)
  Mass: {
    Light: 0.8,      // Легкий объект - быстрое движение
    Default: 1,      // Стандартная масса
    Heavy: 1.2,      // Тяжелый объект - более инертное движение
  }
};

/**
 * Создает конфигурацию анимации для Framer Motion
 */
export const createAnimationConfig = ({
  duration = Duration.M,
  easing = Easing.standard,
  delay = Delay.none,
  ...rest
}) => ({
  transition: {
    duration,
    ease: easing,
    delay,
    ...rest
  }
});

/**
 * Создает конфигурацию пружинной анимации для Framer Motion
 */
export const createSpringConfig = ({
  stiffness = Spring.Medium.stiffness,
  damping = Spring.Medium.damping,
  mass = Spring.Medium.mass,
  delay = Delay.none,
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

/**
 * Типы анимаций по назначению
 * 
 * 1. Функциональные - улучшают понятность интерфейса, дают обратную связь
 *    - Короткие по времени (XS-S)
 *    - Небольшие по расстоянию
 *    - Стандартные/entrance кривые
 * 
 * 2. Структурные - помогают понять изменения в интерфейсе
 *    - Средняя или длительная продолжительность (M-L)
 *    - Плавные кривые (ease-in-out или комбинация entrance→exit)
 *    - Сопровождают переходы между состояниями интерфейса
 * 
 * 3. Эмоциональные - создают настроение, вау-эффект
 *    - Более длительные (L-XL)
 *    - Нестандартные кривые (spring, bouncy)
 *    - Используются спорадически в ключевых точках
 */

// Примеры применения для компонентов
export const ComponentAnimations = {
  // Кнопки - быстрые микровзаимодействия
  button: {
    hover: {
      duration: Duration.XS,
      easing: Easing.standard,
      delay: Delay.none
    },
    press: {
      duration: Duration.S,
      easing: Easing.standard,
      delay: Delay.none
    },
    icon: createSpringConfig({
      ...Spring.Strong
    })
  },
  
  // Модальные окна - более заметные переходы
  modal: {
    appear: {
      duration: Duration.M,
      easing: Easing.entrance,
      delay: Delay.none
    },
    disappear: {
      duration: Duration.S,
      easing: Easing.exit,
      delay: Delay.none
    },
    // Фоновая подложка обычно имеет отдельную анимацию
    overlay: {
      duration: Duration.S,
      easing: Easing.standard
    }
  },
  
  // Выпадающие списки, меню
  dropdown: {
    appear: createSpringConfig({
      ...Spring.Medium,
      mass: Spring.Mass.Light
    }),
    disappear: {
      duration: Duration.S,
      easing: Easing.exit
    }
  },
  
  // Переключатели, чекбоксы
  toggle: {
    duration: Duration.S,
    easing: Easing.standard
  },
  
  // Аккордеоны, раскрывающиеся блоки
  accordion: {
    expand: {
      type: "spring",
      stiffness: Spring.Strong.stiffness,
      damping: Spring.Strong.damping,
      mass: Spring.Strong.mass,
      duration: Duration.M,
      ease: Easing.spring
    },
    collapse: {
      type: "spring",
      stiffness: Spring.Strong.stiffness,
      damping: Spring.Strong.damping,
      mass: Spring.Strong.mass,
      duration: Duration.S,
      ease: Easing.spring
    }
  },
  
  // Вкладки (табы)
  tabs: {
    indicator: createSpringConfig({
      ...Spring.Strong
    }),
    content: {
      duration: Duration.S,
      easing: Easing.standard
    },
    active: {
      duration: Duration.S,
      easing: Easing.entrance
    }
  },
  
  // Карточки
  card: {
    hover: {
      duration: Duration.S,
      easing: Easing.standard
    },
    press: createSpringConfig({
      ...Spring.Strong
    }),
    appear: {
      duration: Duration.M,
      easing: Easing.entrance
    }
  }
};

// Пресеты для Framer Motion
export const MotionPresets = {
  // Простое появление с масштабированием
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: Duration.L,
        ease: Easing.entrance
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: {
        duration: Duration.M,
        ease: Easing.standard
      }
    }
  },
  
  // Слайд снизу вверх
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: Duration.M,
        ease: Easing.standard
      }
    }
  },
  
  // Пружинное появление
  springIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: Spring.Stiffness.Firm,
        damping: Spring.Damping.High,
        mass: Spring.Mass.Default
      }
    }
  }
};

export { motion }; 