import { motion } from 'framer-motion';
import DropdownButton from '../components/DropdownButton';

const DropdownButtonPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Dropdown Button</h1>
      <div className="component-demo">
        <DropdownButton />
      </div>
      <div className="component-description">
        <h2>Описание</h2>
        <p>
          Компонент выпадающего списка (Dropdown Button) позволяет выбрать один вариант 
          из предложенного списка. При клике открывается меню с доступными опциями.
        </p>
        <h3>Особенности</h3>
        <ul>
          <li>Анимация раскрытия списка</li>
          <li>Отслеживание клика вне компонента для закрытия</li>
          <li>Индикация выбранного элемента</li>
          <li>Анимация иконки-стрелки</li>
          <li>Поддержка клавиатурной навигации</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default DropdownButtonPage; 