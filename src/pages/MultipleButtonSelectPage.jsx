import { motion } from 'framer-motion';
import MultipleButtonSelect from '../components/MultipleButtonSelect';

const MultipleButtonSelectPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Multiple Button Select</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <MultipleButtonSelect />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Компонент Multiple Button Select использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Анимация состояния кнопки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.spring</code> - пружинная кривая для интерактивности</li>
          <li>Изменение цвета фона при выборе/отмене</li>
          <li>Анимация рамки с затуханием/появлением (opacity)</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Hover-эффект</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая</li>
          <li>Легкое изменение масштаба кнопки (transform: scale)</li>
          <li>Изменение тени при наведении для ощущения подъема</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация нажатия</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XXS</code> - мгновенная длительность (50ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая</li>
          <li>Эффект нажатия с уменьшением кнопки (scale: 0.97)</li>
          <li>Мгновенная обратная связь для улучшения отзывчивости</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Функциональная анимация с элементами эмоциональной - обеспечивает чёткую обратную связь при выборе,
          делая процесс взаимодействия более интуитивно понятным и отзывчивым.
        </p>
      </div>
    </motion.div>
  );
};

export default MultipleButtonSelectPage; 