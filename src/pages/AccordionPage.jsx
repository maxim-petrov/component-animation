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
        <h2>Описание</h2>
        <p>
          Аккордеон позволяет скрывать и показывать содержимое по клику на заголовок.
          Компонент имеет плавные анимации при раскрытии и сворачивании секции.
        </p>
        <h3>Пропсы</h3>
        <ul>
          <li><code>title</code> - заголовок аккордеона</li>
          <li><code>subtitle</code> - подзаголовок (опционально)</li>
          <li><code>content</code> - содержимое, которое будет скрыто/показано</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default AccordionPage; 