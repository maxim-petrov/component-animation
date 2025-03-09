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
        <h2>Описание</h2>
        <p>
          Компонент для выбора нескольких опций с помощью кнопок. Каждая кнопка может быть выбрана 
          или не выбрана независимо от других. Компонент гарантирует, что по крайней мере одна кнопка 
          всегда остается выбранной.
        </p>
        <h3>Особенности</h3>
        <ul>
          <li>Множественный выбор опций</li>
          <li>Анимации при наведении и нажатии</li>
          <li>Визуальная индикация выбранных кнопок</li>
          <li>Всегда хотя бы одна кнопка остается выбранной</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default MultipleButtonSelectPage; 