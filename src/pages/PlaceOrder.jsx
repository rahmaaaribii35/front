import React, { useContext, useState } from 'react';
import Title from '../compoenents/Title';
import CartTotal from '../compoenents/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');

  const{navigate}=useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-6 pt-5 sm:pt-14 min-h-[80vh] border-t border-pink-200'>

      {/*-------------- Left side: Delivery Information --------------*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3 text-pink-600'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input className='border border-pink-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400' type='text' placeholder='First name' />
          <input className='border border-pink-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400' type='text' placeholder='Last name' />
        </div>

        <input className='border border-pink-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400' type='email' placeholder='Email address' />
        <input className='border border-pink-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400' type='text' placeholder='Street' />

        <div className='flex gap-3'>
          <input className='border border-pink-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400' type='text' placeholder='City' />
          <input className='border border-pink-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400' type='text' placeholder='State' />
        </div>

        <div className='flex gap-3'>
          <input className='border border-pink-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400' type='number' placeholder='Zipcode' />
          <input className='border border-pink-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400' type='text' placeholder='Country' />
        </div>

        <input className='border border-pink-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400' type='number' placeholder='Phone number' />
      </div>

      {/*-------------- Right side: Payment --------------*/}
      <div className='mt-8 w-full sm:max-w-[480px]'>

        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          <div className='flex gap-3 flex-col lg:flex-row mt-4'>
            {/* Visa */}
            <div
              onClick={() => setMethod('visa')}
              className={`flex items-center justify-center gap-3 border p-7 cursor-pointer rounded-lg transition-all
              ${method === 'visa' ? 'border-green-400' : 'border-pink-300'}`}
            >
              <img className='h-6' src={assets.visaIcon} alt='visa' />
              <span className={`text-sm font-medium ${method === 'visa' ? 'text-green-400' : 'text-pink-600'}`}>
                VISA
              </span>
            </div>

            {/* Credit Card */}
            <div
              onClick={() => setMethod('credit card')}
              className={`flex items-center justify-center gap-3 border p-4 cursor-pointer rounded-lg transition-all
              ${method === 'credit card' ? 'border-green-400' : 'border-pink-300'}`}
            >
              <img className='h-6' src={assets.creditcartIcon} alt='credit cart' />
              <span className={`text-sm font-medium ${method === 'credit card' ? 'text-green-400' : 'text-pink-600'}`}>
                CREDIT CARD
              </span>
            </div>

            {/* PayPal */}
            <div
              onClick={() => setMethod('paypal')}
              className={`flex items-center justify-center gap-3 border p-9 cursor-pointer rounded-lg transition-all
              ${method === 'paypal' ? 'border-green-400' : 'border-pink-300'}`}
            >
              <img className='h-6' src={assets.paypallIcon} alt='PayPal' />
              <span className={`text-sm font-medium ${method === 'paypal' ? 'text-green-400' : 'text-pink-600'}`}>
                PAYPAL
              </span>
            </div>

            {/* Cash on Delivery */}
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center justify-center gap-3 border p-4 cursor-pointer rounded-lg transition-all
              ${method === 'cod' ? 'border-green-400' : 'border-pink-300'}`}
            >
              <span className={`text-sm font-medium ${method === 'cod' ? 'text-green-400' : 'text-pink-600'}`}>
                CASH ON DELIVERY
              </span>
            </div>
          </div>


          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-pink-500 hover:bg-pink-600 text-white px-16 py-3 text-sm rounded-lg transition-colors'>
              PLACE ORDER ({method.toUpperCase()})
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PlaceOrder;
