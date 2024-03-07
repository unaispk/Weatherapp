import React, { useState } from 'react'
import './Search.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Search = ({ onSearch }) => {

    const [location, setLocation] = useState('');

    const handleSearch = () => {
        onSearch(location);

        console.log("location", location);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') { handleSearch() }
    }

    return (
        <div className="search-bar-container">
            <input
                type="text" placeholder="Enter location" value={location}
                onChange={(e) => setLocation(e.target.value)} className="search-bar-input" onKeyDown={handleKeyDown}
            />
            <button className="search-bar-button" onKeyDown={handleKeyDown} onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}

export default Search
