import { motion } from 'framer-motion';
import SearchBox from '../components/SearchBox';

const SearchBoxPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Search Box</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <SearchBox />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Компонент SearchBox использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Анимация выпадающего списка</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.M</code> - средняя длительность (250ms)</li>
          <li><code>Easing.spring</code> - пружинная кривая для естественного движения</li>
          <li>Появление и масштабирование списка (transform: scale, opacity)</li>
          <li>Точка трансформации от верхнего края (transformOrigin: "top")</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация иконки поиска</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая</li>
          <li>Мягкое изменение цвета при фокусе на поле</li>
          <li>Небольшой "пульс" при начале поиска</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация результатов поиска</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.entrance</code> - кривая для плавного входа</li>
          <li><code>Delay.stagger</code> - каскадная задержка для результатов (20ms)</li>
          <li>Поочередное появление результатов снизу вверх</li>
          <li>Визуальное выделение при наведении и фокусе</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Комбинированная анимация - функциональная для основного взаимодействия и эмоциональная для 
          результатов поиска, обеспечивающая как чёткую обратную связь, так и визуальную привлекательность.
        </p>
      </div>
    </motion.div>
  );
};

export default SearchBoxPage; 