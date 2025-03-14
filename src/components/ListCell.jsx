import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { listCellHoverAnimation, listCellTapAnimation, radioAnimation, avatarAnimation } from '../animations/listCellAnimations';
import '../global.css';

/**
 * Компонент ListCell - элемент списка с выбором через радиокнопку.
 * 
 * @param {Object} props
 * @param {string} props.title - Основной текст элемента
 * @param {string} props.subtitle - Подзаголовок элемента
 * @param {string} props.name - Идентификатор для радиокнопки
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
  
  // Синхронизация внешнего состояния выбора с внутренним
  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);
  
  const handleSelect = () => {
    const newState = !isSelected;
    setIsSelected(newState);
    if (onSelect) onSelect(name, newState);
  };
  
  return (
    <div className="_Gq5_ ql7Up" data-e2e-id="list-cell-list-cell">
      <div style={{ width: '300px' }}>
        <motion.label 
          className={`list-cell-root-0ea-2-2-1 list-cell-p-${size}-0a8-2-2-1 list-cell-withControls-744-2-2-1 ${isSelected ? 'list-cell-selected-0f3-2-2-1' : ''}`} 
          tabIndex="0" 
          aria-checked={isSelected}
          data-e2e-id={`listCell_item_${name}`}
          onClick={handleSelect}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          variants={listCellHoverAnimation}
          transition={listCellHoverAnimation.transition}
        >
          <div className="list-cell-wrapper-1a8-2-2-1">
            <div className="list-cell-leftSide-8c8-2-2-1">
              <label className="radio-radio-a1c-11-0-3" data-e2e-id={`${name}__label`}>
                <span className="radio-control-2ae-11-0-3">
                  <input 
                    className="radio-input-315-11-0-3" 
                    type="radio" 
                    name={name} 
                    tabIndex="-1" 
                    value={name}
                    checked={isSelected}
                    onChange={() => {}}
                  />
                  <motion.span 
                    className="radio-circle-aab-11-0-3"
                    initial="initial"
                    animate={isSelected ? "checked" : "initial"}
                    variants={radioAnimation}
                    transition={radioAnimation.transition}
                  />
                </span>
              </label>
            </div>
            
            <div className="list-cell-title-64d-2-2-1">
              <div className="list-cell-highlightMatchRoot-160-2-2-1">{title}</div>
              {subtitle && <div className="list-cell-subtitle-bb8-2-2-1">{subtitle}</div>}
            </div>
          </div>
          
          {imageSrc && (
            <motion.div 
              className="list-cell-rightSide-e72-2-2-1"
              initial="initial"
              whileHover="hover"
              variants={avatarAnimation}
              transition={avatarAnimation.transition}
            >
              <div className="avtr-root-912-1-1-4 avtr-small-b73-1-1-4 avtr-circle-5ee-1-1-4">
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
            </motion.div>
          )}
        </motion.label>
      </div>
    </div>
  );
};

export default ListCell;
