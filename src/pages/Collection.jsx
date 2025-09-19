import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../compoenents/Title';
import ProductItem from '../compoenents/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]); // lowercase for convention
  const [sortType, setSortType] = useState('relevant');

  // Toggle category selection
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Apply category filter
  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category)); // lowercase 'category'
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };


  // Update products when category changes
  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
        </p>
        <img
          src={assets.dropdownIcon}
          className={`h-4 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
          alt='Filter Icon'
        />

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2 items-center'>
              <input className='w-3' type='checkbox' value='face' onChange={toggleCategory} /> Face
            </label>

            <label className='flex gap-2 items-center'>
              <input className='w-3' type='checkbox' value='lips' onChange={toggleCategory} /> Lips
            </label>

            <label className='flex gap-2 items-center'>
              <input className='w-3' type='checkbox' value='eye' onChange={toggleCategory} /> Eyes
            </label>

            <label className='flex gap-2 items-center'>
              <input className='w-3' type='checkbox' value='hair' onChange={toggleCategory} /> Hair
            </label>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1='ALL' text2='COLLECTIONS' />

          {/* Product sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value='relevant'>Sort by : Relevant</option>
            <option value='low-high'>Sort by : Low to High</option>
            <option value='high-low'>Sort by : High to Low</option>
          </select>
        </div>

        {/* Map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} name={item.name} image={item.images} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
