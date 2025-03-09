import { motion } from 'framer-motion';
import { Duration, Easing, Delay, ComponentAnimations } from '../animations/tokens';
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
          Наша система токенов анимации основана на трех ключевых компонентах:
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
            <p style={{ color: "#333" }}>400мс+ — сложные/выразительные анимации, декоративные эффекты</p>
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
          <li>Более длительные (Duration.L — Duration.XL)</li>
          <li>Используют нестандартные кривые ускорения (spring, bouncy)</li>
          <li>Применяются точечно в ключевых моментах взаимодействия</li>
          <li>Примеры: успешное завершение действия, анимация приветствия, празднование достижения</li>
        </ul>
      </div>

      <div className="component-description">
        <h2 style={{ color: "#333" }}>Принципы использования токенов</h2>
        
        <h3 style={{ color: "#333" }}>Общие рекомендации</h3>
        <ul style={{ color: "#333" }}>
          <li>Используйте короткие длительности для частых и мелких интерфейсных анимаций</li>
          <li>Длительность анимации должна соответствовать её важности и размеру изменения</li>
          <li>Для связанных элементов используйте небольшие задержки для создания каскадного эффекта</li>
          <li>Эмоциональные анимации следует использовать сдержанно, чтобы не перегружать интерфейс</li>
        </ul>

        <h3 style={{ color: "#333" }}>Примеры работы с токенами</h3>
        <p style={{ color: "#333" }}>
          Токены используются для создания различных анимаций в компонентах:
        </p>
        <pre style={{ color: "#333", backgroundColor: "#f1f1f1", padding: "15px", borderRadius: "5px", overflow: "auto" }}>
{`// Пример использования с Framer Motion
const buttonAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: {
    duration: Duration.XS,
    ease: Easing.standard
  }
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

      <div className="component-description">
        <h2 style={{ color: "#333" }}>Как выбирать токены для компонентов</h2>
        
        <h3 style={{ color: "#333" }}>Простые интерактивные элементы (кнопки, переключатели)</h3>
        <ul style={{ color: "#333" }}>
          <li>Длительность: Duration.XS — Duration.S</li>
          <li>Easing: Easing.standard для основных состояний</li>
          <li>Easing.spring для более выразительных анимаций иконок</li>
        </ul>

        <h3 style={{ color: "#333" }}>Раскрывающиеся компоненты (аккордеон, выпадающие списки)</h3>
        <ul style={{ color: "#333" }}>
          <li>Длительность: Duration.M</li>
          <li>Easing: Easing.entrance для открытия, Easing.exit для закрытия</li>
          <li>Задержки для вложенных элементов: Delay.short</li>
        </ul>

        <h3 style={{ color: "#333" }}>Модальные окна и оверлеи</h3>
        <ul style={{ color: "#333" }}>
          <li>Длительность: Duration.M — Duration.L</li>
          <li>Easing: Easing.entrance для появления</li>
          <li>Совмещайте анимацию затемнения фона с появлением контента</li>
        </ul>

        <h3 style={{ color: "#333" }}>Списки и карточки</h3>
        <ul style={{ color: "#333" }}>
          <li>Используйте Delay.short или Delay.medium для создания каскада</li>
          <li>Стаггер-эффект: анимация каждого следующего элемента начинается с небольшой задержкой</li>
          <li>Ограничивайте общую длительность анимации для длинных списков</li>
        </ul>
      </div>
      
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Соответствие токенов и человеческого восприятия</h2>
        <p style={{ color: "#333" }}>
          Важно понимать, как длительность анимации воспринимается человеком:
        </p>
        <ul style={{ color: "#333" }}>
          <li><strong>0-100мс:</strong> воспринимается как мгновенная реакция</li>
          <li><strong>100-300мс:</strong> ощущается как плавный, но быстрый переход</li>
          <li><strong>300-500мс:</strong> воспринимается как заметная, но не затянутая анимация</li>
          <li><strong>500мс+:</strong> начинает восприниматься как медленная или затянутая анимация</li>
        </ul>
        <p style={{ color: "#333" }}>
          Подбирайте токены с учётом этих особенностей восприятия, чтобы создавать естественные и приятные анимации.
        </p>
      </div>
    </motion.div>
  );
};

export default TokensPage; 