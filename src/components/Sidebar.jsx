import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
  // Используем программную навигацию
  const navigate = useNavigate();
  const location = useLocation();
  
  const components = [
    { path: 'button', name: 'Button' },
    { path: 'accordion', name: 'Accordion' },
    { path: 'tabs', name: 'Tabs' },
    { path: 'cards', name: 'Cards' },
    { path: 'banners', name: 'Banners' },
    { path: 'dropdown-button', name: 'Dropdown Button' },
    { path: 'multiple-button-select', name: 'Multiple Button Select' },
    { path: 'input', name: 'Input' },
    { path: 'checkbox', name: 'Checkbox' },
    { path: 'search-box', name: 'Search Box' },
    { path: 'textarea', name: 'Textarea' }
  ];

  // Обработчик навигации
  const handleNavigation = (path, e) => {
    // Предотвращаем стандартное поведение
    e.preventDefault();
    
    try {
      // Используем navigate с относительным путем
      navigate(`/${path}`);
    } catch (error) {
      console.error("Ошибка навигации через React Router:", error);
    }
  };

  // Функция для определения активности ссылки
  const isActive = (path) => {
    // Для сравнения используем путь без ведущего слеша
    const currentPath = location.pathname.replace(/^\//, '');
    return currentPath === path;
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
                href={`#/${component.path}`}
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
              href="#/tokens"
              className={isActive('tokens') ? 'sidebar-link active sidebar-link-tokens' : 'sidebar-link sidebar-link-tokens'}
              onClick={(e) => handleNavigation('tokens', e)}
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