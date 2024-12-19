// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ searchTerm, setSearchTerm }) => {
    return (
        <header>
            <div className="logo">📚 Online Bookstore Platform</div>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search for books..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                />
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
