import React from 'react'
import { assets } from '../assets/assets'
import { FaGithub, FaLinkedin } from 'react-icons/fa' // Import icons

const Footer = () => {
    return (
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/* Logo and description */}
            <div>
                <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate a, quidem quibusdam illum hic commodi corrupti accusamus cum ex fugiat voluptatem facilis eligendi consequatur officia dolorum nobis? Ullam, autem.
                </p>
            </div>

            {/* Company links */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* Get in touch */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH WITH ME </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>rahmaaribi35@gmail.com</li>
                    <li>Tunisia , Sousse</li>
                </ul>

                {/* Social links */}
                <div className="flex gap-4 mt-3">
                    <a href="https://github.com/rahmaaaribii35" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} className="hover:text-pink-600 transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/rahma-aribi-69480534b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} className="hover:text-pink-600 transition" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="col-span-3 flex flex-col items-center w-full mt-10">
                <hr className="w-full border-gray-300 mb-3" />
                <p className="text-sm text-center text-gray-600">
                    Copyright 2025@ RahmaAribi - All rights Reserved.
                </p>
            </div>

        </div>
    )
}

export default Footer
