import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link
      to={`/product/${id}`}
      className="block bg-white rounded-2xl shadow-md hover:shadow-lg border border-pink-200 transition p-3"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={image[0]}
          alt={name}
          className="hover:scale-110 transition-transform duration-300 ease-in-out w-full h-48 object-cover rounded-xl"
        />
      </div>
      <p className="pt-3 text-sm font-medium text-gray-800">{name}</p>
      <p className="text-sm font-semibold text-pink-600">
        {price} {currency}
      </p>
    </Link>
  )
}

export default ProductItem
