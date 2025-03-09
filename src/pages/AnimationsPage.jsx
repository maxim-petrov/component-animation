import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FadeIn, 
  SlideIn, 
  ZoomIn, 
  ShrinkOut, 
  StaggeredEntrance, 
  ExitingPersistence 
} from '../animations/components';
import '../animations/components/styles.css';

const AnimationsPage = () => {
  const [showFade, setShowFade] = useState(true);
  const [showSlide, setShowSlide] = useState(true);
  const [showZoom, setShowZoom] = useState(true);
  const [showShrink, setShowShrink] = useState(true);
  const [showStaggered, setShowStaggered] = useState(true);
  const [exitThenEnter, setExitThenEnter] = useState(false);

  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 style={{ color: "#333" }}>Анимационные компоненты</h1>
      
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Система компонентов анимации</h2>
        <p style={{ color: "#333" }}>
          Библиотека предоставляет высокоуровневые компоненты для добавления анимаций в интерфейс.
          Все компоненты используют единую систему токенов для согласованности анимаций.
        </p>
      </div>

      {/* FadeIn пример */}
      <div className="component-description">
        <h2 style={{ color: "#333" }}>FadeIn</h2>
        <p style={{ color: "#333" }}>
          Компонент для плавного появления элементов. Поддерживает различные направления и расстояния.
        </p>
        
        <div className="animation-demo">
          <div className="animation-controls">
            <button 
              className="demo-button"
              onClick={() => setShowFade(!showFade)}
            >
              {showFade ? 'Скрыть' : 'Показать'}
            </button>
          </div>
          
          <div className="animation-preview">
            <ExitingPersistence>
              {showFade && (
                <FadeIn 
                  duration="large" 
                  entranceDirection="bottom"
                  onFinish={(state) => console.log('FadeIn animation finished:', state)}
                >
                  {(props, state) => (
                    <div {...props} className="demo-box">
                      <h3>FadeIn элемент</h3>
                      <p>Статус: {state}</p>
                    </div>
                  )}
                </FadeIn>
              )}
            </ExitingPersistence>
          </div>
        </div>
        
        <div className="code-sample">
          <pre>
{`<FadeIn 
  duration="large" 
  entranceDirection="bottom"
  onFinish={(state) => console.log('Animation finished:', state)}
>
  {(props, state) => (
    <div {...props} className="demo-box">
      <h3>FadeIn элемент</h3>
      <p>Статус: {state}</p>
    </div>
  )}
</FadeIn>`}
          </pre>
        </div>
      </div>

      {/* SlideIn пример */}
      <div className="component-description">
        <h2 style={{ color: "#333" }}>SlideIn</h2>
        <p style={{ color: "#333" }}>
          Компонент для появления элементов с эффектом скольжения. 
          Вы можете указать направление и настроить эффект затухания.
        </p>
        
        <div className="animation-demo">
          <div className="animation-controls">
            <button 
              className="demo-button"
              onClick={() => setShowSlide(!showSlide)}
            >
              {showSlide ? 'Скрыть' : 'Показать'}
            </button>
          </div>
          
          <div className="animation-preview">
            <ExitingPersistence>
              {showSlide && (
                <SlideIn 
                  duration="medium" 
                  enterFrom="right"
                  exitTo="left"
                  fade="inout"
                  animationTimingFunction="ease-out"
                  animationTimingFunctionExiting="ease-in"
                >
                  {(props, state) => (
                    <div {...props} className="demo-box blue">
                      <h3>SlideIn элемент</h3>
                      <p>Статус: {state}</p>
                    </div>
                  )}
                </SlideIn>
              )}
            </ExitingPersistence>
          </div>
        </div>
        
        <div className="code-sample">
          <pre>
{`<SlideIn 
  duration="medium" 
  enterFrom="right"
  exitTo="left"
  fade="inout"
  animationTimingFunction="ease-out"
  animationTimingFunctionExiting="ease-in"
>
  {(props, state) => (
    <div {...props} className="demo-box blue">
      <h3>SlideIn элемент</h3>
      <p>Статус: {state}</p>
    </div>
  )}
</SlideIn>`}
          </pre>
        </div>
      </div>

      {/* ZoomIn пример */}
      <div className="component-description">
        <h2 style={{ color: "#333" }}>ZoomIn</h2>
        <p style={{ color: "#333" }}>
          Компонент для появления элементов с эффектом увеличения.
        </p>
        
        <div className="animation-demo">
          <div className="animation-controls">
            <button 
              className="demo-button"
              onClick={() => setShowZoom(!showZoom)}
            >
              {showZoom ? 'Скрыть' : 'Показать'}
            </button>
          </div>
          
          <div className="animation-preview">
            <ExitingPersistence>
              {showZoom && (
                <ZoomIn duration="small">
                  {(props, state) => (
                    <div {...props} className="demo-box green">
                      <h3>ZoomIn элемент</h3>
                      <p>Статус: {state}</p>
                    </div>
                  )}
                </ZoomIn>
              )}
            </ExitingPersistence>
          </div>
        </div>
        
        <div className="code-sample">
          <pre>
{`<ZoomIn duration="small">
  {(props, state) => (
    <div {...props} className="demo-box green">
      <h3>ZoomIn элемент</h3>
      <p>Статус: {state}</p>
    </div>
  )}
</ZoomIn>`}
          </pre>
        </div>
      </div>

      {/* ShrinkOut пример */}
      <div className="component-description">
        <h2 style={{ color: "#333" }}>ShrinkOut</h2>
        <p style={{ color: "#333" }}>
          Компонент для скрытия элементов с эффектом сжатия.
        </p>
        
        <div className="animation-demo">
          <div className="animation-controls">
            <button 
              className="demo-button"
              onClick={() => setShowShrink(!showShrink)}
            >
              {showShrink ? 'Скрыть' : 'Показать'}
            </button>
          </div>
          
          <div className="animation-preview">
            <ExitingPersistence>
              {showShrink && (
                <ShrinkOut duration="small">
                  {(props, state) => (
                    <div {...props} className="demo-box orange">
                      <h3>ShrinkOut элемент</h3>
                      <p>Статус: {state}</p>
                    </div>
                  )}
                </ShrinkOut>
              )}
            </ExitingPersistence>
          </div>
        </div>
        
        <div className="code-sample">
          <pre>
{`<ShrinkOut duration="small">
  {(props, state) => (
    <div {...props} className="demo-box orange">
      <h3>ShrinkOut элемент</h3>
      <p>Статус: {state}</p>
    </div>
  )}
</ShrinkOut>`}
          </pre>
        </div>
      </div>

      {/* StaggeredEntrance пример */}
      <div className="component-description">
        <h2 style={{ color: "#333" }}>StaggeredEntrance</h2>
        <p style={{ color: "#333" }}>
          Компонент для каскадного появления группы элементов.
        </p>
        
        <div className="animation-demo">
          <div className="animation-controls">
            <button 
              className="demo-button"
              onClick={() => setShowStaggered(!showStaggered)}
            >
              {showStaggered ? 'Скрыть' : 'Показать'}
            </button>
          </div>
          
          <div className="animation-preview staggered-preview">
            <ExitingPersistence>
              {showStaggered && (
                <StaggeredEntrance columns={3} delayStep={80}>
                  {[1, 2, 3, 4, 5, 6].map(index => (
                    <FadeIn key={index} duration="medium" entranceDirection="bottom">
                      <div className={`demo-box staggered-item item-${index}`}>
                        <h3>Элемент {index}</h3>
                      </div>
                    </FadeIn>
                  ))}
                </StaggeredEntrance>
              )}
            </ExitingPersistence>
          </div>
        </div>
        
        <div className="code-sample">
          <pre>
{`<StaggeredEntrance columns={3} delayStep={80}>
  {[1, 2, 3, 4, 5, 6].map(index => (
    <FadeIn key={index} duration="medium" entranceDirection="bottom">
      <div className="demo-box staggered-item">
        <h3>Элемент {index}</h3>
      </div>
    </FadeIn>
  ))}
</StaggeredEntrance>`}
          </pre>
        </div>
      </div>

      {/* ExitingPersistence пример */}
      <div className="component-description">
        <h2 style={{ color: "#333" }}>ExitingPersistence</h2>
        <p style={{ color: "#333" }}>
          Компонент для управления анимацией элементов при удалении из DOM.
        </p>
        
        <div className="animation-demo">
          <div className="animation-controls">
            <label>
              <input 
                type="checkbox" 
                checked={exitThenEnter}
                onChange={() => setExitThenEnter(!exitThenEnter)}
              />
              Сначала удалить, потом добавить
            </label>
          </div>
          
          <div className="animation-preview">
            <ExitingPersistence exitThenEnter={exitThenEnter} appear={true}>
              {[1, 2, 3].map(index => 
                index % 2 === 0 ? (
                  <FadeIn key={`fade-${index}`} duration="medium">
                    <div className="demo-box purple">
                      <h3>Fade Элемент {index}</h3>
                    </div>
                  </FadeIn>
                ) : (
                  <SlideIn key={`slide-${index}`} duration="medium" enterFrom="right">
                    <div className="demo-box blue">
                      <h3>Slide Элемент {index}</h3>
                    </div>
                  </SlideIn>
                )
              )}
            </ExitingPersistence>
          </div>
        </div>
        
        <div className="code-sample">
          <pre>
{`<ExitingPersistence exitThenEnter={true} appear={true}>
  {dynamicElements.map(item => (
    <FadeIn key={item.id} duration="medium">
      <div className="demo-box">
        <h3>{item.title}</h3>
      </div>
    </FadeIn>
  ))}
</ExitingPersistence>`}
          </pre>
        </div>
      </div>
      
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Интеграция с системой токенов</h2>
        <p style={{ color: "#333" }}>
          Все компоненты анимации используют общие токены для обеспечения согласованности:
        </p>
        <ul style={{ color: "#333" }}>
          <li>Длительности: fast01, fast02, moderate01, moderate02, slow01, slow02</li>
          <li>Кривые ускорения: standard, entrance, exit в различных режимах</li>
          <li>Плавный переход между состояниями компонентов</li>
          <li>Поддержка предпочтений пользователя по уменьшению движения (prefers-reduced-motion)</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default AnimationsPage; 