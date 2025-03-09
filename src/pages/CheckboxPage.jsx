import { motion } from 'framer-motion';
import Checkbox from '../components/Checkbox';

const CheckboxPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Checkbox</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <Checkbox />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Компонент Checkbox использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Переключение состояния</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.spring</code> - пружинная кривая для естественного ощущения</li>
          <li>Эффект масштабирования при переключении (0.8 → 1.1 → 1.0)</li>
          <li>Изменение цвета фона и рамки</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация галочки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.entrance</code> - кривая для плавного входа</li>
          <li>Анимация начертания галочки (stroke-dashoffset)</li>
          <li>Плавное изменение opacity</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Hover-эффект</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XXS</code> - мгновенная длительность (50ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая</li>
          <li>Небольшое свечение при наведении</li>
          <li>Изменение цвета рамки</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Функциональная анимация - обеспечивает мгновенную обратную связь о состоянии, делая интерфейс более отзывчивым и понятным.
        </p>
      </div>
    </motion.div>
  );
};

export default CheckboxPage; 