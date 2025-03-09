import { motion } from 'framer-motion';
import Textarea from '../components/Textarea';

const TextareaPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Textarea</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <Textarea />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Компонент Textarea использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Анимация метки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая ускорения</li>
          <li>Трансформация: уменьшение размера и перемещение метки вверх</li>
          <li>Изменение цвета для усиления состояния фокуса</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация изменения высоты</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая</li>
          <li>Плавное изменение высоты при добавлении или удалении строк</li>
          <li>Автоматическое ограничение максимальной высоты</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация границы</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая</li>
          <li>Изменение цвета и толщины рамки при фокусе</li>
          <li>Дополнительное выделение для состояний ошибки/валидации</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Функциональная анимация - обеспечивает плавное изменение размеров и состояний,
          создавая естественное ощущение взаимодействия с текстовым полем.
        </p>
      </div>
    </motion.div>
  );
};

export default TextareaPage; 