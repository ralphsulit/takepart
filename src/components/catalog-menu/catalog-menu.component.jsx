import React, { useState } from 'react';
import SearchBox from '../search-box/search-box.component.jsx';
import catalogData from '../../assets/data/catalog-data.json';
import CatalogItem from '../catalog-item/catalog-item.component';

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
    <div className='catalog-container'>
      <SearchBox onChangeHandler={onSearchChange}/>
      {/* Getting the data from CatalogData and Maps through the array of catalog items */}
      <div className='catalog-body-container'>
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
  );
}

export default CatalogMenu;