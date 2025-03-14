import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  searchBoxAnimationConfig, 
  searchIconAnimation, 
  dropdownAnimation, 
  listItemAnimation,
  groupTitleAnimation
} from '../animations/searchBoxAnimations';
import '../global.css';
import '../styles/typography.css';

const SearchBoxItem = ({ id, title, group, index, isSelected, onSelect }) => {
  return (
    <motion.div 
      id={`SearchBox-option-${id}`}
      role="option"
      className="list-box-itemWrapper-a44-13-1-0"
      aria-selected={isSelected}
      variants={listItemAnimation}
      custom={index}
      initial="initial"
      animate="animate"
      whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
    >
      <motion.label 
        className="list-cell-root-0ea-2-2-1 list-cell-p-medium-707-2-2-1"
        tabIndex="0"
        aria-checked={isSelected}
        data-e2e-id={`searchBox-large_item_${id}`}
        onClick={() => onSelect(id, title, group)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="list-cell-wrapper-1a8-2-2-1">
          <div className="list-cell-title-64d-2-2-1">
            <div className="list-cell-highlightMatchRoot-160-2-2-1">{title}</div>
          </div>
        </div>
      </motion.label>
    </motion.div>
  );
};

const GroupTitle = ({ title }) => {
  return (
    <motion.div 
      className="sb-groupTitle-f35-18-2-0 sb-sticky-4b3-18-2-0"
      title={title}
      variants={groupTitleAnimation}
      initial="initial"
      animate="animate"
    >
      <span className="sb-groupTitleInner-644-18-2-0">{title}</span>
    </motion.div>
  );
};

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Группы результатов поиска
  const searchGroups = [
    {
      id: 1,
      title: 'Вид из окна',
      items: [
        { id: 'variant1.1', title: 'Любой' },
        { id: 'variant1.2', title: 'Двор' },
        { id: 'variant1.3', title: 'Парк' },
        { id: 'variant1.4', title: 'Лес' },
      ]
    },
    {
      id: 2,
      title: 'Материал стен',
      items: [
        { id: 'variant2.1', title: 'Монолитный' },
      ]
    }
  ];

  const handleInputFocus = () => {
    // Отключаем установку фокуса
    // setIsFocused(true);
    setIsDropdownOpen(true);
  };

  const handleInputBlur = () => {
    // Отключаем сброс фокуса
    // setIsFocused(false);
    // Не закрываем выпадающее меню сразу, чтобы пользователь мог кликнуть по результатам
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleItemSelect = (id, title, group) => {
    setSelectedItem({ id, title, group });
    setSearchValue(title);
    setIsDropdownOpen(false);
  };

  // Закрытие выпадающего меню при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="_Gq5_ ql7Up" data-e2e-id="search-box-large">
      <div className="BM21n">
        <div className="" style={{ marginBottom: '0px' }}>
          <div>
            <div className="sb-root-35c-18-2-0 sb-fluid-a43-18-2-0" data-e2e-id="searchBox-large">
              <div className="ppr-container-ab9-12-2-0">
                <div className="sb-inputWrapper-434-18-2-0">
                  <div className="inpt-fluid-199-12-3-0">
                    <motion.div 
                      className={`inpt-root-670-12-3-0 inpt-large-258-12-3-0 inpt-primary-8dd-12-3-0 ${
                        isFocused ? 'inpt-focus-d5a-12-3-0' : ''
                      } inpt-withLeftSection-401-12-3-0 inpt-fluid-199-12-3-0 inpt-hasLabel-14b-12-3-0`}
                      data-e2e-id="searchBox-large_input"
                      animate={{ 
                        borderColor: isFocused ? '#4a6cf7' : '#e0e0e0',
                        boxShadow: isFocused ? '0 0 0 2px rgba(74, 108, 247, 0.2)' : 'none'
                      }}
                      transition={searchBoxAnimationConfig}
                    >
                      <motion.div 
                        role="presentation" 
                        className="inpt-leftSection-9c1-12-3-0" 
                        data-e2e-id="searchBox-large_input__left-section"
                        animate={isFocused ? "focus" : "initial"}
                        variants={searchIconAnimation}
                      >
                        <div className="icon-root-864-6-0-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                            <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                              <path d="M8.789 8.787a.733.733 0 0 1 1.037-.004l1.322 1.314a1.834 1.834 0 0 1 2.252.262l1.391 1.382a1.833 1.833 0 0 1 0 2.601l-.466.463c-.715.71-1.87.71-2.584 0l-1.391-1.381a1.834 1.834 0 0 1-.247-2.298l-1.31-1.302a.733.733 0 0 1-.004-1.037Zm2.595 3.076a.367.367 0 0 0 0 .52l1.39 1.382a.367.367 0 0 0 .517 0l.467-.463a.367.367 0 0 0 0-.52L12.367 11.4a.367.367 0 0 0-.517 0l-.466.463Z" />
                              <path d="M5.714 2.129a3.58 3.58 0 1 0 0 7.16 3.58 3.58 0 0 0 0-7.16ZM.667 5.709a5.047 5.047 0 1 1 10.094 0 5.047 5.047 0 0 1-10.094 0Z" />
                            </g>
                          </svg>
                        </div>
                      </motion.div>
                      <div className="inpt-inputContainer-d7e-12-3-0">
                        <input 
                          id="searchbox-large" 
                          className="inpt-input-3c4-12-3-0" 
                          autoComplete="off"
                          tabIndex="0"
                          aria-activedescendant="SearchBox"
                          value={searchValue}
                          onChange={handleInputChange}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          ref={inputRef}
                        />
                        <motion.label 
                          htmlFor="searchbox-large" 
                          className="inpt-label-a7f-12-3-0"
                          animate={{ 
                            top: isFocused || searchValue ? '8px' : '50%',
                            fontSize: isFocused || searchValue ? '12px' : '16px',
                            color: isFocused ? '#4a6cf7' : searchValue ? '#333' : '#757575'
                          }}
                          transition={searchBoxAnimationConfig}
                        >
                          Поиск<span className="inpt-required-b1a-12-3-0">*</span>
                        </motion.label>
                      </div>
                      <AnimatePresence>
                        {searchValue && (
                          <motion.div 
                            className="inpt-clearIconWrapper-19d-12-3-0"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => {
                              setSearchValue('');
                              inputRef.current.focus();
                            }}
                          >
                            <div className="icon-root-864-6-0-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                <path 
                                  fill="currentColor" 
                                  fillRule="evenodd" 
                                  d="M3.244 3.244a.833.833 0 0 1 1.179 0l8.333 8.333a.833.833 0 1 1-1.179 1.179L3.244 4.423a.833.833 0 0 1 0-1.179Z" 
                                  clipRule="evenodd"
                                />
                                <path 
                                  fill="currentColor" 
                                  fillRule="evenodd" 
                                  d="M12.756 3.244a.833.833 0 0 1 0 1.179l-8.333 8.333a.833.833 0 1 1-1.179-1.179l8.333-8.333a.833.833 0 0 1 1.179 0Z" 
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div 
                      className="ppr-root-43f-12-2-0 ppr-shadow-small-9f9-12-2-0" 
                      style={{ 
                        maxHeight: '400px', 
                        borderRadius: '8px', 
                        width: '380px', 
                        position: 'absolute', 
                        inset: '60px auto auto 0px'
                      }}
                      variants={dropdownAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      ref={dropdownRef}
                    >
                      <div className="sb-content-b24-18-2-0">
                        <div className="sb-listItems-e56-18-2-0">
                          <div role="listbox">
                            {searchGroups.map((group) => (
                              <React.Fragment key={group.id}>
                                <GroupTitle title={group.title} />
                                {group.items.map((item, index) => (
                                  <SearchBoxItem 
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    group={group.title}
                                    index={index}
                                    isSelected={selectedItem?.id === item.id}
                                    onSelect={handleItemSelect}
                                  />
                                ))}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div 
            className="frfl-message-0d5-7-0-3 frfl-message--info-6ff-7-0-3" 
            style={{ marginTop: '4px' }}
          >
            Подсказка
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox; 