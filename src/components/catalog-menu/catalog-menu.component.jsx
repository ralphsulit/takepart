import React from 'react';
import CatalogData from '../../assets/catalog-data.js';
import SearchBox from '../search-box/search-box.component.jsx';
import CatalogItem from '../catalog-item/catalog-item.component';

const catalogItem = () => {
  return (
    <div className='catalog-container'>
      <SearchBox />
      {/* Maps through the array of catalog items */}
      <div className='catalog-body-container'>
        {CatalogData.map((catalog) => (
          <CatalogItem catalog={catalog} />
        ))};
      </div>
    </div>
  );
}

export default catalogItem;