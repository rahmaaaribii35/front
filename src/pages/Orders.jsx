import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../compoenents/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16 bg-white'>
      <div className='text-2xl px-4 md:px-8'>
        <Title text1={'MY'} text2={'ORDERS'} />

        <div className='mt-8 space-y-6'>
          {products.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className='py-4 px-4 md:px-6 border rounded-lg shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-md transition-shadow duration-300 bg-white'
            >
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 md:w-20 rounded-md' src={item.images[0]} alt={item.name} />
                <div>
                  <p className='sm:text-base font-semibold text-gray-800'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg font-medium text-pink-500'>{item.price}{currency}</p>
                    <p className='text-gray-500'>Quantity: 1</p>
                  </div>
                  <p className='mt-2 text-gray-500 text-sm'>
                    Date: <span className='text-gray-400'>25, Jul, 2025</span>
                  </p>
                </div>
              </div>

              <div className='md:w-1/2 flex flex-col md:flex-row md:justify-between gap-3 mt-4 md:mt-0'>
                <div className='flex items-center gap-2'>
                  <span className='w-3 h-3 rounded-full bg-green-500'></span>
                  <p className='text-sm md:text-base text-gray-800'>Ready to ship</p>
                </div>
                <button className='border border-pink-500 text-pink-500 px-4 py-2 text-sm font-medium rounded-sm hover:bg-pink-50 transition'>
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders;
