import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')

  return (
    <form 
      className="flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-16 gap-5 p-8 rounded-2xl shadow-lg bg-gradient-to-b from-pink-50 to-white text-gray-700"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-3xl font-semibold tracking-wide text-pink-600">{currentState}</p>
        <div className="h-[2px] w-12 bg-pink-400 rounded-full"></div>
      </div>

      {/* Inputs */}
      {currentState === 'Login' ? null : (
        <input type="text" placeholder="Name" required className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:ring-2 focus:ring-pink-300 outline-none" />
      )}
      <input type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:ring-2 focus:ring-pink-300 outline-none" />
      <input type="password" placeholder="Password" require className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:ring-2 focus:ring-pink-300 outline-none"/>

      {/* Options */}
      <div className="w-full flex justify-between text-sm text-gray-500">
        <p className="cursor-pointer hover:text-pink-600 transition"> Forget your password? </p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer text-pink-500 hover:underline">Create account </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-pink-500 hover:underline">Login here </p>
        )}
      </div>

      {/* Button */}
      <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-xl mt-4 shadow-md transition"> {currentState === 'Login' ? 'Sign In' : 'Sign Up'} </button>
    </form>
  )
}

export default Login
