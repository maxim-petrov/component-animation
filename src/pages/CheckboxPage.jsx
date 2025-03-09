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
      <h1>Checkbox Component</h1>
      <div className="component-demo">
        <Checkbox />
      </div>
      <div className="component-description">
        <h2>Описание</h2>
        <p>
          Компонент флажков (Checkbox) для выбора нескольких опций из списка.
          Поддерживает вертикальное и горизонтальное расположение, а также анимацию при изменении состояния.
        </p>
        <h3>Особенности</h3>
        <ul>
          <li>Анимация при выборе/отмене</li>
          <li>Возможность группировки флажков</li>
          <li>Различные варианты расположения (вертикальный, горизонтальный)</li>
          <li>Кастомизированный дизайн</li>
          <li>Доступность с использованием правильных ARIA-атрибутов</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CheckboxPage; 