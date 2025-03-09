import { motion } from 'framer-motion';
import DropdownButton from '../components/DropdownButton';

const DropdownButtonPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Dropdown Button</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <DropdownButton />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Компонент Dropdown Button использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Раскрытие списка</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.M</code> - средняя длительность (250ms)</li>
          <li><code>Easing.spring</code> - пружинная кривая для естественного движения</li>
          <li>Масштабирование и появление списка (scale и opacity)</li>
          <li>Точка трансформации от верхнего края (transformOrigin: "top")</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация стрелки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая</li>
          <li>Поворот на 180 градусов при открытии</li>
          <li>Синхронизация с анимацией раскрытия списка</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Hover-эффект</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая</li>
          <li>Изменение цвета и фона при наведении</li>
          <li>Мягкое изменение тени для элементов списка</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Функциональная анимация с элементами эмоциональной - обеспечивает чёткую обратную связь при взаимодействии, 
          с акцентом на плавность и естественность движения списка.
        </p>
      </div>
    </motion.div>
  );
};

export default DropdownButtonPage; 