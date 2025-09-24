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
    <header className={`flex items-center lg:justify-center justify-evenly py-2 ${isScroll ? 'w-full px-4 bg-gray-700 shadow-md md:px-10 fixed justify-center' : ''}`}>
      <div className='flex items-center gap-2 pl-2 pr-2 lg:pl-6 md:pl-10'>
        <img src={assets.briefcase} alt="briefcase" className='sm:w-8 sm:h-8 w-6 pb-1' />
        <h1 className='sm:text-2xl text-lg  font-serif font-bold md:flex gap-1 flex'>Job <span className='text-teal-500 underline underline-offset-4 decoration-1 under-font-light'>Connect</span></h1>
      </div>

      <nav className='mr-10 pr-24 my-2 ml-16 pl-24 lg:-ml-12 lg:pr-1 hidden lg:flex'>
        <ul className={`border border-gray-700 md:flex gap-10 py-2 pl-5 pr-5 rounded-full ${isScroll ? 'text-white' : 'text-teal-500'}`}>
            <Link className={`text-xl font-serif ${isScroll ? 'text-white' : 'text-black font-semibold'} hover:underline underline-offset-4 decoration-1 hover:text-teal-500 under-font-light transition duration-500 ease-in-out`} to="/">Home</Link>
            <Link className={`text-xl font-serif ${isScroll ? 'text-white' : 'text-black font-semibold'} hover:underline underline-offset-4 decoration-1 hover:text-teal-500 under-font-light transition duration-500 ease-in-out`} to="/about">About Us</Link>
            <Link className={`text-xl font-serif ${isScroll ? 'text-white' : 'text-black font-semibold'} hover:underline underline-offset-4 decoration-1 hover:text-teal-500 under-font-light transition duration-500 ease-in-out`} to="/jobs">Jobs</Link>
            <Link className={`text-xl font-serif ${isScroll ? 'text-white' : 'text-black font-semibold'} hover:underline underline-offset-4 decoration-1 hover:text-teal-500 under-font-light transition duration-500 ease-in-out`} to="/contact">Contact Us</Link>
        </ul>
      </nav>

      <div className='flex gap-4 lg:gap-8 ml-2 items-center'>
        <Link to="login" className='font-serif font-semibold hover:text-teal-500 text-lg hover:underline underline-offset-4 decoration-1 transition duration-500 ease-in-out'>Login</Link>
        <button className='bg-teal-500 px-2 py-1 rounded-lg hover:bg-orange-300 transition duration-500 ease-in-out'>
            <Link to="register" className='text-lg font-serif font-semibold'>Register</Link>
        </button>
      </div>
      <div className='relative sm:left-8 md:left-12 left-1 lg:hidden block'>
        <img src={assets.menu} alt="menu" className='size-8' onClick={openMenu} />
      </div>

      {/*-------mobile part */}
        <ul ref={sideMenuRef} className='lg:hidden flex flex-col gap-4 w-64 h-screen bg-gray-700 fixed -right-64 top-0 bottom-0 px-10 py-10 transition duration-500 ease-in-out text-white font-serif text-lg'>
          <div onClick={closeMenu}>
            <img src={assets.close} alt="close" className='size-8 ' />
          </div>
           <Link to='/' onClick={closeMenu} className='text-xl font-serif font-semibold'>Home</Link>
           <Link to='/about' onClick={closeMenu} className='text-xl font-serif font-semibold'>About Us</Link>
           <Link to='/jobs' onClick={closeMenu} className='text-xl font-serif font-semibold'>Jobs</Link>
           <Link to='/contact' onClick={closeMenu} className='text-xl font-serif font-semibold'>Contact Us</Link> 
        </ul>
    </header>
  )
}

export default Navbar
