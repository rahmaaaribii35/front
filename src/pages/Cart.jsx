import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../compoenents/Title';
import { assets } from '../assets/assets';
import CartTotal from '../compoenents/CartTotal';
import { toast } from 'react-toastify';

const Cart = () => {
  const { products, cartItems, currency, updateQuantity ,navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({ _id: items, size: item, quantity: cartItems[items][item] });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='pt-14 px-4 sm:px-10 bg-gray-50 min-h-screen'>
      <Title text1={'YOUR'} text2={'CART'} className='text-2xl mb-6 text-pink-500' />

      <div className='space-y-4'>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === Number(item._id));
          if (!productData || !productData.images) return null;

          return (
            <div
              key={index}
              className='flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 p-4 bg-white shadow-sm rounded-lg'
            >
              <div className='flex items-center gap-4 sm:gap-6 w-full sm:w-3/4'>
                <img className='w-16 sm:w-20 rounded-lg' src={productData.images[0]} alt={productData.name} />
                <div>
                  <p className='text-sm sm:text-lg font-medium text-pink-500'>{productData.name}</p>
                  <p className='mt-1 text-gray-600 font-semibold'>{productData.price}{currency}</p>
                </div>
              </div>

              <div className='flex items-center gap-3 mt-2 sm:mt-0'>
                <input
                  type='number'
                  min={1}
                  defaultValue={item.quantity}
                  className='w-16 border border-gray-300 rounded-md px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-pink-300'
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                />
                <img
                  onClick={() => {
                    updateQuantity(item._id, item.size, 0);
                    toast.error(
                      `${products.find(p => p._id === Number(item._id))?.name} removed from cart!`,
                      { autoClose: 2000 }
                    );
                  }}
                  className='w-5 sm:w-6 cursor-pointer'
                  src={assets.binIcon}
                  alt='Remove'
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex justify-end mt-10'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <button onClick={()=>navigate('/place-order')} className='w-full bg-pink-500 text-white py-3 mt-6 rounded-lg font-medium hover:bg-pink-600 transition'>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
