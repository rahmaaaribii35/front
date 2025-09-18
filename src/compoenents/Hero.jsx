import React from 'react';
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-pink-300 bg-pink-50 rounded-2xl shadow-md overflow-hidden">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 px-6 sm:px-12">
        <div className="text-[#414141] space-y-4">
          {/* small label */}
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-pink-500"></p>
            <p className="font-medium text-sm md:text-base tracking-wide uppercase text-pink-600">
              Our Bestsellers
            </p>
          </div>

          {/* main headline */}
          <h1 className="prata-regular text-3xl lg:text-5xl font-bold leading-snug text-gray-800">
            Latest Arrivals
          </h1>

          {/* subheading */}
          <h6 className="text-base font-semibold text-pink-600 tracking-wide">
            NEW PRODUCT DROP ✨
          </h6>

          {/* product name */}
          <h5 className="text-lg sm:text-xl font-semibold uppercase text-gray-800">
            Bounce Putty Pocket Lip Pot
          </h5>

          {/* emoji highlight */}
          <h1 className="text-2xl sm:text-3xl">🫦</h1>

          {/* description */}
          <h4 className="text-sm sm:text-base text-pink-700 max-w-md leading-relaxed">
            We’ve got fresh lippies for you — ready to blur your pout with a squishy, built-in brush.
          </h4>

          {/* CTA */}
          <div className="flex items-center gap-3 pt-4 cursor-pointer text-pink-600 hover:text-pink-700">
            <p className="font-semibold text-base hover:underline">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-pink-500"></p>
          </div>
        </div>
      </div>

      {/* Hero right side - cropped video */}
      <div className="w-full sm:w-1/2 h-[500px] sm:h-[600px] overflow-hidden">
        <video
          className="w-full h-full object-cover object-center"
          src={assets.heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default Hero;
