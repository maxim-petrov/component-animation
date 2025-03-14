import '../App.css';
import AppLink from './AppLink';
import '../styles/typography.css';

const Sidebar = () => {
  // Все компоненты в одном массиве для удобного управления
  const components = [
    { path: 'button', name: 'Button' },
    { path: 'accordion', name: 'Accordion' },
    { path: 'tabs', name: 'Tabs' },
    { path: 'cards', name: 'Cards' },
    { path: 'banners', name: 'Banners' },
    { path: 'dropdown-button', name: 'Dropdown Button' },
    { path: 'slider', name: 'Slider' },
    { path: 'bottom-sheet', name: 'Bottom Sheet' },
    { path: 'list-cell', name: 'List Cell' }
    // Временно скрытые компоненты
    // { path: 'multiple-button-select', name: 'Multiple Button Select' },
    // { path: 'input', name: 'Input' },
    // { path: 'checkbox', name: 'Checkbox' },
    // { path: 'search-box', name: 'Search Box' },
    // { path: 'textarea', name: 'Textarea' }
  ];

  // Специальные разделы (например, токены)
  const specialSections = [
    { path: 'tokens', name: 'Токены анимации', className: 'sidebar-link-tokens' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Анимации</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {/* Основные компоненты */}
          {components.map((component) => (
            <li key={component.path}>
              <AppLink 
                to={component.path}
                className="sidebar-link"
                exact
              >
                {component.name}
              </AppLink>
            </li>
          ))}
          
          {/* Разделитель */}
          <li className="sidebar-divider"></li>
          
          {/* Специальные разделы */}
          {specialSections.map((section) => (
            <li key={section.path}>
              <AppLink 
                to={section.path}
                className={`sidebar-link ${section.className}`}
                exact
              >
                {section.name}
              </AppLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 