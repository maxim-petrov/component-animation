/**
 * Утилиты для навигации по приложению
 * Обеспечивают единообразное поведение ссылок в разных окружениях
 */

import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Пользовательский хук для навигации, который работает как локально, так и на GitHub Pages
 * @returns {Object} Объект с функциями и утилитами для навигации
 */
export const useAppNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Создает корректный URL для ссылки, с учетом окружения
   * @param {string} path - Путь без ведущего слеша
   * @returns {string} Форматированный URL для ссылки href
   */
  const getHref = (path) => {
    return `#/${path}`;
  };

  /**
   * Программная навигация к указанному пути
   * @param {string} path - Путь без ведущего слеша
   * @param {Event} [event] - Событие клика (опционально)
   */
  const navigateTo = (path, event) => {
    if (event) {
      event.preventDefault();
    }
    
    try {
      navigate(`/${path}`);
    } catch (error) {
      console.error("Ошибка навигации через React Router:", error);
    }
  };

  /**
   * Проверяет, является ли текущий путь активным
   * @param {string} path - Путь без ведущего слеша для проверки
   * @returns {boolean} Является ли путь активным
   */
  const isActive = (path) => {
    const currentPath = location.pathname.replace(/^\//, '');
    return currentPath === path;
  };

  return {
    navigateTo,
    getHref,
    isActive,
    currentPath: location.pathname.replace(/^\//, ''),
  };
};

/**
 * Функция для формирования класса элемента с учетом его активности
 * @param {boolean} isActive - Флаг активности элемента
 * @param {string} baseClass - Базовый класс
 * @param {string} [activeClass='active'] - Класс для активного состояния
 * @param {string} [additionalClass=''] - Дополнительный класс
 * @returns {string} Строка с классами для элемента
 */
export const getActiveClass = (isActive, baseClass, activeClass = 'active', additionalClass = '') => {
  const classes = [baseClass];
  
  if (isActive) {
    classes.push(activeClass);
  }
  
  if (additionalClass) {
    classes.push(additionalClass);
  }
  
  return classes.join(' ');
}; 