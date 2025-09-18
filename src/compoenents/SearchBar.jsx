import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from "../assets/assets";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Show search bar only on collection page
  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location.pathname]);

  if (!showSearch || !visible) return null;

  // Clear only the input text
  const handleClear = () => {
    setSearch('');
  };

  return (
    <div className="bg-gray-50 py-6 px-4 sm:px-0">
      <div className="relative mx-auto w-full max-w-md">
        <div className="flex items-center bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 px-4 py-2 focus-within:ring-2 focus-within:ring-pink-500">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 text-sm sm:text-base outline-none px-2 py-1 placeholder-gray-400"
            type="text"
            placeholder="Search products..."
          />
          <img
            src={assets.searchIcon}
            alt="Search"
            className="w-10 h-10 text-pink-500 ml-2"
          />
          <img
            onClick={handleClear} // Only clear input
            src={assets.crossIcon}
            alt="Clear input"
            className="w-8 h-8 ml-3 cursor-pointer hover:text-pink-500 transition-colors duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
