/**
 * Экспорт всех навигационных компонентов и утилит
 * Позволяет использовать их через один импорт
 */

export { useAppNavigation, getActiveClass } from '../utils/navigation';
export { default as AppLink } from './AppLink';

/**
 * Вспомогательная функция для создания кнопки-ссылки
 * Используется для кнопок, которые должны вести на другие страницы
 */
export const createLinkButton = (
  Component,   // Компонент кнопки для рендеринга
  title,       // Текст кнопки
  target,      // Целевой путь для перехода
  options = {} // Дополнительные опции
) => {
  return {
    title,
    action: (e) => {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        window.location.hash = `/${target}`;
      }
    },
    ...options
  };
}; 