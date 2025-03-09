import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Библиотека компонентов</h1>
      <p className="home-description">
        Добро пожаловать в библиотеку компонентов с анимациями Framer Motion.
        Выберите компонент в меню слева для просмотра.
      </p>
      <div className="home-features">
        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Интерактивные компоненты</h3>
          <p>Все компоненты включают анимации и интерактивное поведение</p>
        </motion.div>
        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Удобная навигация</h3>
          <p>Простое перемещение между компонентами с помощью меню</p>
        </motion.div>
        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Адаптивный дизайн</h3>
          <p>Компоненты хорошо выглядят на устройствах любого размера</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 