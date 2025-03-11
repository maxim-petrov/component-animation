import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
  // Используем программную навигацию
  const navigate = useNavigate();
  const location = useLocation();
  
  const components = [
    { path: '/button', name: 'Button' },
    { path: '/accordion', name: 'Accordion' },
    { path: '/tabs', name: 'Tabs' },
    { path: '/cards', name: 'Cards' },
    { path: '/banners', name: 'Banners' },
    { path: '/dropdown-button', name: 'Dropdown Button' },
  ];

  // Обработчик навигации с аварийным вариантом
  const handleNavigation = (path, e) => {
    // Предотвращаем стандартное поведение
    e.preventDefault();
    
    // Проверяем, находимся ли мы на странице с табами
    const isOnTabsPage = location.pathname === '/tabs';
    
    try {
      // Если мы на странице с табами, используем более принудительный подход
      if (isOnTabsPage) {
        // Принудительно меняем URL
        window.location.href = path;
      } else {
        // Используем стандартный React Router API
        navigate(path);
      }
    } catch (error) {
      console.error("Ошибка навигации через React Router:", error);
      // В случае ошибки, используем принудительную навигацию
      window.location.href = path;
    }
  };

  // Функция для определения активности ссылки
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Анимации</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {components.map((component) => (
            <li key={component.path}>
              <a 
                href={component.path}
                className={isActive(component.path) ? 'sidebar-link active' : 'sidebar-link'}
                onClick={(e) => handleNavigation(component.path, e)}
              >
                {component.name}
              </a>
            </li>
          ))}
          
          {/* Разделитель */}
          <li className="sidebar-divider"></li>
          
          {/* Ссылка на страницу токенов */}
          <li>
            <a 
              href="/tokens"
              className={isActive('/tokens') ? 'sidebar-link active sidebar-link-tokens' : 'sidebar-link sidebar-link-tokens'}
              onClick={(e) => handleNavigation('/tokens', e)}
            >
              Токены анимации
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 