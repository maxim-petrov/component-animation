/**
 * Система токенов анимации
 * 
 * Определения времени, кривых ускорения и других параметров анимации
 */

// Токены длительности анимации
export const duration = {
  // Быстрые движения
  fast01: 0.07,   // 70ms - для микро-анимаций, ховеров
  fast02: 0.11,   // 110ms - для небольших UI-изменений (кнопки, переключатели)
  
  // Средние по скорости
  moderate01: 0.15, // 150ms - для стандартных переходов (подсказки, модальные окна)
  moderate02: 0.24, // 240ms - для более крупных переходов
  
  // Медленные движения
  slow01: 0.4,    // 400ms - для сложных, более заметных анимаций
  slow02: 0.7     // 700ms - для особо выразительных анимаций
};

// Кривые ускорения (cubic-bezier значения)
export const easings = {
  // Стандартный режим - функциональные движения
  standard: {
    productive: [0.2, 0, 0.38, 0.9],     // Эффективный, ясный переход
    expressive: [0.4, 0.14, 0.3, 1]      // Более выразительное движение
  },
  
  // Появление элементов - движение "в" сцену
  entrance: {
    productive: [0, 0, 0.38, 0.9],     // Быстрый вход с плавным замедлением
    expressive: [0, 0, 0.3, 1]         // Более плавный, заметный вход
  },
  
  // Исчезновение элементов - движение "из" сцены
  exit: {
    productive: [0.2, 0, 1, 0.9],     // Плавный старт с быстрым уходом
    expressive: [0.4, 0.14, 1, 1]     // Более драматичный уход
  }
};

// Режимы движения
export const motion = {
  // Основной режим - для большинства интерфейсных элементов
  productive: {
    standard: `cubic-bezier(${easings.standard.productive.join(', ')})`,
    entrance: `cubic-bezier(${easings.entrance.productive.join(', ')})`,
    exit: `cubic-bezier(${easings.exit.productive.join(', ')})`
  },
  
  // Выразительный режим - для акцентных элементов, для привлечения внимания
  expressive: {
    standard: `cubic-bezier(${easings.standard.expressive.join(', ')})`,
    entrance: `cubic-bezier(${easings.entrance.expressive.join(', ')})`,
    exit: `cubic-bezier(${easings.exit.expressive.join(', ')})`
  }
};

// Задержки анимаций (в секундах)
export const delay = {
  none: 0,
  short: 0.05,   // 50ms - минимальная задержка для последовательности
  medium: 0.1,    // 100ms - для более заметной задержки
  long: 0.2      // 200ms - значительная задержка
};

/**
 * Вспомогательные функции для создания анимаций
 */

/**
 * Создает конфигурацию для анимации входа (появления)
 */
export const createEntranceAnimation = ({
  duration: animDuration = duration.moderate01,
  easing = easings.entrance.productive,
  delay: animDelay = 0
}) => ({
  type: "tween",
  duration: animDuration,
  ease: easing,
  delay: animDelay
});

/**
 * Создает конфигурацию для анимации выхода (исчезновения)
 */
export const createExitAnimation = ({
  duration: animDuration = duration.moderate01,
  easing = easings.exit.productive,
  delay: animDelay = 0
}) => ({
  type: "tween",
  duration: animDuration,
  ease: easing,
  delay: animDelay
});

/**
 * Создает конфигурацию для hover-эффектов
 */
export const createHoverAnimation = ({
  duration: animDuration = duration.fast01,
  easing = easings.standard.productive,
  scale = 1.05
}) => ({
  whileHover: { scale },
  transition: {
    type: "tween",
    duration: animDuration,
    ease: easing
  }
});

/**
 * Создает конфигурацию для эффектов нажатия
 */
export const createTapAnimation = ({
  duration: animDuration = duration.fast02,
  easing = easings.standard.productive,
  scale = 0.95
}) => ({
  whileTap: { scale },
  transition: {
    type: "tween",
    duration: animDuration,
    ease: easing
  }
});

/**
 * Создает конфигурацию анимации для Framer Motion на основе токенов
 */
