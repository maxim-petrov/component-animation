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
        <h2>Описание</h2>
        <p>
          Компонент Banners показывает информационные баннеры, которые могут использоваться 
          для уведомлений, объявлений или выделения важной информации.
        </p>
        <h3>Особенности</h3>
        <ul>
          <li>Различные стили баннеров</li>
          <li>Анимация появления</li>
          <li>Возможность добавления заголовка и подзаголовка</li>
          <li>Адаптивный дизайн</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BannersPage; 