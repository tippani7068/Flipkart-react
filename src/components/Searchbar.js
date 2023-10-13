import React from 'react';
const Searchbar = ({ handleSearch }) => {
  return ( 
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <i className="fa fa-search"></i>
    </div>
  );
};

export default Searchbar;