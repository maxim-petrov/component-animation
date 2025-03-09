import { motion } from 'framer-motion';
import Button from '../components/Button';

const ButtonPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Button</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <Button text="Кнопка" />
        </div>
      </div>
      <div className="component-description">
        <h2>Описание</h2>
        <p>
          Кнопка с анимацией при наведении и нажатии. Поддерживает различные варианты и размеры.
          Компонент включает иконку сердца, которая также анимируется при взаимодействии.
        </p>
        <h3>Пропсы</h3>
        <ul>
          <li><code>text</code> - текст кнопки</li>
          <li><code>type</code> - тип кнопки (button, submit, reset)</li>
          <li><code>variant</code> - вариант стиля (primary, secondary)</li>
          <li><code>size</code> - размер кнопки (large, medium, small)</li>
          <li><code>onClick</code> - обработчик клика</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ButtonPage; 