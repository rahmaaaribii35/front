import React from 'react'
import Title from '../compoenents/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../compoenents/NewsletterBox';

const Contact = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-20 py-16 bg-gradient-to-b from-white to-pink-100">
      {/* Title */}
      <div className="text-center mb-12">
        <Title text1={'CONTACT'} text2={'US'} />
        <p className="mt-3 text-gray-600 max-w-xl mx-auto"> Have questions about <span className="text-pink-500 font-medium">GlamTOONES</span>?  We’re always here to help. Reach us instantly on WhatsApp. </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Contact Video */}
        <div className="w-full md:w-1/2">
          <video className="w-full h-full rounded-2xl shadow-lg" src={assets.contactVID} autoPlay loop muted playsInline/>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Our Store</h3>
            <p className="text-gray-600 mt-1">Tunisia, Sousse</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
            <p className="text-gray-600 mt-1">
              WhatsApp:{" "}
              <a href="https://wa.me/145789" target="_blank" rel="noopener noreferrer" className="text-pink-500 font-medium hover:underline">+216 145789</a> 
              <br />
              Email: <span className="font-medium">rahmaaribi35@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <br></br><br></br>
        <NewsletterBox/>
    </section>
  )
}

export default Contact
