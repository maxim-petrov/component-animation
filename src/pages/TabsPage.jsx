import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import Tabs from '../components/Tabs';

// Компонент для восстановления навигации
const NavigationFixer = () => {
  useEffect(() => {
    // Найти все ссылки и сделать их работоспособными
    const makeLinksWorkAgain = () => {
      document.querySelectorAll('a[href]').forEach(link => {
        // Если ссылка уже имеет обработчик, не добавляем новый
        if (!link.__navigationFixed) {
          const originalHref = link.href;
          
          // Добавляем прямую навигацию при клике
          link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = originalHref;
          }, true);
          
          // Отмечаем ссылку как исправленную
          link.__navigationFixed = true;
        }
      });
    };
    
    // Исправляем навигацию сразу и с небольшой задержкой для динамически добавленных элементов
    makeLinksWorkAgain();
    const interval = setInterval(makeLinksWorkAgain, 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return null;
};

const TabsPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Добавляем компонент для исправления навигации */}
      <NavigationFixer />
      
      <h1>Tabs</h1>
      <div className="component-demo">
        <div className="component-demo-inner">
          <Tabs />
        </div>
      </div>
      <div className="component-description">
        <h2 style={{ color: "#333" }}>Токены</h2>
        <p style={{ color: "#333" }}>
          Компонент вкладок использует следующие токены анимации:
        </p>
        <h3 style={{ color: "#333" }}>Анимация контента вкладок</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.M</code> - средняя длительность (250ms)</li>
          <li><code>Easing.entrance</code> - кривая для плавного появления</li>
          <li><code>Easing.exit</code> - кривая для плавного исчезновения</li>
          <li>Анимация изменения прозрачности при переключении вкладок</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация кнопок прокрутки</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая ускорения</li>
          <li>Масштабирование при наведении и нажатии</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация кнопок вкладок</h3>
        <ul style={{ color: "#333" }}>
          <li><code>Duration.XS</code> - сверхкороткая длительность (100ms)</li>
          <li><code>Easing.standard</code> - стандартная кривая ускорения</li>
          <li>Без масштабирования при наведении и нажатии</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Анимация активной линии</h3>
        <ul style={{ color: "#333" }}>
          <li><code>type: "spring"</code> - пружинная анимация для естественного движения</li>
          <li>Адаптивная длительность анимации в зависимости от расстояния:</li>
          <ul>
            <li>Базовая длительность: 250ms для соседних табов</li>
            <li>Максимальная длительность: 500ms для удаленных табов</li>
            <li>Использование логарифмической шкалы для равномерного восприятия</li>
          </ul>
          <li>Динамическая подстройка параметров пружины:</li>
          <ul>
            <li><code>stiffness: 200-400</code> - уменьшается с увеличением расстояния</li>
            <li><code>damping: 25-40</code> - увеличивается с увеличением расстояния</li>
          </ul>
          <li>Линия плавно перемещается под активным табом при переключении</li>
          <li>Высота линии: 2px, цвет соответствует основному цвету приложения</li>
        </ul>
        
        <h3 style={{ color: "#333" }}>Тип анимации</h3>
        <p style={{ color: "#333" }}>
          Структурная анимация - помогает понять изменения в интерфейсе при переключении вкладок.
        </p>
      </div>
    </motion.div>
  );
};

export default TabsPage; 