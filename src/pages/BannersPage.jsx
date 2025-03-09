import { motion } from 'framer-motion';
import Banners from '../components/Banners';

const BannersPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Banners</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <Banners />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Компонент баннеров использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Анимация наведения</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.spring</code> - пружинная кривая для эффекта "всплытия"</li>
          <li>Масштабирование до 1.04 и подъем вверх при наведении</li>
          <li>Увеличение тени для эффекта парения</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация иконки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.spring</code> - пружинная кривая для выразительности</li>
          <li>Увеличение и небольшой поворот иконки</li>
          <li>Изменение цвета для привлечения внимания</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация появления</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.M</code> - средняя длительность (250ms)</li>
          <li><code>Easing.entrance</code> - кривая для плавного появления</li>
          <li><code>Delay.medium</code> - средняя задержка для последовательности (100ms)</li>
          <li>Движение снизу вверх с постепенным проявлением</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Эмоциональная анимация - придает баннерам более выразительный характер, усиливая фокус внимания.
        </p>
      </div>
    </motion.div>
  );
};

export default BannersPage; 