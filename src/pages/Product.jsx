import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../compoenents/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency , addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size,setSize]=useState('')

  const fetchProductData = () => {
    products.forEach((item) => {
      if (item._id === Number(productId)) {
        setProductData(item);
        setImage(item.images[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

      {/* Product Display Section */}
      <div className='flex flex-col sm:flex-row gap-12 sm:gap-16'>

        {/* Images / Videos */}
        <div className='flex-1 flex flex-col-reverse sm:flex-row gap-4 sm:gap-8'>

          {/* Thumbnails */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-start sm:w-[20%] gap-2'>
            {productData.images.map((item, index) => {
              const isVideo = item.endsWith('.mp4');
              const isSelected = item === image;

              return isVideo ? (
                <video
                  key={index}
                  onClick={() => setImage(item)}
                  className={`w-[24%] sm:w-full sm:mb-3 h-24 sm:h-24 flex-shrink-0 cursor-pointer border rounded-lg hover:scale-105 transition-transform ${isSelected ? 'border-pink-600' : ''}`}
                  src={item}
                  muted
                  loop
                />
              ) : (
                <img
                  key={index}
                  onClick={() => setImage(item)}
                  src={item}
                  alt={productData.name}
                  className={`w-[24%] sm:w-full sm:mb-3 h-24 sm:h-24 flex-shrink-0 cursor-pointer border rounded-lg hover:scale-105 transition-transform ${isSelected ? 'border-pink-600' : ''}`}
                />
              );
            })}
          </div>

          {/* Main Display */}
          <div className='w-full sm:w-[80%] border rounded-xl overflow-hidden shadow-lg h-150 sm:h-150'>
            {image.endsWith('.mp4') ? (
              <video
                src={image}
                autoPlay
                loop
                muted
                controls
                className='w-full h-full object-cover'
              />
            ) : (
              <img
                src={image}
                alt={productData.name}
                className='w-full h-full object-cover'
              />
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1 flex flex-col gap-4'>
          <h1 className='font-bold text-3xl sm:text-4xl text-gray-900'>{productData.name}</h1>

          <div className='flex gap-1'>
            {[...Array(5)].map((_, i) => (
              <img src={assets.starIcon} key={i} className='w-5 h-5' alt="star" />
            ))}
          </div>

          <p className='text-3xl sm:text-4xl font-semibold text-pink-600 mt-3'>
            {productData.price} {currency}
          </p>

          <p className='text-gray-600 mt-4 md:w-4/5 leading-relaxed'>{productData.description}</p>

          <button onClick={()=>addToCart(productData._id,size)} className='bg-pink-600 text-white px-8 py-3 mt-6 rounded-md hover:bg-pink-700 transition'>
            ADD TO CART
          </button>

          <div className='mt-6 border-t pt-4 text-sm text-gray-500 flex flex-col gap-2'>
            <p>✅ 100% Original product.</p>
            <p>✅ Cash on delivery is available on this product.</p>
            <p>✅ Affordable Prices & Local Availability.</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className='mt-20'>
        <div className='border-b w-max'>
          <b className='px-6 py-3 text-sm text-gray-700'>Description</b>
        </div>
        <div className='flex flex-col gap-4 border p-6 mt-2 text-gray-600 text-sm rounded-lg bg-white shadow-sm'>
          <p>
            We’re a small local business passionate about bringing the best of SHEGLAM straight to Tunisia.
            Our shop offers a carefully curated selection of authentic SHEGLAM cosmetics and beauty essentials,
            imported with love so you can enjoy global beauty trends without the long wait or high shipping fees.
          </p>
          <p>
            Whether you’re a makeup lover, a skincare enthusiast, or just starting your beauty journey, we’re here
            to make sure you have access to the quality and style you deserve.
          </p>
          <p>
            Glow your way with SHEGLAM – now closer than ever, right here in Tunisia! ✨
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className='mt-24'>
        <RelatedProducts category={productData.category} />
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
