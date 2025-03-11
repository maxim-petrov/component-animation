import { NavLink } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
  const components = [
    { path: '/button', name: 'Button' },
    { path: '/accordion', name: 'Accordion' },
    { path: '/tabs', name: 'Tabs' },
    { path: '/cards', name: 'Cards' },
    { path: '/banners', name: 'Banners' },
    { path: '/dropdown-button', name: 'Dropdown Button' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Анимации</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {components.map((component) => (
            <li key={component.path}>
              <NavLink 
                to={component.path}
                className={({ isActive }) => 
                  isActive ? 'sidebar-link active' : 'sidebar-link'
                }
              >
                {component.name}
              </NavLink>
            </li>
          ))}
          
          {/* Разделитель */}
          <li className="sidebar-divider"></li>
          
          {/* Ссылка на страницу токенов */}
          <li>
            <NavLink 
              to="/tokens"
              className={({ isActive }) => 
                isActive ? 'sidebar-link active sidebar-link-tokens' : 'sidebar-link sidebar-link-tokens'
              }
            >
              Токены анимации
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 