import { motion } from 'framer-motion';
import Slider from '../components/Slider';
import { Spring } from '../animations/tokens';
import '../global.css';

const SliderPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Slider</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <Slider />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Слайдер использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Анимация ползунка</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Spring.Stiffness.Firm (290)</code> - высокое значение жесткости для быстрой и энергичной реакции</li>
          <li><code>Spring.Damping.High (22.22)</code> - сильное затухание для минимальных колебаний</li>
          <li><code>Spring.Mass.Default (1)</code> - сбалансированная масса для естественного движения</li>
          <li>Трансформация при наведении: <code>scale: 1.1</code></li>
          <li>Трансформация при нажатии: <code>scale: 1.2</code></li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация заполнения оси</h3>
        <ul style={{ color: "#333" }}>
          <li>Использует те же параметры spring-анимации, что и ползунок</li>
          <li>Плавное изменение значения <code>right</code> с использованием spring-физики</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Структурная и функциональная анимация - показывает изменение состояния интерфейса и дает мгновенную обратную связь при взаимодействии. Spring-физика делает движение более естественным и приятным, создавая ощущение физического взаимодействия с объектом реального мира.
        </p>
        
        <h3 style={{ color: "#333" }}>Преимущества использования spring-анимации</h3>
        <ul style={{ color: "#333" }}>
          <li><strong>Естественное движение</strong> - пружинная анимация создает ощущение реальной физики</li>
          <li><strong>Динамическая реакция</strong> - характер движения меняется в зависимости от скорости взаимодействия</li>
          <li><strong>Плавная интерполяция</strong> - значения изменяются плавно даже при резких изменениях</li>
          <li><strong>Повышенная отзывчивость</strong> - быстрый отклик в начале движения с плавным завершением</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SliderPage; 