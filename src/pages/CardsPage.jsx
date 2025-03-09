import { motion } from 'framer-motion';
import Cards from '../components/Cards';

const CardsPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Cards</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <Cards />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Компонент карточек использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Hover-эффект</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая ускорения</li>
          <li>Трансформация: масштабирование до 1.03 при наведении</li>
          <li>Увеличение тени для эффекта поднятия карточки</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация иконки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.spring</code> - пружинная кривая для большей выразительности</li>
          <li>Трансформация: увеличение иконки и небольшой пульсирующий эффект</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация появления</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.M</code> - средняя длительность (250ms)</li>
          <li><code>Easing.entrance</code> - кривая для плавного появления</li>
          <li><code>Delay.stagger</code> - каскадная задержка для элементов (40ms)</li>
          <li>Появление карточек снизу вверх с эффектом пружины</li>
        </ul>
        
        <h3>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Функциональная и структурная анимация - обеспечивает отклик при взаимодействии и организует появление элементов.
        </p>
      </div>
    </motion.div>
  );
};

export default CardsPage; 