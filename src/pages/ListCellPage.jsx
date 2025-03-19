import { motion } from 'framer-motion';
import { useState } from 'react';
import ListCell from '../components/ListCell';
import { Spring } from '../animations/tokens';
import '../global.css';

const ListCellPage = () => {
  const [selectedItem, setSelectedItem] = useState('call');
  
  const handleSelect = (name, isSelected) => {
    if (isSelected) {
      setSelectedItem(name);
    }
  };
  
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>List Cell</h1>
      
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Стандартный вариант</h2>
      </div>
      
      <div className="component-demo">
        <div className="component-demo-inner">
          <ListCell 
            title="Позвонить в Домклик" 
            subtitle="Или не позвонить?" 
            name="call" 
            selected={selectedItem === 'call'} 
            onSelect={handleSelect}
            imageSrc="https://img.dmclk.ru/s200x200q80/vitrina/96/33/9633066a859524b9187b26a37d8833bd6616f24d.jpg"
          />
        </div>
      </div>
      
      <div className="component-description">
        <h2 style={{ color: "#333" }}>О компоненте</h2>
        <p style={{ color: "#333" }}>
          Компонент ListCell предназначен для создания интерактивных ячеек списка с возможностью выбора через радиокнопку.
          Компонент может содержать основной текст, подзаголовок и изображение аватара.
        </p>
        
        <h3 style={{ color: "#333" }}>Параметры компонента</h3>
        <ul style={{ color: "#333" }}>
          <li><code>title</code> - Основной текст элемента (обязательный)</li>
          <li><code>subtitle</code> - Подзаголовок элемента (опциональный)</li>
          <li><code>name</code> - Идентификатор для радиокнопки (по умолчанию "list-item")</li>
          <li><code>selected</code> - Выбран ли элемент (булево значение, по умолчанию false)</li>
          <li><code>imageSrc</code> - URL изображения аватара (опциональный)</li>
          <li><code>onSelect</code> - Функция-обработчик выбора элемента</li>
          <li><code>size</code> - Размер ячейки ('small', 'medium', по умолчанию 'small')</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Токены анимации</h3>
        <p style={{ color: "#333" }}>
          Компонент использует следующие токены анимации:
        </p>
        
        <h4 style={{ color: "#333" }}>Анимация радиокнопки при выборе</h4>
        <ul style={{ color: "#333" }}>
          <li><code>Spring.Stiffness.Firm (290)</code> - высокая жесткость для быстрой реакции</li>
          <li><code>Spring.Damping.Medium (17)</code> - среднее затухание для визуального "щелчка"</li>
          <li><code>Spring.Mass.Low (0.6)</code> - малая масса для быстрого движения</li>
          <li>Появление/исчезновение: <code>scale: 0 → 1</code></li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Компонент использует микроанимации для обеспечения обратной связи при взаимодействии. Пружинные (spring) анимации 
          делают интерфейс живым и естественным, создавая ощущение физического взаимодействия с элементами.
        </p>
        
        <h3 style={{ color: "#333" }}>Состояния</h3>
        <ul style={{ color: "#333" }}>
          <li><strong>Обычное</strong> - стандартный вид элемента списка</li>
          <li><strong>Выбранное</strong> - элемент выбран (радиокнопка активна, применяется класс selected)</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Варианты использования</h3>
        <ul style={{ color: "#333" }}>
          <li>Списки с одиночным выбором</li>
          <li>Меню с опциями</li>
          <li>Выбор контактов или пользователей</li>
          <li>Списки настроек или параметров</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ListCellPage;
