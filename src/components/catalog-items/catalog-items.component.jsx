import React from 'react';
import catalogData from '../../assets/catalog-data.js';
import SearchBox from '../search-box/search-box.component.jsx';

const catalogItem = () => {
  return (
    <div className='catalog-container'>
      <SearchBox />
      <div className='catalog-body-container'>
        <h3>title</h3>
        <p>details</p>
        <p>Manufucturer M12312 PartNumber:
          <span className='munufucturer-number'>number</span>
        </p>
        <p className='catalog-count'>Found in your catalog and 5 others</p>
      </div>
    </div>
  );
}

export default catalogItem;