import { motion } from 'framer-motion';
import { Duration, Easing, Delay, ComponentAnimations, Spring, createSpringConfig } from '../animations/tokens';
import '../global.css';

const TokensPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 style={{ color: "#333" }}>Токены анимации</h1>
      
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Основные принципы</h2>
        <p style={{ color: "#333" }}>
          Токены анимации — это набор предопределенных значений для создания согласованных и предсказуемых 
          анимаций во всем приложении. Благодаря токенам, мы обеспечиваем единую систему движения,
          которая повышает удобство использования и создает узнаваемый визуальный язык.
        </p>
      </div>

      <div className="component-description">
        <h2 style={{ color: "#333" }}>Структура системы токенов</h2>
        <p style={{ color: "#333" }}>
          Система токенов анимации основана на трех ключевых компонентах:
        </p>

        <h3 style={{ color: "#333" }}>1. Длительность (Duration)</h3>
        <p style={{ color: "#333" }}>
          Определяет, как долго длится анимация. Правильно подобранное время делает интерфейс 
          отзывчивым и приятным в использовании.
        </p>
        <div className="token-group">
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Duration.XXS</h4>
            <p style={{ color: "#333" }}>50мс — мгновенные микро-анимации (мелкие значки, индикаторы)</p>
          </div>
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Duration.XS</h4>
            <p style={{ color: "#333" }}>100мс — быстрые микро-анимации (ховер-эффекты)</p>
          </div>
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Duration.S</h4>
            <p style={{ color: "#333" }}>150мс — небольшие UI-изменения (кнопки, переключатели)</p>
          </div>
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Duration.M</h4>
            <p style={{ color: "#333" }}>250мс — стандартные переходы (модальные окна, выпадающие меню)</p>
          </div>
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Duration.L</h4>
            <p style={{ color: "#333" }}>300мс — крупные изменения (карточки, панели)</p>
          </div>
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Duration.XL</h4>
            <p style={{ color: "#333" }}>400мс — сложные/выразительные анимации, декоративные эффекты</p>
          </div>
        </div>

        <h3 style={{ color: "#333" }}>2. Кривые ускорения (Easing)</h3>
        <p style={{ color: "#333" }}>
          Определяют характер движения во времени — ускорение, замедление или плавное перемещение.
          Натуральные движения никогда не бывают линейными, поэтому правильные кривые ускорения
          делают анимации более естественными.
        </p>
        <div className="token-group">
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Easing.standard [0.4, 0.0, 0.2, 1.0]</h4>
            <p style={{ color: "#333" }}>Стандартная кривая с плавным началом и концом — для большинства интерфейсных анимаций</p>
          </div>
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Easing.entrance [0.0, 0.0, 0.3, 1.0]</h4>
            <p style={{ color: "#333" }}>Для появления элементов — быстрый старт и плавное торможение</p>
          </div>
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Easing.exit [0.4, 0.14, 1.0, 1.0]</h4>
            <p style={{ color: "#333" }}>Для исчезновения элементов — медленный старт и резкое ускорение к концу</p>
          </div>
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Easing.spring [0.43, 0.28, 0.52, 1.23]</h4>
            <p style={{ color: "#333" }}>Пружинная динамика для эмоциональных эффектов с небольшим перелётом через целевое значение</p>
          </div>
        </div>

        <div className="token-group">
          <div className="token-item-wide">
            <h4 style={{ color: "#333" }}>Пресеты для пружинной анимации (Spring)</h4>
            <p style={{ color: "#333" }}>
              Готовые конфигурации пружинных анимаций для различных сценариев использования:
            </p>
            <ul style={{ color: "#333" }}>
              <li><strong>Spring.Strong</strong> — энергичный эффект для быстрых и отзывчивых элементов, включая аккордеон (stiffness: 290, damping: 22, mass: 1)</li>
              <li><strong>Spring.Medium</strong> — сбалансированный эффект для большинства интерфейсных анимаций (stiffness: 200, damping: 18, mass: 1)</li>
              <li><strong>Spring.Gentle</strong> — мягкий, плавный эффект для больших элементов и эмоциональных анимаций (stiffness: 120, damping: 14, mass: 1.2)</li>
            </ul>
          </div>
        </div>

        <h3 style={{ color: "#333" }}>3. Задержки (Delay)</h3>
        <p style={{ color: "#333" }}>
          Определяют временной промежуток перед началом анимации. Особенно полезны для создания каскадных эффектов и последовательностей.
        </p>
        <div className="token-group">
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Delay.none</h4>
            <p style={{ color: "#333" }}>0мс — без задержки, мгновенный отклик</p>
          </div>
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Delay.short</h4>
            <p style={{ color: "#333" }}>50мс — для последовательного появления элементов</p>
          </div>
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Delay.medium</h4>
            <p style={{ color: "#333" }}>100мс — средняя задержка</p>
          </div>
          <div className="token-item">
            <h4 style={{ color: "#333" }}>Delay.long</h4>
            <p style={{ color: "#333" }}>200мс — для более ощутимой паузы</p>
          </div>
        </div>
      </div>

      <div className="component-description">
        <h2 style={{ color: "#333" }}>Типы анимаций по назначению</h2>
        
        <h3 style={{ color: "#333" }}>1. Функциональные анимации</h3>
        <p style={{ color: "#333" }}>
          Улучшают понятность интерфейса, дают мгновенную обратную связь пользователю.
        </p>
        <ul style={{ color: "#333" }}>
          <li>Короткие по времени (Duration.XS — Duration.S)</li>
          <li>Небольшие по расстоянию перемещения</li>
          <li>Используют стандартные или entrance кривые ускорения</li>
          <li>Примеры: ховер-эффекты кнопок, переключатели, изменение фокуса полей</li>
        </ul>

        <h3 style={{ color: "#333" }}>2. Структурные анимации</h3>
        <p style={{ color: "#333" }}>
          Помогают пользователю понять изменения в структуре интерфейса, показывают связь между состояниями.
        </p>
        <ul style={{ color: "#333" }}>
          <li>Средняя или длительная продолжительность (Duration.M — Duration.L)</li>
          <li>Плавные кривые ускорения (ease-in-out или комбинация entrance→exit)</li>
          <li>Сопровождают переходы между состояниями интерфейса</li>
          <li>Примеры: открытие/закрытие аккордеона, появление модального окна, анимация вкладок</li>
        </ul>

        <h3 style={{ color: "#333" }}>3. Эмоциональные анимации</h3>
        <p style={{ color: "#333" }}>
          Создают особое настроение, добавляют характер интерфейсу, усиливают вовлеченность.
        </p>
        <ul style={{ color: "#333" }}>
          <li>Более длительные (Duration.L — Duration.XL) или с использованием пружинных анимаций</li>
          <li>Используют Spring пресеты (Strong, Medium, Gentle) для более естественного движения</li>
          <li>Применяются точечно в ключевых моментах взаимодействия</li>
          <li>Примеры: успешное завершение действия, анимация приветствия, празднование достижения</li>
        </ul>
      </div>

      <div className="component-description" style={{ display: 'none' }}>
        <h2 style={{ color: "#333" }}>Принципы использования токенов</h2>
        
        <h3 style={{ color: "#333" }}>Примеры работы с токенами</h3>
        <p style={{ color: "#333" }}>
          Токены используются для создания различных анимаций в компонентах:
        </p>
        <pre style={{ color: "#333", backgroundColor: "#f1f1f1", padding: "15px", borderRadius: "5px", overflow: "auto" }}>
{`// Пример использования с Framer Motion и cubic-bezier
const buttonAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
};

// Пример использования пружинной анимации для аккордеона
const accordionAnimation = {
  transition: {
    type: "spring",
    stiffness: Spring.Strong.stiffness,
    damping: Spring.Strong.damping,
    mass: Spring.Strong.mass,
    duration: Duration.M
  }
};

// Пример использования пружинного пресета для других компонентов
const cardAnimation = {
  transition: createSpringConfig({
    ...Spring.Medium
  }).transition
};

// Пример использования готовых конфигураций для компонентов
const dropdownAppearAnimation = {
  ...ComponentAnimations.dropdown.appear
};

// Пример использования в CSS
.animated-element {
  transition: transform 0.15s cubic-bezier(0.4, 0.0, 0.2, 1.0);
}

.animated-element:hover {
  transform: scale(1.05);
}`}
        </pre>
      </div>
    </motion.div>
  );
};

export default TokensPage; 