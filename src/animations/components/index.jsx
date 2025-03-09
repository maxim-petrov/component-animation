import React, { useState, useRef, useEffect, createContext, useContext, Children, Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { duration, motion as motionFn } from '../design-tokens';

// Типы анимаций и соответствующие им токены
const durationMap = {
  'none': 0,
  'small': duration.fast02,
  'medium': duration.moderate01,
  'large': duration.moderate02,
  'xlarge': duration.slow01
};

// Типы easing-функций и соответствующие режимы
const easingMap = {
  'linear': ['standard', 'productive'],
  'ease-in': ['entrance', 'productive'],
  'ease-out': ['exit', 'productive'],
  'ease-in-out': ['standard', 'expressive']
};

// Контекст для передачи информации о стадии анимации дочерним компонентам
const AnimationContext = createContext({ state: 'entering' });

/**
 * FadeIn - Компонент для плавного появления элементов.
 */
export const FadeIn = ({ 
  children, 
  duration: durationSize = 'large', 
  distance = 'proportional', 
  entranceDirection,
  exitDirection,
  isPaused = false,
  onFinish = () => {}
}) => {
  const [state, setState] = useState('exited');
  const ref = useRef(null);
  
  // Настройки анимации на основе токенов
  const animationDuration = durationMap[durationSize];
  
  // Базовые настройки для появления/исчезновения
  const fadeVariants = {
    hidden: { 
      opacity: 0,
      transition: { 
        duration: animationDuration, 
        ease: motionFn('exit', 'productive')
      }
    },
    visible: { 
      opacity: 1,
      transition: { 
        duration: animationDuration, 
        ease: motionFn('entrance', 'productive')
      }
    }
  };
  
  // Добавление анимации скольжения, если указано направление
  if (entranceDirection || exitDirection) {
    const actualExitDirection = exitDirection || (entranceDirection && {
      'top': 'bottom',
      'right': 'left',
      'bottom': 'top',
      'left': 'right'
    }[entranceDirection]);
    
    // Добавление трансформации для направления
    const translateMap = {
      'top': { y: distance === 'proportional' ? '-100%' : -30 },
      'right': { x: distance === 'proportional' ? '100%' : 30 },
      'bottom': { y: distance === 'proportional' ? '100%' : 30 },
      'left': { x: distance === 'proportional' ? '-100%' : -30 }
    };
    
    if (entranceDirection) {
      fadeVariants.hidden = {
        ...fadeVariants.hidden,
        ...translateMap[entranceDirection]
      };
    }
    
    if (actualExitDirection) {
      fadeVariants.exit = {
        opacity: 0,
        ...translateMap[actualExitDirection],
        transition: { 
          duration: animationDuration, 
          ease: motionFn('exit', 'productive')
        }
      };
    }
  }
  
  // Обработка завершения анимации
  const handleAnimationComplete = (definition) => {
    if (definition === 'visible') {
      setState('entered');
      onFinish('entering');
    } else if (definition === 'hidden' || definition === 'exit') {
      setState('exited');
      onFinish('exiting');
    }
  };
  
  // Эффект для запуска анимации
  useEffect(() => {
    if (!isPaused && state === 'exited') {
      setState('entering');
    }
  }, [isPaused, state]);
  
  return (
    <AnimationContext.Provider value={{ state }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isPaused ? "hidden" : "visible"}
        exit="exit"
        variants={fadeVariants}
        onAnimationComplete={handleAnimationComplete}
        style={{ display: 'contents' }}
      >
        {typeof children === 'function' 
          ? children({ 
              ref, 
              className: `motion-fade duration-${durationSize}`,
              style: { display: 'contents' }
            }, state)
          : children}
      </motion.div>
    </AnimationContext.Provider>
  );
};

/**
 * SlideIn - Компонент для появления элементов с анимацией скольжения.
 */
export const SlideIn = ({ 
  children, 
  duration: durationSize = 'medium', 
  enterFrom, 
  exitTo,
  animationTimingFunction = 'ease-out',
  animationTimingFunctionExiting = 'ease-in',
  fade = 'none',
  isPaused = false,
  onFinish = () => {}
}) => {
  const [state, setState] = useState('exited');
  const ref = useRef(null);
  
  // Настройки анимации на основе токенов
  const animationDuration = durationMap[durationSize];
  const [entranceEasingName, entranceMode] = easingMap[animationTimingFunction];
  const [exitEasingName, exitMode] = easingMap[animationTimingFunctionExiting];
  
  // Направление выхода (если не задано, используем противоположное направление входа)
  const actualExitTo = exitTo || {
    'top': 'bottom',
    'right': 'left',
    'bottom': 'top',
    'left': 'right'
  }[enterFrom];
  
  // Настройки для трансформации в зависимости от направления
  const translateMap = {
    'top': { y: '-100%' },
    'right': { x: '100%' },
    'bottom': { y: '100%' },
    'left': { x: '-100%' }
  };
  
  // Создаем варианты анимации
  const slideVariants = {
    hidden: { 
      ...translateMap[enterFrom],
      opacity: fade === 'in' || fade === 'inout' ? 0 : 1,
      transition: { 
        duration: animationDuration, 
        ease: motionFn(entranceEasingName, entranceMode)
      }
    },
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: animationDuration, 
        ease: motionFn(entranceEasingName, entranceMode)
      }
    },
    exit: { 
      ...translateMap[actualExitTo],
      opacity: fade === 'out' || fade === 'inout' ? 0 : 1,
      transition: { 
        duration: animationDuration, 
        ease: motionFn(exitEasingName, exitMode)
      }
    }
  };
  
  // Обработка завершения анимации
  const handleAnimationComplete = (definition) => {
    if (definition === 'visible') {
      setState('entered');
      onFinish('entering');
    } else if (definition === 'hidden' || definition === 'exit') {
      setState('exited');
      onFinish('exiting');
    }
  };
  
  // Эффект для запуска анимации
  useEffect(() => {
    if (!isPaused && state === 'exited') {
      setState('entering');
    }
  }, [isPaused, state]);
  
  return (
    <AnimationContext.Provider value={{ state }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isPaused ? "hidden" : "visible"}
        exit="exit"
        variants={slideVariants}
        onAnimationComplete={handleAnimationComplete}
      >
        {typeof children === 'function' 
          ? children({ 
              ref, 
              className: `motion-slide duration-${durationSize}`,
              style: {}
            }, state)
          : children}
      </motion.div>
    </AnimationContext.Provider>
  );
};

