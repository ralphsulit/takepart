import React from 'react';

const SearchBox = ({onChangeHandler}) => {
  return (
    <input
      type='search'
      className='search-box'
      placeholder='Search'
      onChange={onChangeHandler}
    />
  )
};

export default SearchBox;