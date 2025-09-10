import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='bg-black w-full h-fit mt-10 text-white'>
    <div className='xl:flex xl:justify-evenly'>
      <div className='flex flex-col items-center pt-18 gap-6'>
        <div className='flex items-center gap-2'>
            <img src={assets.briefcase} alt="logo" />
            <h1>Job <span>Connect</span></h1>
        </div>
        <p className='max-w-lg  mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, itaque esse fuga doloremque tempora quas quisquam officia, voluptatibus optio neque.</p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 ml-4 sm:ml-20'>
      <div className='flex flex-col gap-6 pt-18'>
        <div>
            <h2 className='font-semibold'>Company</h2>
        </div>
        <div className='flex flex-col'>
            <Link>About Us</Link>
            <Link>Our Team</Link>
            <Link>Partners</Link>
            <span>For Candidates</span>
            <span>For Employers</span>
        </div>
      </div>

      <div className='flex flex-col pt-18 gap-6'>
        <div>
            <h2 className='font-semibold'>Job Categories</h2>
        </div>
        <div className='flex flex-col'>
            <span>Telecommunications</span>
            <span>Hotels & Tourism</span>
            <span>Construction</span>
            <span>Education</span>
            <span>Financial services</span>
        </div>
      </div>

      <div className='flex flex-col pt-18 gap-6'>
        <div>
            <h2 className='font-semibold'>Newsletter</h2>
        </div>
        <div className='flex flex-col gap-3'>
            <p>Feel free to contact us.</p>
            <input type="email" placeholder='Email Address' className='border border-2 border-gray-100 rounded-md w-[15rem] sm:w-[20rem] md:w-[13rem] xl:w-[15rem] py-2 px-6 text-white' />
            <button className='bg-teal-900 px-3 py-3 rounded-lg text-white w-[15rem] sm:w-[20rem] md:w-[13rem] xl:w-[15rem]'>Subscribe Now</button>
        </div>
      </div>
      </div>
      </div>

      <span className='ml-4 xl:ml-22 sm:ml-18 xl:my-20'>© Copyright Job connect 2025</span>
    </section>
  )
}

export default Footer
