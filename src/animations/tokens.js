/**
 * Система токенов анимации
 * 
 * Основана на лучших практиках UI анимаций:
 * - Длительность: 70-700мс оптимальный диапазон
 * - Easing: нелинейные кривые для естественного движения
 * - Задержки: минимальные, для последовательного появления элементов
 */

// Импорт дополнительных модулей
import { motion } from 'framer-motion';

// Длительность анимаций (в секундах)
export const Duration = {
  XS: 0.07,    // 70ms - микро-анимации, незначительные изменения (ховер)
  S: 0.11,     // 110ms - небольшие UI-изменения (кнопки, переключатели)
  M: 0.15,     // 150ms - стандартные переходы (подсказки, модальные окна)
  L: 0.24,     // 240ms - крупные изменения (переходы между экранами)
  XL: 0.4,     // 400ms - сложные/выразительные анимации
  XXL: 0.7     // 700ms - особо выразительные анимации
};

// Кривые ускорения (easing)
export const Easing = {
  // Базовые кривые
  Standard: [0.2, 0, 0.38, 0.9],    // Стандартная кривая
  Entrance: [0, 0, 0.38, 0.9],      // Для появления элементов
  Exit: [0.2, 0, 1, 0.9],           // Для исчезновения элементов
  
  // Дополнительные кривые
  ExpressiveStandard: [0.4, 0.14, 0.3, 1],     // Более выразительная стандартная
  ExpressiveEntrance: [0, 0, 0.3, 1],          // Более выразительное появление
  ExpressiveExit: [0.4, 0.14, 1, 1],           // Более выразительное исчезновение
  Spring: [0.43, 0.28, 0.52, 1.23],            // Пружинная кривая
};

// Строковые значения для CSS
export const EasingCSS = {
  standard: `cubic-bezier(${Easing.Standard.join(', ')})`,
  entrance: `cubic-bezier(${Easing.Entrance.join(', ')})`,
  exit: `cubic-bezier(${Easing.Exit.join(', ')})`,
  spring: `cubic-bezier(${Easing.Spring.join(', ')})`
};

// Задержки анимаций (в секундах)
export const Delay = {
  None: 0,
  XS: 0.05,    // 50ms - минимальная заметная задержка
  S: 0.1,      // 100ms - для небольших последовательностей
  M: 0.2,      // 200ms - стандартная задержка
  L: 0.4,      // 400ms - большая задержка
  XL: 0.7      // 700ms - максимальная рекомендуемая задержка
};

/**
 * Создает конфигурацию анимации для Framer Motion
 */
export const createAnimationConfig = ({
  duration = Duration.M,
  easing = Easing.Standard,
  delay = Delay.None,
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
      easing: Easing.Standard,
      delay: Delay.None
    },
    press: {
      duration: Duration.S,
      easing: Easing.Standard,
      delay: Delay.None
    },
    icon: {
      duration: Duration.S,
      easing: Easing.Spring
    }
  },
  
  // Модальные окна - более заметные переходы
  modal: {
    appear: {
      duration: Duration.L,
      easing: Easing.Entrance,
      delay: Delay.None
    },
    disappear: {
      duration: Duration.M,
      easing: Easing.Exit,
      delay: Delay.None
    },
    // Фоновая подложка обычно имеет отдельную анимацию
    overlay: {
      duration: Duration.M,
      easing: Easing.Standard
    }
  },
  
  // Выпадающие списки, меню
  dropdown: {
    appear: {
      duration: Duration.M,
      easing: Easing.Entrance
    },
    disappear: {
      duration: Duration.M,
      easing: Easing.Exit
    }
  },
  
  // Переключатели, чекбоксы
  toggle: {
    duration: Duration.S,
    easing: Easing.Standard
  },
  
  // Аккордеоны, раскрывающиеся блоки
  accordion: {
    expand: {
      duration: Duration.M,
      easing: Easing.Entrance
    },
    collapse: {
      duration: Duration.M,
      easing: Easing.Exit
    }
  },
  
  // Последовательная анимация элементов
  stagger: {
    delay: Delay.XS
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
        ease: Easing.Entrance
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: {
        duration: Duration.M,
        ease: Easing.Standard
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
        ease: Easing.Standard
      }
    }
  }
};

export { motion }; 