/**
 * ZoomIn - Компонент для появления элементов с анимацией увеличения.
 */
export const ZoomIn = ({ 
  children, 
  duration: durationSize = 'small',
  isPaused = false,
  onFinish = () => {}
}) => {
  const [state, setState] = useState('exited');
  const ref = useRef(null);
  
  // Настройки анимации на основе токенов
  const animationDuration = durationMap[durationSize];
  
  // Варианты анимации увеличения
  const zoomVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      transition: { 
        duration: animationDuration, 
        ease: motionFn('standard', 'expressive')
      }
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        duration: animationDuration, 
        ease: motionFn('entrance', 'expressive')
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { 
        duration: animationDuration, 
        ease: motionFn('exit', 'expressive')
      }
    }
  };
  
  // Обработка завершения анимации
  const handleAnimationComplete = (definition) => {
    if (definition === 'visible') {
      setState('entered');
      onFinish('entering');
    } else if (definition === 'hidden' || definition === 'exit') {
      setState('exited');
      onFinish('exiting');
    }
  };
  
  // Эффект для запуска анимации
  useEffect(() => {
    if (!isPaused && state === 'exited') {
      setState('entering');
    }
  }, [isPaused, state]);
  
  return (
    <AnimationContext.Provider value={{ state }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isPaused ? "hidden" : "visible"}
        exit="exit"
        variants={zoomVariants}
        onAnimationComplete={handleAnimationComplete}
      >
        {typeof children === 'function' 
          ? children({ 
              ref, 
              className: `motion-zoom duration-${durationSize}`,
              style: {}
            }, state)
          : children}
      </motion.div>
    </AnimationContext.Provider>
  );
};

/**
 * ShrinkOut - Компонент для исчезновения элементов с анимацией сжатия.
 */
