import React, { useState } from "react";
import { assets } from "../assets/assets";

const Header = () => {
  const images = [assets.Carousel1, assets.Carousel2];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-xl">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Navigation buttons: transparent background, black arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-black text-4xl font-bold"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-4xl font-bold"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Header;
