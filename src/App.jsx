import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './global.css';
import './animations/tokens.css';
import './no-focus.css';
import './no-focus.js';

// Layout
import Layout from './components/Layout';

// Pages
import AccordionPage from './pages/AccordionPage';
import MultipleButtonSelectPage from './pages/MultipleButtonSelectPage';
import BannersPage from './pages/BannersPage';
import CheckboxPage from './pages/CheckboxPage';
import TokensPage from './pages/TokensPage';
import SliderPage from './pages/SliderPage';
import BottomSheetPage from './pages/BottomSheetPage';
import ListCellPage from './pages/ListCellPage';

// Import pages for other components when ready
// import TabsPage from './pages/TabsPage';
// import CardsPage from './pages/CardsPage';
// import DropdownButtonPage from './pages/DropdownButtonPage';
// import InputPage from './pages/InputPage';
// import SearchBoxPage from './pages/SearchBoxPage';
// import TextareaPage from './pages/TextareaPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="accordion" replace />} />
          <Route path="accordion" element={<AccordionPage />} />
          <Route path="multiple-button-select" element={<MultipleButtonSelectPage />} />
          <Route path="banners" element={<BannersPage />} />
          <Route path="checkbox" element={<CheckboxPage />} />
          <Route path="slider" element={<SliderPage />} />
          <Route path="bottom-sheet" element={<BottomSheetPage />} />
          <Route path="list-cell" element={<ListCellPage />} />
          <Route path="tokens" element={<TokensPage />} />
          
          {/* Redirect any unknown paths to home */}
          <Route path="*" element={<Navigate to="accordion" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
