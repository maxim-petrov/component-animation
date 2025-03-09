import { motion } from 'framer-motion';
import Button from '../components/Button';

const ButtonPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Button</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <Button text="Кнопка" />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Кнопка использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Hover-эффект</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая ускорения</li>
          <li>Трансформация: масштабирование до 1.05 при наведении</li>
          <li>Трансформация: масштабирование до 0.95 при нажатии</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация иконки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.spring</code> - пружинная кривая для большей выразительности</li>
          <li>Трансформация: увеличение и небольшой поворот иконки</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Функциональный тип анимации - дает мгновенную обратную связь пользователю при взаимодействии.
        </p>
      </div>
    </motion.div>
  );
};

export default ButtonPage; 