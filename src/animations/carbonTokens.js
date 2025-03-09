/**
 * Система токенов анимации в стиле Carbon Design System
 * Адаптирована для использования с Framer Motion
 */

// Длительности анимаций (в секундах)
export const duration = {
  // 70ms - самые быстрые микро-анимации
  fast01: 0.07,
  
  // 110ms - быстрые анимации для небольших элементов
  fast02: 0.11,
  
  // 150ms - умеренная скорость для стандартных элементов
  moderate01: 0.15,
  
  // 240ms - умеренная скорость для более крупных элементов
  moderate02: 0.24,
  
  // 400ms - медленные анимации для больших компонентов
  slow01: 0.4,
  
  // 700ms - самые медленные анимации для особо выразительных переходов
  slow02: 0.7
};

// Кривые ускорения (easing)
export const easings = {
  standard: {
    // Для рабочих, функциональных элементов - более линейные
    productive: [0.2, 0, 0.38, 0.9],
    // Для выразительных элементов - более динамичные
    expressive: [0.4, 0.14, 0.3, 1]
  },
  entrance: {
    // Для появления функциональных элементов
    productive: [0, 0, 0.38, 0.9],
    // Для появления выразительных элементов
    expressive: [0, 0, 0.3, 1]
  },
  exit: {
    // Для исчезновения функциональных элементов
    productive: [0.2, 0, 1, 0.9],
    // Для исчезновения выразительных элементов
    expressive: [0.4, 0.14, 1, 1]
  }
};

// Строковые значения для CSS
export const easingsCSS = {
  standard: {
    productive: `cubic-bezier(${easings.standard.productive.join(', ')})`,
    expressive: `cubic-bezier(${easings.standard.expressive.join(', ')})`
  },
  entrance: {
    productive: `cubic-bezier(${easings.entrance.productive.join(', ')})`,
    expressive: `cubic-bezier(${easings.entrance.expressive.join(', ')})`
  },
  exit: {
    productive: `cubic-bezier(${easings.exit.productive.join(', ')})`,
    expressive: `cubic-bezier(${easings.exit.expressive.join(', ')})`
  }
};

/**
 * Получение кривой ускорения по имени и режиму
 * @param {string} name - Имя кривой: 'standard', 'entrance', 'exit'
 * @param {string} mode - Режим: 'productive' или 'expressive'
 * @returns {number[]} Массив параметров cubic-bezier
 */
export const motion = (name, mode = 'productive') => {
  if (easings[name] && easings[name][mode]) {
    return easings[name][mode];
  }
  console.error(`Ошибка: не найдена кривая ${name} в режиме ${mode}`);
  return easings.standard.productive; // Возвращаем стандартную кривую как резервную
};

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
 * Создает конфигурацию анимации для Framer Motion на основе токенов Carbon
 * @param {string} name - Имя кривой ('standard', 'entrance', 'exit')
 * @param {string} mode - Режим ('productive', 'expressive')
 * @param {number} durationValue - Значение длительности из токенов duration
 * @returns {Object} Объект конфигурации для Framer Motion
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