import { motion } from 'framer-motion';
import Input from '../components/Input';

const InputPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Input Component</h1>
      <div className="component-demo">
        <Input />
      </div>
      <div className="component-description">
        <h2>Описание</h2>
        <p>
          Компонент ввода текста (Input) с анимированной меткой и возможностью очистки.
          При фокусе метка уменьшается и поднимается вверх, освобождая место для ввода.
        </p>
        <h3>Особенности</h3>
        <ul>
          <li>Анимация метки при фокусе</li>
          <li>Кнопка очистки поля</li>
          <li>Различные состояния (фокус, заполнено, ошибка)</li>
          <li>Возможность добавления пользовательских иконок</li>
          <li>Адаптивная ширина</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default InputPage; 