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
        <h2 style={{ color: "#333" }}>Без изображения</h2>
      </div>
      
      <div className="component-demo">
        <div className="component-demo-inner">
          <ListCell 
            title="Отправить заявку" 
            subtitle="В службу поддержки" 
            name="support" 
            selected={selectedItem === 'support'} 
            onSelect={handleSelect}
          />
        </div>
      </div>
      
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Без подзаголовка</h2>
      </div>
      
      <div className="component-demo">
        <div className="component-demo-inner">
          <ListCell 
            title="Проверить статус" 
            name="status" 
            selected={selectedItem === 'status'} 
            onSelect={handleSelect}
            imageSrc="https://img.dmclk.ru/s200x200q80/vitrina/96/33/9633066a859524b9187b26a37d8833bd6616f24d.jpg"
          />
        </div>
      </div>
      
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Средний размер</h2>
      </div>
      
      <div className="component-demo">
        <div className="component-demo-inner">
          <ListCell 
            title="Просмотреть детали" 
            subtitle="Дополнительная информация" 
            name="details" 
            selected={selectedItem === 'details'} 
            onSelect={handleSelect}
            size="medium"
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
        
        <h4 style={{ color: "#333" }}>Анимация элемента при наведении</h4>
        <ul style={{ color: "#333" }}>
          <li><code>Spring.Stiffness.Medium (170)</code> - средняя жесткость для плавного движения</li>
          <li><code>Spring.Damping.Medium (17)</code> - среднее затухание для небольших колебаний</li>
          <li><code>Spring.Mass.Default (1)</code> - стандартная масса</li>
          <li>Изменение фона: от прозрачного до слегка заметного</li>
          <li>Небольшое увеличение: <code>scale: 1.005</code></li>
        </ul>
        
        <h4 style={{ color: "#333" }}>Анимация элемента при нажатии</h4>
        <ul style={{ color: "#333" }}>
          <li><code>Spring.Stiffness.Firm (290)</code> - высокая жесткость для быстрой реакции</li>
          <li><code>Spring.Damping.High (22.22)</code> - высокое затухание для минимальных колебаний</li>
          <li><code>Spring.Mass.Default (1)</code> - стандартная масса</li>
          <li>Эффект нажатия: <code>scale: 0.98</code></li>
        </ul>
        
        <h4 style={{ color: "#333" }}>Анимация радиокнопки при выборе</h4>
        <ul style={{ color: "#333" }}>
          <li><code>Spring.Stiffness.Firm (290)</code> - высокая жесткость для быстрой реакции</li>
          <li><code>Spring.Damping.Medium (17)</code> - среднее затухание для визуального "щелчка"</li>
          <li><code>Spring.Mass.Low (0.6)</code> - малая масса для быстрого движения</li>
          <li>Появление/исчезновение: <code>scale: 0 → 1</code></li>
        </ul>
        
        <h4 style={{ color: "#333" }}>Анимация аватара при наведении</h4>
        <ul style={{ color: "#333" }}>
          <li><code>Spring.Stiffness.Medium (170)</code> - средняя жесткость для плавного движения</li>
          <li><code>Spring.Damping.Medium (17)</code> - среднее затухание для небольших колебаний</li>
          <li><code>Spring.Mass.Low (0.6)</code> - малая масса для быстрой реакции</li>
          <li>Увеличение: <code>scale: 1.05</code></li>
          <li>Легкий поворот: <code>rotate: 5 градусов</code></li>
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
          <li><strong>При наведении</strong> - слегка увеличивается и меняет фон</li>
          <li><strong>При нажатии</strong> - слегка уменьшается, создавая эффект нажатия</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Варианты использования</h3>
        <ul style={{ color: "#333" }}>
          <li>Списки с одиночным выбором</li>
          <li>Меню с опциями</li>
          <li>Выбор контактов или пользователей</li>
          <li>Списки настроек или параметров</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Преимущества spring-анимаций</h3>
        <ul style={{ color: "#333" }}>
          <li><strong>Естественность</strong> - поведение, похожее на реальные физические объекты</li>
          <li><strong>Плавность</strong> - отсутствие резких переходов между состояниями</li>
          <li><strong>Тактильная обратная связь</strong> - создает ощущение взаимодействия с реальным объектом</li>
          <li><strong>Адаптивность</strong> - анимации адаптируются к скорости взаимодействия пользователя</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ListCellPage;
