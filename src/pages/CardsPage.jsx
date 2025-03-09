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
      <h1>Cards Component</h1>
      <div className="component-demo">
        <Cards />
      </div>
      <div className="component-description">
        <h2>Описание</h2>
        <p>
          Компонент Cards отображает карточки с заголовком, подзаголовком и иконкой.
          Карточки имеют анимацию при наведении и отображаются в грид-сетке.
        </p>
        <h3>Особенности</h3>
        <ul>
          <li>Анимация при наведении</li>
          <li>Адаптивный дизайн с изменением количества столбцов</li>
          <li>Иконка с анимацией</li>
          <li>Стильное оформление с тенями и скруглениями</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CardsPage; 