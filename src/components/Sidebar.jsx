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
    { path: '/input', name: 'Input' },
    { path: '/checkbox', name: 'Checkbox' },
    { path: '/search-box', name: 'Search Box' },
    { path: '/textarea', name: 'Textarea' },
    { path: '/multiple-button-select', name: 'Multiple Button Select' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Components</h2>
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
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 