import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-sm md:text-base text-gray-700'>

      <div>
        <img src={assets.exchangeIcon} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold text-pink-600'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer a hassle-free exchange policy for all our products.</p>
      </div>

      <div>
        <img src={assets.qualityIcon} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold text-pink-600'>2 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>

      <div>
        <img src={assets.supportIcon} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold text-pink-600'>Best customer support</p>
        <p className='text-gray-400'>We provide 24/7 customer support.</p>
      </div>
    </div>
  )
}

export default OurPolicy
