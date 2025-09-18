import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch, setSearch } = useContext(ShopContext);

  // Handle clicking the search icon in navbar
  const handleToggleSearch = () => {
    if (showSearch) {
      // If search bar is visible, hide it and clear input
      setSearch('');
      setShowSearch(false);
    } else {
      // Otherwise, just show it
      setShowSearch(true);
    }
  };

  return (
    <div className='flex items-center justify-between py-5 font-medium relative'>

      {/* logo */}
      <img src={assets.logo} className="w-[150px] h-auto ml-[30px]" alt="logo" />

      {/* menus */}
      <ul className='flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to="/collection" className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to="/about" className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to="/contact" className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

      {/* search & profile */}
      <div className='flex items-center gap-6'>
        {/* search icon */}
        <img
          onClick={handleToggleSearch}
          src={assets.searchIcon}
          className='w-12 cursor-pointer'
          alt="search icon"
        />

        {/* profile icon */}
        <div className='group relative'>
          <img className='w-10 cursor-pointer' src={assets.profileIcon} alt="profile icon" />
          {/* dropdown */}
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        {/* cart icon */}
        <Link to='/cart' className='relative'>
          <img className='w-8 min-w-2' src={assets.cartIcon} alt="cart icon" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menuIcon}
          className='w-5 cursor-pointer sm:hidden'
          alt="menu icon"
        />
      </div>

      {/* sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={assets.dropdownIcon} className='h-4 rotate-180' alt="dropdown icon"/>
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
