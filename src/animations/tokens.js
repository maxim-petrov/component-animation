/**
 * Система токенов анимации
 * 
 * Основана на лучших практиках UI анимаций:
 * - Длительность: 70-700мс оптимальный диапазон
 * - Easing: нелинейные кривые для естественного движения
 * - Задержки: минимальные, для последовательного появления элементов
 * 
 * Совместимость с Carbon Design System animation tokens
 */

// Импортируем токены Carbon для обеспечения совместимости
import { duration as carbonDuration, motion, easings } from './carbonTokens';

// Длительность анимаций (в секундах) - соответствие с Carbon
export const Duration = {
  XS: carbonDuration.fast01,    // 70ms - микро-анимации, незначительные изменения (ховер)
  S: carbonDuration.fast02,     // 110ms - небольшие UI-изменения (кнопки, переключатели)
  M: carbonDuration.moderate01, // 150ms - стандартные переходы (подсказки, модальные окна)
  L: carbonDuration.moderate02, // 240ms - крупные изменения (переходы между экранами)
  XL: carbonDuration.slow01     // 400ms - сложные/выразительные анимации, декоративные эффекты
};

// Кривые ускорения (easing) - соответствие с Carbon
export const Easing = {
  // Стандартная кривая для большинства случаев - плавное начало и конец
  standard: easings.standard.productive,
  
  // Для появления элементов - быстрый старт, плавное торможение
  entrance: easings.entrance.productive,
  
  // Для исчезновения элементов - медленный старт, резкое ускорение к концу
  exit: easings.exit.productive,
  
  // Пружинная динамика для эмоциональных эффектов (сохраняем для обратной совместимости)
  spring: [0.43, 0.28, 0.52, 1.23]
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
  none: 0,
  short: 0.05,   // 50ms - для последовательного появления элементов
  medium: 0.1,    // 100ms - средняя задержка
  long: 0.2      // 200ms - для более ощутимой паузы
};

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
    icon: {
      duration: Duration.S,
      easing: Easing.spring
    }
  },
  
  // Модальные окна - более заметные переходы
  modal: {
    appear: {
      duration: Duration.L,
      easing: Easing.entrance,
      delay: Delay.none
    },
    disappear: {
      duration: Duration.M,
      easing: Easing.exit,
      delay: Delay.none
    },
    // Фоновая подложка обычно имеет отдельную анимацию
    overlay: {
      duration: Duration.M,
      easing: Easing.standard
    }
  },
  
  // Выпадающие списки, меню
  dropdown: {
    appear: {
      duration: Duration.M,
      easing: Easing.entrance
    },
    disappear: {
      duration: Duration.M,
      easing: Easing.exit
    }
  },
  
  // Переключатели, чекбоксы
  toggle: {
    duration: Duration.S,
    easing: Easing.standard
  },
  
  // Аккордион, раскрывающиеся списки
  accordion: {
    expand: {
      duration: Duration.M,
      easing: Easing.entrance
    },
    collapse: {
      duration: Duration.M,
      easing: Easing.exit
    }
  },
  
  // Для последовательной анимации элементов в списке
  stagger: {
    delay: Delay.short
  }
};

/**
 * Функции-помощники для создания объектов конфигурации анимации
 * Используйте их при настройке анимаций компонентов
 */

// Создает объект анимации для Framer Motion
export const createAnimationConfig = (duration, easing, delay = 0) => ({
  type: "tween",
  duration,
  ease: easing,
  delay
});

// Создает объект transition для CSS
export const createCSSTransition = (property, duration, easing, delay = 0) => 
  `${property} ${duration}s ${Array.isArray(easing) ? `cubic-bezier(${easing.join(', ')})` : easing} ${delay}s`;

// Примеры конфигураций анимаций для распространенных компонентов
export const animationConfig = {
  // Для стандартной кнопки
  buttonHoverAnimation: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: Duration.S
    }
  },
  
  // Для модального окна
  modalAnimation: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: {
      duration: Duration.L,
      ease: Easing.entrance
    }
  },
  
  // Для выпадающего меню
  dropdownAnimation: {
    initial: { opacity: 0, scaleY: 0.7, transformOrigin: "top" },
    animate: { opacity: 1, scaleY: 1 },
    exit: { opacity: 0, scaleY: 0.7 },
    transition: {
      duration: Duration.M,
      ease: Easing.standard
    }
  },
  
  // Для аккордеона
  accordionAnimation: {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: {
      duration: Duration.M,
      ease: Easing.standard
    }
  }
}; 