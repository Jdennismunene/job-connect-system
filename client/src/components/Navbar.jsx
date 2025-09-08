import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Navbar() {

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50) {
                setIsScroll(true)
            }
            else {
                setIsScroll(false)
            }
        })
    }, [])

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

  return (
    <header className={`flex items-center justify-center fixed py-2 ${isScroll ? 'w-full px-4 bg-gray-700 shadow-md md:px-10 justify-center' : ''}`}>
      <div className='flex items-center gap-2 pl-24'>
        <img src={assets.briefcase} alt="briefcase" className='w-8 h-8 pb-1' />
        <h1 className='text-2xl font-serif font-bold'>Job <span className='text-teal-500 underline underline-offset-4 decoration-1 under-font-light'>Connect</span></h1>
      </div>

      <nav className='mr-10 pr-24 my-2 ml-16 pl-24 '>
        <ul className={`border border-gray-700 md:flex gap-10 py-2 pl-5 pr-5 rounded-full sm:hidden ${isScroll ? 'text-white' : 'text-teal-500'}`}>
            <Link className={`text-xl font-serif ${isScroll ? 'text-white' : 'text-black font-semibold'} hover:underline underline-offset-4 decoration-1 hover:text-teal-500 under-font-light transition duration-500 ease-in-out`} to="/">Home</Link>
            <Link className={`text-xl font-serif ${isScroll ? 'text-white' : 'text-black font-semibold'} hover:underline underline-offset-4 decoration-1 hover:text-teal-500 under-font-light transition duration-500 ease-in-out`} to="/about">About Us</Link>
            <Link className={`text-xl font-serif ${isScroll ? 'text-white' : 'text-black font-semibold'} hover:underline underline-offset-4 decoration-1 hover:text-teal-500 under-font-light transition duration-500 ease-in-out`} to="/jobs">Jobs</Link>
            <Link className={`text-xl font-serif ${isScroll ? 'text-white' : 'text-black font-semibold'} hover:underline underline-offset-4 decoration-1 hover:text-teal-500 under-font-light transition duration-500 ease-in-out`} to="/contact">Contact Us</Link>
        </ul>
      </nav>

      <div className='flex gap-5 items-center'>
        <Link to="/login" className='font-serif font-semibold hover:text-teal-500 text-lg hover:underline underline-offset-4 decoration-1 transition duration-500 ease-in-out'>Login</Link>
        <button className='bg-teal-500 px-2 py-1 rounded-lg hover:bg-orange-300 transition duration-500 ease-in-out'>
            <Link to="/register" className='text-lg font-serif font-semibold'>Register</Link>
        </button>
      </div>

      {/*-------mobile part */}
      <nav>
        <div>

        </div>

        <ul>
            
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