export const ShrinkOut = ({ 
  children, 
  duration: durationSize = 'small',
  onFinish = () => {}
}) => {
  const [state, setState] = useState('entered');
  const ref = useRef(null);
  
  // Настройки анимации на основе токенов
  const animationDuration = durationMap[durationSize];
  
  // Варианты анимации сжатия
  const shrinkVariants = {
    visible: { 
      scale: 1,
      opacity: 1,
      height: 'auto',
      transition: { 
        duration: 0
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      height: 0,
      marginTop: 0,
      marginBottom: 0,
      padding: 0,
      transition: { 
        duration: animationDuration, 
        ease: motionFn('exit', 'productive')
      }
    }
  };
  
  // Обработка завершения анимации
  const handleAnimationComplete = (definition) => {
    if (definition === 'exit') {
      setState('exited');
      onFinish('exiting');
    }
  };
  
  return (
    <AnimationContext.Provider value={{ state }}>
      <motion.div
        ref={ref}
        initial="visible"
        exit="exit"
        variants={shrinkVariants}
        onAnimationComplete={handleAnimationComplete}
      >
        {typeof children === 'function' 
          ? children({ 
              ref
            }, state)
          : children}
      </motion.div>
    </AnimationContext.Provider>
  );
};

/**
 * StaggeredEntrance - Компонент для каскадного появления элементов.
 */
export const StaggeredEntrance = ({ 
  children, 
  columns = 'responsive',
  column = 0,
  delayStep = 50 
}) => {
  const [childrenInfo, setChildrenInfo] = useState([]);
  const containerRef = useRef(null);
  
  // Функция для вычисления позиций элементов в сетке
  const calculatePositions = () => {
    if (!containerRef.current || columns === 'responsive') return;
    
    const childElements = containerRef.current.querySelectorAll('[data-staggered]');
    const positions = [];
    
    childElements.forEach((el, index) => {
      const row = Math.floor(index / columns);
      const col = index % columns + column;
      
      positions.push({
        row,
        col,
        delay: (row + col) * delayStep / 1000,
        index
      });
    });
    
    setChildrenInfo(positions);
  };
  
  // Эффект для расчета позиций при монтировании и изменении зависимостей
  useEffect(() => {
    if (columns !== 'responsive') {
      calculatePositions();
    }
  }, [columns, column, delayStep, children]);
  
  // Если columns === 'responsive', нужно рассчитать позиции на клиенте
  useEffect(() => {
    if (columns === 'responsive' && typeof window !== 'undefined') {
      const handleResize = () => {
        if (!containerRef.current) return;
        
        const containerWidth = containerRef.current.offsetWidth;
        const childElements = containerRef.current.querySelectorAll('[data-staggered]');
        
        if (childElements.length === 0) return;
        
        // Получаем ширину первого элемента как образец
        const sampleChildWidth = childElements[0].offsetWidth;
        
        if (sampleChildWidth === 0) return;
        
        // Вычисляем количество колонок
        const computedColumns = Math.floor(containerWidth / sampleChildWidth);
        
        const positions = [];
        
        childElements.forEach((el, index) => {
          const row = Math.floor(index / computedColumns);
          const col = index % computedColumns + column;
          
          positions.push({
            row,
            col,
            delay: (row + col) * delayStep / 1000,
            index
          });
        });
        
        setChildrenInfo(positions);
      };
      
      // Запускаем расчет после монтирования и при изменении размера окна
      handleResize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [columns, column, delayStep]);
  
  // Клонируем дочерние элементы с добавлением задержки анимации
  const getStaggeredChildren = () => {
    const childrenArray = Children.toArray(children);
    
    if (columns === 'responsive' && childrenInfo.length === 0) {
      // Возвращаем элементы с атрибутом для последующего определения позиций
      return childrenArray.map((child, index) => (
        <div key={index} data-staggered={true}>
          {React.cloneElement(child, { style: { visibility: 'hidden' } })}
        </div>
      ));
    }
    
    return childrenArray.map((child, index) => {
      const info = childrenInfo.find(info => info.index === index);
      
      if (!info) return child;
      
      // Находим компонент анимации внутри дерева (рекурсивно)
      const findAndCloneWithDelay = (element) => {
        if (!element || typeof element !== 'object') return element;
        
        if (element.type && 
           (element.type === FadeIn || 
            element.type === SlideIn || 
            element.type === ZoomIn)) {
          // Нашли компонент анимации, добавляем задержку
          return React.cloneElement(element, {
            ...element.props,
            style: { 
              ...element.props.style,
              transitionDelay: `${info.delay}s`,
              animationDelay: `${info.delay}s`
            }
          });
        }
        
        // Рекурсивно проверяем дочерние элементы
        if (element.props && element.props.children) {
          const children = React.Children.toArray(element.props.children);
          const newChildren = children.map(findAndCloneWithDelay);
          
          return React.cloneElement(element, {
            ...element.props,
            children: newChildren
          });
        }
        
        return element;
      };
      
      return (
        <div key={index} data-staggered={true}>
          {findAndCloneWithDelay(child)}
        </div>
      );
    });
  };
  
  return (
    <div ref={containerRef} className="staggered-container">
      {getStaggeredChildren()}
    </div>
  );
};

/**
 * ExitingPersistence - Компонент для анимации элементов при удалении из DOM.
 */
export const ExitingPersistence = ({ 
  children, 
  appear = false,
  exitThenEnter = false
}) => {
  // Используем ключи для отслеживания элементов
  const [elements, setElements] = useState({});
  const prevChildrenRef = useRef([]);
  
  useEffect(() => {
    const currentChildren = Children.toArray(children);
    const prevChildren = prevChildrenRef.current;
    
    // Маппинг ключей для всех текущих дочерних элементов
    const newElements = { ...elements };
    
    // Проверяем, какие элементы добавлены, а какие удалены
    currentChildren.forEach(child => {
      const key = child.key || `element-${Math.random()}`;
      
      if (!newElements[key]) {
        newElements[key] = {
          element: child,
          status: appear ? 'entering' : 'entered',
          exiting: false
        };
      } else {
        newElements[key] = {
          ...newElements[key],
          element: child
        };
      }
    });
    
    // Помечаем удаленные элементы
    prevChildren.forEach(child => {
      const key = child.key || `element-${Math.random()}`;
      
      if (newElements[key] && !currentChildren.find(c => c.key === key)) {
        newElements[key] = {
          ...newElements[key],
          status: 'exiting',
          exiting: true
        };
      }
    });
    
    setElements(newElements);
    prevChildrenRef.current = currentChildren;
  }, [children, appear]);
  
  // Обработчик завершения анимации
  const handleAnimationComplete = (key, status) => {
    if (status === 'exiting') {
      // Удаляем элемент после завершения анимации
      setElements(prev => {
        const newElements = { ...prev };
        delete newElements[key];
        return newElements;
      });
    } else {
      // Обновляем статус элемента
      setElements(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          status: 'entered'
        }
      }));
    }
  };
  
  // Если нужно сначала удалить, а потом добавить элементы
  if (exitThenEnter) {
    // Сначала рендерим только выходящие элементы
    const exitingElements = Object.entries(elements)
      .filter(([_, info]) => info.exiting)
      .map(([key, info]) => (
        <Fragment key={key}>
          {React.cloneElement(info.element, {
            onAnimationComplete: () => handleAnimationComplete(key, 'exiting')
          })}
        </Fragment>
      ));
    
    // Если есть выходящие элементы, рендерим только их
    if (exitingElements.length > 0) {
      return <>{exitingElements}</>;
    }
    
    // Иначе рендерим входящие и статичные элементы
    return (
      <>
        {Object.entries(elements).map(([key, info]) => (
          <Fragment key={key}>
            {React.cloneElement(info.element, {
              onAnimationComplete: () => handleAnimationComplete(key, info.status)
            })}
          </Fragment>
        ))}
      </>
    );
  }
  
  // Рендерим все элементы одновременно (поведение по умолчанию)
  return (
    <>
      {Object.entries(elements).map(([key, info]) => (
        <Fragment key={key}>
          {React.cloneElement(info.element, {
            onAnimationComplete: () => handleAnimationComplete(key, info.status)
          })}
        </Fragment>
      ))}
    </>
  );
};

// Экспортируем все компоненты вместе
export default {
  FadeIn,
  SlideIn,
  ZoomIn,
  ShrinkOut,
  StaggeredEntrance,
  ExitingPersistence
}; 