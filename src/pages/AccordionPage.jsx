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
           <Accordion 
            title="Заголовок"
            subtitle="Подзаголовок"
            content="Оригинал документа, на основании которого продавец стал собственником квартиры. Например, договор купли-продажи, договор долевого участия, договор дарения и другие (находится у собственника)"
            style={{ paddingTop: '0' }}
          />
           <Accordion 
            title="Заголовок"
            subtitle="Подзаголовок"
            content="Оригинал документа, на основании которого продавец стал собственником квартиры. Например, договор купли-продажи, договор долевого участия, договор дарения и другие (находится у собственника)"
            style={{ paddingTop: '0' }}
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
          <li><code>Spring.Strong</code> - энергичный пружинный эффект</li>
          <li><code>stiffness: 290</code> - упругость пружины</li>
          <li><code>damping: 22</code> - затухание пружины</li>
          <li><code>mass: 1</code> - масса объекта</li>
          <li>Трансформация: поворот на 180 градусов при открытии/закрытии</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация контента</h3>
        <ul style={{ color: "#333" }}>
          <li>Анимация открытия и закрытия:</li>
          <ul>
            <li><code>Spring.Strong</code> - энергичный пружинный эффект</li>
            <li><code>stiffness: 290</code> - оптимальная упругость пружины</li>
            <li><code>damping: 22</code> - оптимальное затухание для естественного движения</li>
            <li><code>mass: 1</code> - стандартная масса объекта</li>
            <li><code>duration: Duration.M</code> - длительность анимации: 250мс</li>
          </ul>
          <li>Начальное состояние: height: 0, opacity: 0</li>
          <li>Spring анимация применяется как при открытии, так и при закрытии аккордеона</li>
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