import React, { useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchValue, handleSearch }) => {
    return (
        <div className="search-bar">
            <input
                placeholder="Search for Events Here"
                className="search-bar-input" 
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    handleSearch(); // Call handleSearch when input value changes
                }}
            />
            <button id="search-bar-btn" onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
