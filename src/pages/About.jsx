import React from 'react'
import Title from '../compoenents/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../compoenents/NewsletterBox';

const About = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-20 py-16 bg-gradient-to-b from-white to-pink-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <Title text1={'ABOUT'} text2={'OUR STORE'} />
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We are more than just a beauty store — we’re the first local platform 
          bringing <span className="text-pink-500 font-medium"> Sheglam </span> 
          products straight to Tunisia. 
        </p>
      </div>

      {/* Story */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <img 
          src={assets.aboutIcon} 
          alt="About our brand" 
          className="w-full md:max-w-[420px] rounded-xl shadow-md"
        />
        <div className="flex flex-col gap-5 text-gray-700">
          <h3 className="text-2xl font-semibold text-gray-900">
            Who We Are
          </h3>
          <p>
            Our website was created to make trendy, high-quality, and affordable 
            beauty accessible to everyone in Tunisia. No long waits, no high 
            international shipping costs — just authentic Sheglam products, 
            delivered locally.
          </p>
          <p>
            We believe that beauty should feel <span className="text-pink-500 font-medium">
            modern, inclusive, and fun</span>. That’s why we carefully select 
            every product to fit the needs of our community, from bold looks 
            to everyday essentials.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-16">
        <Title text1={'OUR'} text2={'VALUES'} />
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white border border-pink-100 px-8 py-10 rounded-2xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-pink-600 mb-3">Authenticity</h4>
            <p className="text-gray-600">
              100% original Sheglam products imported directly, so you never have 
              to worry about fakes.
            </p>
          </div>
          <div className="bg-white border border-pink-100 px-8 py-10 rounded-2xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-pink-600 mb-3">Accessibility</h4>
            <p className="text-gray-600">
              We believe everyone deserves glam — that’s why our products stay 
              affordable without compromising quality.
            </p>
          </div>
          <div className="bg-white border border-pink-100 px-8 py-10 rounded-2xl shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-pink-600 mb-3">Community</h4>
            <p className="text-gray-600">
              Built for Tunisian beauty lovers, we’re here to share trends, tips, 
              and a space where glam feels local.
            </p>
          </div>
        </div>
        <br></br><br></br>
        <NewsletterBox/>
      </div>
      
    </section>
  )
}

export default About
