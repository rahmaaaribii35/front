import React, { useState } from "react";
import { assets } from "../assets/assets";

const Carousel = () => {
  const images = [assets.Carousel1, assets.Carousel2];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-2xl border border-pink-300 bg-pink-50 shadow-md">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Navigation buttons - black text, no background */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-4xl font-bold px-2 py-1 hover:opacity-70 transition-opacity"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-4xl font-bold px-2 py-1 hover:opacity-70 transition-opacity"
      >
        &#10095;
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-pink-600" : "bg-pink-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
