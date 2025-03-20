// Импортируем стили с CSS-переменными для анимаций
import './tokens.css';
import { useEffect, useState } from 'react';

/**
 * Утилита для получения значений CSS-переменных
 */
const getCSSVariable = (variableName) => {
  // Для серверного рендеринга проверяем наличие document
  if (typeof document === 'undefined') return '';
  
  // Получаем computed стиль из корневого элемента
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

/**
 * Преобразует значение длительности из CSS (например, "250ms") в секунды для Framer Motion (0.25)
 */
const durationToSeconds = (duration) => {
  if (!duration) return 0;
  // Если значение в мс, преобразуем в секунды
  if (duration.endsWith('ms')) {
    return parseFloat(duration) / 1000;
  }
  // Если уже в секундах
  if (duration.endsWith('s')) {
    return parseFloat(duration);
  }
  return parseFloat(duration);
};

/**
 * Преобразует cubic-bezier строку в массив для Framer Motion
 */
const cubicBezierToArray = (cubicBezier) => {
  // Парсим строку cubicBezier, например: "cubic-bezier(0.32, 1.72, 0, 1)"
  const values = cubicBezier
    .replace('cubic-bezier(', '')
    .replace(')', '')
    .split(',')
    .map(val => parseFloat(val.trim()));
  
  return values;
};

/**
 * Создает токены анимации из CSS переменных
 */
const createAnimationTokens = () => {
  const durations = {
    50: durationToSeconds(getCSSVariable('--duration-50')),
    100: durationToSeconds(getCSSVariable('--duration-100')),
    150: durationToSeconds(getCSSVariable('--duration-150')),
    250: durationToSeconds(getCSSVariable('--duration-250')),
    300: durationToSeconds(getCSSVariable('--duration-300'))
  };

  const easings = {
    easeOut: cubicBezierToArray(getCSSVariable('--motion-ease-out')),
    easeSpring: cubicBezierToArray(getCSSVariable('--motion-ease-spring'))
  };

  return { durations, easings };
};

/**
 * Хук для получения токенов анимации из CSS
 */
export const useAnimationTokens = () => {
  const [tokens, setTokens] = useState(() => createAnimationTokens());

  useEffect(() => {
    // Получаем актуальные значения из CSS после монтирования компонента
    setTokens(createAnimationTokens());
  }, []);

  return tokens;
};

// Базовые конфигурации анимаций, которые будут использоваться в компонентах
// Компоненты должны использовать хук useAnimationTokens для получения актуальных значений

// Конфигурация анимации для компонента Accordion
export const getAccordionAnimationConfig = (tokens) => ({
  type: "tween",
  duration: tokens.durations[250], // --duration-250
  ease: tokens.easings.easeOut // --motion-ease-out
});

// Анимация для стрелки
export const getArrowAnimation = (tokens) => ({
  transition: {
    duration: tokens.durations[150], // --duration-150
    ease: tokens.easings.easeSpring, // --motion-ease-spring
    type: "spring",
    stiffness: 290,
    damping: 22,
    mass: 1
  }
});

// Анимация для контента
export const getContentAnimation = (tokens) => ({
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: {
    height: {
      duration: tokens.durations[250], // --duration-250
      ease: tokens.easings.easeSpring, // --motion-ease-spring
      type: "spring",
      stiffness: 290,
      damping: 22,
      mass: 1
    },
    opacity: {
      duration: tokens.durations[150], // --duration-150
      ease: tokens.easings.easeOut // --motion-ease-out
    }
  },
  style: { overflow: "hidden" }
});

// Для создания статических экспортов получаем токены при загрузке модуля
const staticTokens = createAnimationTokens();

// Экспортируем предварительно сконфигурированные анимации с текущими значениями CSS-переменных
export const accordionAnimationConfig = getAccordionAnimationConfig(staticTokens);
export const arrowAnimation = getArrowAnimation(staticTokens);
export const contentAnimation = getContentAnimation(staticTokens); 