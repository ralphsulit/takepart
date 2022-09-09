import React from 'react';
import catalogData from '../../assets/catalog-data.js';
import SearchBox from '../search-box/search-box.component.jsx';
import CatalogItem from '../catalog-item/catalog-item.component';

const catalogItem = () => {
  return (
    <div className='catalog-container'>
      <SearchBox />
      <div className='catalog-body-container'>
        {catalogData.map((catalog) => (
          <CatalogItem catalog={catalog} />
        ))};
      </div>
    </div>
  );
}

export default catalogItem;