export const createAnimationConfig = ({
  type = "tween",
  duration: animDuration = duration.moderate01,
  easing = easings.standard.productive,
  delay: animDelay = 0,
  ...rest
}) => ({
  type,
  duration: animDuration,
  ease: easing,
  delay: animDelay,
  ...rest
});

/**
 * Объект с типами анимаций для различных компонентов
 */
export const componentTokens = {
  // Кнопки - быстрые микровзаимодействия
  button: {
    hover: {
      duration: duration.fast02,
      easing: 'standard',
      mode: 'productive'
    },
    press: {
      duration: duration.fast01,
      easing: 'standard',
      mode: 'productive'
    },
    icon: {
      duration: duration.moderate01,
      easing: 'standard',
      mode: 'expressive'
    }
  },
  
  // Модальные окна
  modal: {
    appear: {
      duration: duration.moderate02,
      easing: 'entrance',
      mode: 'expressive'
    },
    disappear: {
      duration: duration.moderate01,
      easing: 'exit',
      mode: 'expressive'
    },
    overlay: {
      duration: duration.moderate01,
      easing: 'standard',
      mode: 'productive'
    }
  },
  
  // Выпадающие списки, меню
  dropdown: {
    appear: {
      duration: duration.moderate01,
      easing: 'entrance',
      mode: 'productive'
    },
    disappear: {
      duration: duration.fast02,
      easing: 'exit',
      mode: 'productive'
    }
  },
  
  // Переключатели, чекбоксы
  toggle: {
    duration: duration.fast02,
    easing: 'standard',
    mode: 'productive'
  },
  
  // Аккордеон, раскрывающиеся списки
  accordion: {
    expand: {
      duration: duration.moderate01,
      easing: 'entrance',
      mode: 'productive'
    },
    collapse: {
      duration: duration.fast02,
      easing: 'exit',
      mode: 'productive'
    }
  },
  
  // Карточки и плитки
  cards: {
    hover: {
      duration: duration.fast02,
      easing: 'standard',
      mode: 'expressive'
    },
    appear: {
      duration: duration.moderate02,
      easing: 'entrance',
      mode: 'expressive'
    }
  },
  
  // Уведомления и тосты
  notification: {
    appear: {
      duration: duration.moderate01,
      easing: 'entrance',
      mode: 'expressive'
    },
    disappear: {
      duration: duration.moderate01,
      easing: 'exit',
      mode: 'expressive'
    }
  }
};

/**
 * Создает конфигурацию анимации для Framer Motion на основе токенов
 */
export const createMotionConfig = (name, mode = 'productive', durationValue) => ({
  type: "tween",
  duration: durationValue,
  ease: motion(name, mode)
});

/**
 * Хелперы для создания конфигураций анимаций компонентов для Framer Motion
 */
export const motionPresets = {
  // Для кнопок
  buttonHover: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: {
      duration: duration.fast02,
      ease: motion('standard', 'productive')
    }
  },
  
  // Для модальных окон
  modalEnter: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: {
      duration: duration.moderate02,
      ease: motion('entrance', 'expressive')
    }
  },
  
  // Для выпадающих списков
  dropdownEnter: {
    initial: { opacity: 0, scaleY: 0.7, transformOrigin: "top" },
    animate: { opacity: 1, scaleY: 1 },
    exit: { opacity: 0, scaleY: 0.7 },
    transition: {
      duration: duration.moderate01,
      ease: motion('entrance', 'productive')
    }
  },
  
  // Для аккордеона
  accordionExpand: {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: {
      duration: duration.moderate01,
      ease: motion('entrance', 'productive')
    }
  },
  
  // Для карточек
  cardHover: {
    whileHover: { 
      scale: 1.03, 
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" 
    },
    whileTap: { scale: 0.98 },
    transition: {
      duration: duration.fast02,
      ease: motion('standard', 'expressive')
    }
  },
  
  // Для уведомлений
  notificationEnter: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: {
      duration: duration.moderate01,
      ease: motion('entrance', 'expressive')
    }
  }
}; 