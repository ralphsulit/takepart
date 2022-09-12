import React from 'react';
import './search-box.styles.scss';

const SearchBox = ({onChangeHandler, className}) => {
  return (
    <div className={`searchbox-container`}>
      <input
        type='text'
        className={`search-box ${className}`}
        placeholder='Search'
        onChange={onChangeHandler}
      />
    </div>
  )
};

export default SearchBox;