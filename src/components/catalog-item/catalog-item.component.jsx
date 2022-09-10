import React from 'react';
import './catalog-item.styles.scss';

const CatalogItem = ({ catalog }) => {
  // destructured catalog objects
  const { title, description, number } = catalog;
  return (
    <div className='catalog-item-container'>
      <h3>{title}</h3>
      <div className='catalog-item-group'>
        <p className='catalog-description'>{description}</p>
        <p>Manufucturer M12312 PartNumber:
          <span className='catalog-number'>{number}</span>
        </p>
        <p className='catalog-count'>Found in your catalog and 5 others</p>
      </div>
    </div>  
  );
};

export default CatalogItem;