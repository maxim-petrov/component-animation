import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './global.css';
import './animations/tokens.css';
import './no-focus.css';
import './no-focus.js';

// Layout
import Layout from './components/Layout';
import Home from './components/Home';

// Pages
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import MultipleButtonSelectPage from './pages/MultipleButtonSelectPage';
import TabsPage from './pages/TabsPage';
import CardsPage from './pages/CardsPage';
import BannersPage from './pages/BannersPage';
import DropdownButtonPage from './pages/DropdownButtonPage';
import InputPage from './pages/InputPage';
import CheckboxPage from './pages/CheckboxPage';
import SearchBoxPage from './pages/SearchBoxPage';
import TextareaPage from './pages/TextareaPage';
import TokensPage from './pages/TokensPage';

// Import pages for other components when ready
// import TabsPage from './pages/TabsPage';
// import CardsPage from './pages/CardsPage';
// import BannersPage from './pages/BannersPage';
// import DropdownButtonPage from './pages/DropdownButtonPage';
// import InputPage from './pages/InputPage';
// import CheckboxPage from './pages/CheckboxPage';
// import SearchBoxPage from './pages/SearchBoxPage';
// import TextareaPage from './pages/TextareaPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="button" element={<ButtonPage />} />
          <Route path="accordion" element={<AccordionPage />} />
          <Route path="multiple-button-select" element={<MultipleButtonSelectPage />} />
          <Route path="tabs" element={<TabsPage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="banners" element={<BannersPage />} />
          <Route path="dropdown-button" element={<DropdownButtonPage />} />
          <Route path="input" element={<InputPage />} />
          <Route path="checkbox" element={<CheckboxPage />} />
          <Route path="search-box" element={<SearchBoxPage />} />
          <Route path="textarea" element={<TextareaPage />} />
          <Route path="tokens" element={<TokensPage />} />
          
          {/* Redirect any unknown paths to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
