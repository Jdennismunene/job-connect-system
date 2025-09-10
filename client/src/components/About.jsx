import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <section className='pt-10'>
      <div className='xl:flex justify-evenly ml-4 overflow-hidden'>
        <img src={assets.about_img} alt="image" className='rounded-lg shadow-md hover:shadow-xl' />
        <div className='xl:flex flex-col gap-4  mx-4 justify-center items-center'>
          <h1 className='lg:text-4xl font-serif font-semibold text-blue-500/50'>ABOUT <span className='underline underline-offset-4 decoration-1 under font-light text-teal-700'>US</span></h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi mollitia quis rem <br />corrupti aliquid ipsam porro, doloribus minima iusto, corporis enim eum. Nulla sed recusandae, fugit officiis quas ipsa?</p>

          <button className='bg-teal-500 px-8 py-3 text-white rounded-xl shadow-md hover:shadow-lg flex items-center w-[40%] cursor-pointer text-lg font-serif font-semibold' style={{clipPath: 'polygon(0 0, 80% 0, 60% 100%, 0 100%)'}}>Explore More</button>
        </div>
      </div>
    </section>
  )
}

export default About
