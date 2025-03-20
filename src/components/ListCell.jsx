import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../global.css';
import '../styles/components/ListCell.css';
import '../styles/typography.css';
import '../animations/listCellAnimation.css';

/**
 * Компонент ListCell - элемент списка с выбором через чекбокс.
 * 
 * @param {Object} props
 * @param {string} props.title - Основной текст элемента
 * @param {string} props.subtitle - Подзаголовок элемента
 * @param {string} props.name - Идентификатор для чекбокса
 * @param {boolean} props.selected - Выбран ли элемент
 * @param {string} props.imageSrc - URL изображения аватара
 * @param {function} props.onSelect - Функция обработчик выбора элемента
 * @param {string} props.size - Размер ячейки ('small', 'medium')
 */
const ListCell = ({ 
  title, 
  subtitle, 
  name = "list-item",
  selected = false, 
  imageSrc,
  onSelect,
  size = 'small'
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cellRef = useRef(null);
  
  // Синхронизация внешнего состояния выбора с внутренним
  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);
  
  const handleToggle = (e) => {
    // Prevent any default behaviors
    if (e) e.preventDefault();
    
    const newState = !isSelected;
    setIsSelected(newState);
    if (onSelect) onSelect(name, newState);
  };

  // Отдельный обработчик для чекбокса
  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    handleToggle();
  };
  
  // Обработчик mouseDown
  const handleMouseDown = () => {
    setIsPressed(true);
  };
  
  // Обработчик mouseUp
  const handleMouseUp = () => {
    setIsPressed(false);
  };
  
  // Обработчики состояния наведения
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isPressed) {
      handleMouseUp();
    }
  };
  
  // Добавляем глобальные обработчики событий для случая, если mouseUp происходит вне ячейки
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isPressed) {
        handleMouseUp();
      }
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isPressed]);
  
  // Определяем цвет фона в зависимости от состояния
  const getBackgroundColor = () => {
    if (isHovered) return '#F6F7F9';
    return 'transparent';
  };
  
  return (
    <div 
      ref={cellRef}
      className={`list-cell-root-0ea-2-2-1 list-cell-withControls-744-2-2-1 ${isSelected ? 'list-cell-selected-0f3-2-2-1' : ''} list-cell`} 
      style={{ 
        padding: '14px 16px', 
        cursor: 'pointer',
        position: 'relative'
      }}
      tabIndex="0" 
      aria-checked={isSelected}
      data-e2e-id={`listCell_item_${name}`}
      onClick={handleToggle}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="checkbox"
    >
      <div className="list-cell-wrapper-1a8-2-2-1" style={{ position: 'relative', zIndex: 1 }}>
        <div className="list-cell-leftSide-8c8-2-2-1" style={{ position: 'relative', zIndex: 1 }}>
          <div 
            className={`checkbox-root-09c-9-1-0 ${isSelected ? 'checkbox-checked-b61-9-1-0' : ''}`} 
            data-e2e-id={`${name}__label`}
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <input 
              className="checkbox-input-688-9-1-0" 
              type="checkbox" 
              id={`checkbox-${name}`}
              name={name} 
              tabIndex="-1" 
              value={name}
              checked={isSelected}
              onChange={handleCheckboxChange}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative', zIndex: 1 }}
            />
            <div className="checkbox-iconContainer-80d-9-1-0" style={{ position: 'relative', zIndex: 1 }}>
              <div className={`icon-root-864-6-0-3 checkbox-icon-044-9-1-0 list-cell-radio ${isSelected ? 'checked' : ''}`} style={{ position: 'relative', zIndex: 1 }}>
                {isSelected && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                    <path fill="currentColor" fillRule="evenodd" d="M14.015 4.092a.863.863 0 0 1-.018 1.202l-6.58 6.513a1.232 1.232 0 0 1-1.755-.014L1.994 8.049a.863.863 0 0 1 0-1.203.822.822 0 0 1 1.179 0l3.378 3.448 6.285-6.22a.822.822 0 0 1 1.179.018Z" clipRule="evenodd"></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="list-cell-title-64d-2-2-1" style={{ position: 'relative', zIndex: 1 }}>
          <div className="list-cell-highlightMatchRoot-160-2-2-1">{title}</div>
          {subtitle && <div className="list-cell-subtitle-bb8-2-2-1">{subtitle}</div>}
        </div>
      </div>
      
      {imageSrc && (
        <div className="list-cell-rightSide-e72-2-2-1" style={{ position: 'relative', zIndex: 1 }}>
          <div className="avtr-root-912-1-1-4 avtr-small-b73-1-1-4 avtr-circle-5ee-1-1-4 list-cell-avatar">
            <div className="avtr-inner-125-1-1-4 avtr-primary-9ed-1-1-4">
              <div className="picture-picture-f61-4-0-1" style={{ width: '40px', height: '40px' }}>
                <picture className="picture-pictureContent-486-4-0-1">
                  <source srcSet={imageSrc.replace(/\.(jpg|jpeg|png)$/, '.webp')} type="image/webp" />
                  <img 
                    src={imageSrc} 
                    alt="" 
                    className="picture-image-object-fit--cover-820-4-0-1" 
                    width="40" 
                    height="40" 
                    loading="eager" 
                    style={{ objectPosition: '50% 50%' }}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListCell;
