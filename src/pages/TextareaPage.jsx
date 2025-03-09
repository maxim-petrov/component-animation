import { motion } from 'framer-motion';
import Textarea from '../components/Textarea';

const TextareaPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Textarea Component</h1>
      <div className="component-demo">
        <Textarea />
      </div>
      <div className="component-description">
        <h2>Описание</h2>
        <p>
          Компонент многострочного текстового поля (Textarea) с автоматическим 
          изменением высоты при вводе. Поддерживает анимированную метку и 
          специальное оформление при фокусе.
        </p>
        <h3>Особенности</h3>
        <ul>
          <li>Автоматическое изменение высоты при вводе</li>
          <li>Анимированная метка</li>
          <li>Возможность установки максимальной высоты</li>
          <li>Стилизация состояний (фокус, заполнено)</li>
          <li>Адаптивная ширина</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TextareaPage; 