import React, { useState } from 'react';
import SearchBox from '../search-box/search-box.component.jsx';
import CheckBoxFilter from '../checkbox-filter/checkbox-filter.component';
import Button from '../button/button.component';
import catalogData from '../../assets/data/catalog-data.json';
import CatalogItem from '../catalog-item/catalog-item.component';
import './catalog-menu.styles.scss';

const CatalogMenu = () => {
  // State variables
  const [searchField, setSearchField] = useState('');

  // Getting the input and assigning it to the searchField state
  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    console.log(searchFieldString)
    setSearchField(searchFieldString);
  }

  return (
    <div className='content-container d-flex justify-content-center'>
      <div className='left-container'>
        <div className='d-flex justify-content-between '>
          <SearchBox onChangeHandler={onSearchChange} className='content-search-box' />
          <Button />
        </div>

        {/* Getting the data from CatalogData and Maps through the array of catalog items */}
        <div className='content-body-container'>
          {/* 
            getting the title property using filter and checks if the value of search bar is similar to the "title" propery in the data and also used the map function to iterate the array of data and get data items.
          */}
          {catalogData && catalogData
            .filter((val) => {
              if (searchField === "") {
                return val
              } else if (val.title.toLowerCase().includes(searchField.toLowerCase())) {
                return val
              }
              return false;
            })
            .map((val) => (
              <CatalogItem key={val.id} catalog={val} />
            ))
          }
        </div>
    </div>

      <div className='right-container'>
        <CheckBoxFilter className={'hp-filter'} />
      </div>

    </div>
  );
}

export default CatalogMenu;