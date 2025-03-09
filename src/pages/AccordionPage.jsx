import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

const AccordionPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Accordion</h1>
      <div className="component-demo accordion-demo">
        <div className="component-demo-inner">
          <Accordion 
            title="Заголовок"
            subtitle="Подзаголовок"
            content="Оригинал документа, на основании которого продавец стал собственником квартиры. Например, договор купли-продажи, договор долевого участия, договор дарения и другие (находится у собственника)"
          />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Аккордеон использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Анимация стрелки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.S</code> - короткая длительность (150ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая ускорения</li>
          <li>Трансформация: поворот на 180 градусов при открытии/закрытии</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация контента</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.M</code> - средняя длительность (250ms)</li>
          <li><code>Easing.entrance</code> - кривая для плавного появления</li>
          <li>Начальное состояние: height: 0, opacity: 0</li>
          <li>Конечное состояние: height: auto, opacity: 1</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Структурная анимация - показывает изменение состояния интерфейса и направляет внимание пользователя.
        </p>
      </div>
    </motion.div>
  );
};

export default AccordionPage; 