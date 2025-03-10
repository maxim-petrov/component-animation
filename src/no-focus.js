/**
 * Скрипт для устранения мгновенного появления фокусной рамки при клике
 */

// Функция для удаления фокуса с активного элемента
const removeFocus = () => {
  if (document.activeElement) {
    document.activeElement.blur();
  }
};

// Добавляем обработчик события mousedown
document.addEventListener('mousedown', (event) => {
  // Предотвращаем фокус только для элементов, которые могут его получить
  const target = event.target;
  const isClickableElement = 
    target.tagName === 'BUTTON' || 
    target.tagName === 'A' || 
    target.tagName === 'INPUT' || 
    target.tagName === 'TEXTAREA' || 
    target.tagName === 'SELECT' ||
    target.hasAttribute('tabindex') ||
    target.classList.contains('card-card-652-0-0-4') ||
    target.classList.contains('dd-btn-button-376-8-3-0') ||
    target.classList.contains('btn-root-119-18-1-1');

  if (isClickableElement) {
    // Предотвращаем установку фокуса при клике
    // Также обрабатываем родительские элементы кнопок для поддержки иконок внутри кнопок
    setTimeout(removeFocus, 0);
  }
});

// Добавляем обработчик клика для удаления фокуса
document.addEventListener('click', () => {
  setTimeout(removeFocus, 0);
}); 