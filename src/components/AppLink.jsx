import React from 'react';
import { useAppNavigation, getActiveClass } from '../utils/navigation';

/**
 * Универсальный компонент для ссылок внутри приложения
 * Автоматически обрабатывает маршрутизацию и активные состояния
 */
const AppLink = ({ 
  to, 
  children, 
  className = '', 
  activeClassName = 'active',
  exact = false,
  ...props 
}) => {
  const { navigateTo, getHref, isActive, currentPath } = useAppNavigation();
  const isLinkActive = exact ? isActive(to) : currentPath.startsWith(to);
  
  // Формируем итоговый класс с учетом активности
  const linkClass = getActiveClass(isLinkActive, className, activeClassName);
  
  // Обработчик клика
  const handleClick = (e) => {
    navigateTo(to, e);
    
    // Вызываем пользовательский обработчик, если он есть
    if (props.onClick) {
      props.onClick(e);
    }
  };
  
  // Удаляем обработчик onClick из props, чтобы избежать дублирования
  const { onClick, ...restProps } = props;
  
  return (
    <a 
      href={getHref(to)}
      className={linkClass}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </a>
  );
};

export default AppLink; 