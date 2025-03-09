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
        <h2>Описание</h2>
        <p>
          Компонент вкладок (Tabs) позволяет организовать контент в отдельные секции, 
          доступные по клику на соответствующую вкладку. Реализует горизонтальную 
          прокрутку при большом количестве вкладок.
        </p>
        <h3>Особенности</h3>
        <ul>
          <li>Анимация при переключении вкладок</li>
          <li>Горизонтальная прокрутка с кнопками навигации</li>
          <li>Индикация активной вкладки</li>
          <li>Адаптивный дизайн</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TabsPage; 