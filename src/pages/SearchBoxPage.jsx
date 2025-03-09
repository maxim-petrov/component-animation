import { motion } from 'framer-motion';
import SearchBox from '../components/SearchBox';

const SearchBoxPage = () => {
  return (
    <motion.div 
      className="component-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Search Box</h1>
      <div className="component-demo">
        <SearchBox />
      </div>
      <div className="component-description">
        <h2>Описание</h2>
        <p>
          Компонент поисковой строки (SearchBox) с выпадающим списком результатов.
          Поддерживает группировку результатов, подсветку выбранного элемента и 
          фильтрацию в реальном времени.
        </p>
        <h3>Особенности</h3>
        <ul>
          <li>Анимация выпадающего списка</li>
          <li>Группировка результатов поиска</li>
          <li>Выделение текущего выбора</li>
          <li>Фильтрация при вводе</li>
          <li>Отслеживание клика вне компонента</li>
          <li>Икона поиска в поле ввода</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SearchBoxPage; 