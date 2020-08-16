import React, { useState, useEffect } from 'react';
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ON_CLICK_COLOR = 'grey';
const UN_CLICK_COLOR = '#006a71';

const SearchTextBox = ({ className }) => {
  const [iconActive, setIconActive] = useState(false);

  useEffect(() => {
    const mouseUpHandler = () => {
      setIconActive(false);
    };
    window.addEventListener('mouseup', mouseUpHandler);

    return () => {
      window.removeEventListener('mouseup', mouseUpHandler);
    };
  }, []);

  return (
    <div className={`search-input-box ${className && className}`}>
      <input type="text" className="search-text-box" />
      <div className="icon">
        <FontAwesomeIcon
          icon={faSearch}
          color={iconActive ? ON_CLICK_COLOR : UN_CLICK_COLOR}
          className="icon-image"
          onMouseDown={() => {
            if (!iconActive) {
              setIconActive(!iconActive);
            }
          }}
        />
        <div className="speech-cloud">
          <div className="arrow_box">SEARCH</div>
        </div>
      </div>
    </div>
  );
};

export default SearchTextBox;
