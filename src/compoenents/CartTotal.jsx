import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../compoenents/Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCarAmount } = useContext(ShopContext);

  return (
    <div className='w-full bg-white shadow-md rounded-xl p-6'>
      <Title text1={'CART'} text2={'CART'} />

      <div className='mt-6 space-y-4 text-gray-700'>
        <div className='flex justify-between'>
          <span className='text-pink-500 font-medium'>Subtotal</span>
          <span className='font-medium'>{getCarAmount()}.00 {currency}</span>
        </div>

        <div className='flex justify-between'>
          <span className='text-pink-500 font-medium'>Shipping Fee</span>
          <span className='font-medium'>{delivery_fee}.00 {currency}</span>
        </div>

        <hr className='border-gray-300' />

        <div className='flex justify-between text-lg font-semibold'>
          <span>Total</span>
          <span>{getCarAmount() === 0 ? 0 : getCarAmount() + delivery_fee} {currency}</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
