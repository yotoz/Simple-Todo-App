import React from 'react';
import './styles.scss';

import SearchTextBox from '../Input/SearchTextBox';

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">Simple Todo App</div>
      <SearchTextBox className="header-search-text-box" />
    </div>
  );
};

export default Header;
