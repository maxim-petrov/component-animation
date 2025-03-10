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
          Наша система токенов анимации основана на четырех ключевых компонентах:
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

        <h3 style={{ color: "#333" }}>3. Пружинные анимации (Spring)</h3>
        <p style={{ color: "#333" }}>
          Более сложные и естественные анимации, моделирующие физическое поведение пружины. Позволяют создавать живые, органичные движения с динамическими свойствами.
        </p>
        <div className="token-group">
          <div className="token-item-wide">
            <h4 style={{ color: "#333" }}>Жесткость пружины (Stiffness)</h4>
            <p style={{ color: "#333" }}>
              Определяет, насколько "упругой" является пружина. Чем выше значение, тем быстрее и энергичнее движение.
            </p>
            <ul style={{ color: "#333" }}>
              <li><strong>Spring.Stiffness.Soft (170)</strong> — мягкое, плавное движение</li>
              <li><strong>Spring.Stiffness.Medium (230)</strong> — сбалансированное движение</li>
              <li><strong>Spring.Stiffness.Firm (290)</strong> — энергичное, быстрое движение</li>
              <li><strong>Spring.Stiffness.Rigid (350)</strong> — очень жесткое, реактивное движение</li>
            </ul>
          </div>
          
          <div className="token-item-wide">
            <h4 style={{ color: "#333" }}>Затухание (Damping)</h4>
            <p style={{ color: "#333" }}>
              Определяет, насколько быстро затухают колебания пружины. Низкие значения создают "пружинящий" эффект, высокие — быстрое прекращение колебаний.
            </p>
            <ul style={{ color: "#333" }}>
              <li><strong>Spring.Damping.Low (10)</strong> — слабое затухание, множественные колебания</li>
              <li><strong>Spring.Damping.Medium (15)</strong> — среднее затухание, небольшое перелетание</li>
              <li><strong>Spring.Damping.High (22.22)</strong> — сильное затухание, минимальные колебания</li>
              <li><strong>Spring.Damping.Critical (30)</strong> — критическое затухание, без перелета</li>
            </ul>
          </div>
          
          <div className="token-item-wide">
            <h4 style={{ color: "#333" }}>Масса (Mass)</h4>
            <p style={{ color: "#333" }}>
              Имитирует "вес" анимируемого объекта. Влияет на инерцию движения и скорость реакции на изменения.
            </p>
            <ul style={{ color: "#333" }}>
              <li><strong>Spring.Mass.Light (0.5)</strong> — легкий объект, быстрая реакция</li>
              <li><strong>Spring.Mass.Default (1)</strong> — стандартная масса</li>
              <li><strong>Spring.Mass.Heavy (1.5)</strong> — тяжелый объект, более инертное движение</li>
              <li><strong>Spring.Mass.Massive (2)</strong> — очень тяжелый объект, медленная реакция</li>
            </ul>
          </div>
          
          <div className="token-item-wide">
            <h4 style={{ color: "#333" }}>Готовые пресеты</h4>
            <p style={{ color: "#333" }}>
              Предустановленные комбинации параметров для типичных случаев использования.
            </p>
            <ul style={{ color: "#333" }}>
              <li><strong>Spring.Presets.Button</strong> — для кнопок и небольших элементов (stiffness: 290, damping: 22.22, mass: 1)</li>
              <li><strong>Spring.Presets.Modal</strong> — для модальных окон и панелей (stiffness: 230, damping: 20, mass: 1)</li>
              <li><strong>Spring.Presets.Dropdown</strong> — для выпадающих меню (stiffness: 250, damping: 18, mass: 0.8)</li>
              <li><strong>Spring.Presets.Content</strong> — для областей контента (stiffness: 170, damping: 22, mass: 1.2)</li>
              <li><strong>Spring.Presets.Expressive</strong> — для выразительных анимаций (stiffness: 150, damping: 10, mass: 1)</li>
            </ul>
          </div>
        </div>

        <h3 style={{ color: "#333" }}>4. Задержки (Delay)</h3>
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
          <li>Более длительные (Duration.L — Duration.XL) или пружинные (Spring)</li>
          <li>Используют нестандартные кривые ускорения (Easing.spring) или пружинные параметры</li>
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
          <li>Для естественного движения предпочитайте пружинные анимации (Spring) с правильно подобранными параметрами</li>
        </ul>

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

// Пример пружинной анимации с Spring
const accordionAnimation = {
  transition: createSpringConfig({
    stiffness: Spring.Stiffness.Firm,
    damping: Spring.Damping.High,
    mass: Spring.Mass.Default
  }).transition
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
          <li>Spring: Spring.Presets.Button для выразительных анимаций иконок</li>
          <li>Используйте более высокий Stiffness (290+) для быстрой реакции</li>
        </ul>

        <h3 style={{ color: "#333" }}>Раскрывающиеся компоненты (аккордеон, выпадающие списки)</h3>
        <ul style={{ color: "#333" }}>
          <li>Тип: spring для плавного открытия с эффектом "упругости"</li>
          <li>Spring.Stiffness: Firm (290) для энергичного раскрытия</li>
          <li>Spring.Damping: High (22.22) для уменьшения колебаний</li>
          <li>Spring.Mass: Default (1) для сбалансированного ощущения</li>
          <li>Для закрытия: Easing.exit с Duration.M для более строгого эффекта</li>
        </ul>

        <h3 style={{ color: "#333" }}>Модальные окна и оверлеи</h3>
        <ul style={{ color: "#333" }}>
          <li>Spring.Presets.Modal для естественного появления</li>
          <li>Средний Stiffness (230) и Damping (20) для сбалансированного эффекта</li>
          <li>Совмещайте анимацию затемнения фона с появлением контента</li>
        </ul>

        <h3 style={{ color: "#333" }}>Списки и карточки</h3>
        <ul style={{ color: "#333" }}>
          <li>Spring.Presets.Content для основных анимаций</li>
          <li>Более низкий Stiffness (170) для плавного движения больших объектов</li>
          <li>Mass.Heavy (1.5) для ощущения "веса" информационных блоков</li>
          <li>Используйте Delay.short или Delay.medium для создания каскада</li>
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
          Для пружинных анимаций (Spring):
        </p>
        <ul style={{ color: "#333" }}>
          <li><strong>Высокий Stiffness + низкий Damping:</strong> быстрое, но "дребезжащее" движение</li>
          <li><strong>Высокий Stiffness + высокий Damping:</strong> быстрое, энергичное движение с минимальным перелетом</li>
          <li><strong>Низкий Stiffness + низкий Damping:</strong> медленное движение с множественными колебаниями</li>
          <li><strong>Низкий Stiffness + высокий Damping:</strong> медленное, плавное движение без колебаний</li>
        </ul>
        <p style={{ color: "#333" }}>
          Подбирайте токены с учётом этих особенностей восприятия, чтобы создавать естественные и приятные анимации.
        </p>
      </div>
    </motion.div>
  );
};

export default TokensPage; 