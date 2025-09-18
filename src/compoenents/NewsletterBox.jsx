import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className="text-center py-16 px-6 sm:px-12 bg-pink-100 rounded-xl shadow-md max-w-3xl mx-auto">
      <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-800 mb-8 text-sm sm:text-base">
        Join our newsletter to receive the latest updates and exclusive offers.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-3/4 mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full sm:flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-pink-600 text-white font-semibold px-8 py-4 rounded-md hover:bg-pink-700 transition"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox
