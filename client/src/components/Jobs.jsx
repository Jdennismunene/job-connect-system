import React from 'react'
import { assets, jobs } from '../assets/assets'

function Jobs() {
  return (
    <section>
      <h2 className='text-center text-2xl  font-semibold font-serif pt-4'>Some of the Jobs Available..</h2>
      <div className='flex justify-evenly'>
        <div className='grid xl:grid-cols-2 gap-4'>
        {jobs.map((item, index) => (
          <div key={index} className='bg-gray-300 rounded-3xl w-[50%] h-full'>
            <span>{item.mins}</span>
            <h1>{item.title}</h1>
            <h3>{item.text}</h3>
            <img src={item.img5} alt="job" className='w-[40%] ml-4' />
            <div className='grid grid-cols-2'>
              <div className='flex items-center gap-2'>
              <img src={item.img1} alt="" />
              <span>{item.service}</span>
            </div>
            <div className='flex items-center gap-2'>
              <img src={item.img2} alt="" />
              <span>{item.time}</span>
            </div>
            <div className='flex items-center gap-2'>
              <img src={item.img3} alt="" />
              <span>{item.price}</span>
            </div>
            <div className='flex items-center gap-2'>
              <img src={item.img4} alt="" />
              <span>{item.venue}</span>
            </div>
            </div>
            <div>
              <button className='bg-teal-500'>{item.btn}</button>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-gray-400'>
        <h2>Search by Job Title</h2>
        <div className='flex items-center gap-3'>
          <img src={assets.search} alt="search" className='w-5 absolute' />
          <input type="text" placeholder='job title or company' className='px-6 py-2' />
        </div>
        <h2>Location</h2>
        <div className='flex items-center'>
          <img src={assets.location} alt="venue" />
          <select name="" id=""></select>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Jobs
