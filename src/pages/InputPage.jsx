import { motion } from 'framer-motion';
import Input from '../components/Input';

const InputPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Input</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <Input />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Компонент Input использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Анимация метки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая ускорения</li>
          <li>Трансформация: уменьшение размера и перемещение метки вверх</li>
          <li>Изменение цвета для подчеркивания активного состояния</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация границы</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая</li>
          <li>Изменение цвета и толщины рамки при фокусе</li>
          <li>Особые состояния для ошибки (красная граница)</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация кнопки очистки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.entrance</code> - кривая для плавного появления</li>
          <li>Плавное появление (opacity) при вводе текста</li>
          <li>Hover-эффект с небольшим увеличением</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Функциональная анимация - четко демонстрирует изменение состояния поля и
          обеспечивает подсказки для пользователя во время взаимодействия.
        </p>
      </div>
    </motion.div>
  );
};

export default InputPage; 