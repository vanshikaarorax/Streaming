import React, { useState,ChangeEvent } from 'react';
import { IoSearch } from "react-icons/io5";

const Search: React.FC = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
  
    const toggleSearch = () => {
      setSearchOpen(!searchOpen);
    };
  
    
  
    return (
      <div className="search-container">
        <button className="search-button" onClick={toggleSearch}>
          <i className="fas fa-search" > <IoSearch /></i>
        </button>
        {searchOpen && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
             
            />
            <button className="close-button" onClick={toggleSearch}>
            <i className="fas fa-search" > <IoSearch /></i>
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default Search;