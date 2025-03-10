/**
 * Скрипт для устранения мгновенного появления фокусной рамки при клике
 */

// Функция для удаления фокуса с активного элемента
const removeFocus = () => {
  if (document.activeElement) {
    document.activeElement.blur();
  }
};

// Применяем стили для скрытия бордера программно
const applyNoBorderStyles = (element) => {
  if (!element) return;
  
  // Применяем стили непосредственно к элементу
  element.style.setProperty('border', 'none', 'important');
  element.style.setProperty('outline', 'none', 'important');
  element.style.setProperty('box-shadow', 'none', 'important');
  
  // Если это кнопка, отключаем бордер у всего содержимого
  if (element.tagName === 'BUTTON' || 
      element.classList.contains('dd-btn-button-376-8-3-0') || 
      element.classList.contains('btn-root-119-18-1-1')) {
    
    Array.from(element.children).forEach(child => {
      applyNoBorderStyles(child);
    });
  }
};

// Обрабатываем событие mousedown для всех элементов
document.addEventListener('mousedown', (event) => {
  // Найдем кнопку (текущий элемент или его предок)
  let target = event.target;
  let button = null;
  
  // Проверяем сам элемент и всех его предков до body
  while (target && target !== document.body) {
    if (target.tagName === 'BUTTON' || 
        target.classList.contains('dd-btn-button-376-8-3-0') || 
        target.classList.contains('btn-root-119-18-1-1')) {
      button = target;
      break;
    }
    target = target.parentElement;
  }
  
  // Если нашли кнопку - применяем стили и блокируем фокус
  if (button) {
    // Применяем стили
    applyNoBorderStyles(button);
    
    // Блокируем фокус после клика
    setTimeout(removeFocus, 0);
  }
});

// Перехватываем клик для удаления фокуса
document.addEventListener('click', (event) => {
  setTimeout(removeFocus, 0);
});

// Перехватываем активацию фокуса и удаляем его
document.addEventListener('focusin', (event) => {
  const target = event.target;
  if (target.tagName === 'BUTTON' || 
      target.classList.contains('dd-btn-button-376-8-3-0') || 
      target.classList.contains('btn-root-119-18-1-1')) {
    
    // Применяем стили
    applyNoBorderStyles(target);
    
    // С небольшой задержкой снимаем фокус
    setTimeout(removeFocus, 10);
  }
}); 