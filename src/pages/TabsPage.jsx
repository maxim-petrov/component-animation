import { motion } from 'framer-motion';
import Tabs from '../components/Tabs';

const TabsPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Tabs</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <Tabs />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Компонент вкладок использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Анимация контента вкладок</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.M</code> - средняя длительность (250ms)</li>
          <li><code>Easing.entrance</code> - кривая для плавного появления</li>
          <li><code>Easing.exit</code> - кривая для плавного исчезновения</li>
          <li>Анимация изменения прозрачности при переключении вкладок</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация кнопок прокрутки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая ускорения</li>
          <li>Масштабирование при наведении и нажатии</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация кнопок вкладок</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая ускорения</li>
          <li>Небольшое масштабирование при наведении и нажатии</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Структурная анимация - помогает понять изменения в интерфейсе при переключении вкладок.
        </p>
      </div>
    </motion.div>
  );
};

export default TabsPage; 