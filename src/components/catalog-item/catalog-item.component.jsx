import React from 'react';

const CatalogItem = ({ catalog }) => {
  // destructured catalog objects
  const { title, description, number } = catalog;
  return (
    <div className='catalog-item'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Manufucturer M12312 PartNumber:
        <span className='munufucturer-number'>{number}</span>
      </p>
      <p className='catalog-count'>Found in your catalog and 5 others</p>
    </div>  
  );
};

export default CatalogItem;