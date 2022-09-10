import React from 'react';
import './search-box.styles.scss';

const SearchBox = ({onChangeHandler}) => {
  return (
    <div className='searchbox-container'>
      <input
        type='text'
        className='search-box'
        placeholder='Search'
        onChange={onChangeHandler}
      />
    </div>
  )
};

export default SearchBox;