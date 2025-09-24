import React, { useState } from 'react'
import Sidebar from '../../components/Client/Sidebar'
import { AppliedJobs, assets } from '../../assets/assets'

function Applied_Jobs() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
        <Sidebar />
        <div className={`bg-white shadow-md hover:shadow-lg xl:w-[93.7%] w-[75%] sm:w-[85%] md:w-[87%] lg:w-[90.5%] p-3 rounded-lg sm:flex justify-between items-center fixed ${isOpen ? "" : "ml-22"}`}>
                    <h1 className='sm:text-2xl text-xl font-bold font-serif mb-2'>Applied Jobs</h1>
                    <div className='flex items-center gap-4'>
                        <div className='flex gap-2 border border-gray-400 rounded-full px-3 py-1 items-center'>
                            <img src={assets.search} alt="search" />
                            <input type="text" placeholder='Search for jobs..' className='border-none outline-none' />
                        </div>
                        <img src={assets.notification} alt="notification" className='border border-1 rounded-lg  p-1' />
                    </div>
                </div>
        
                <div className='xl:pt-24 pt-30 sm:pt-20 ml-24 mb-8'>
                    <div className='flex flex-col gap-6'>
                        {AppliedJobs.map((item, index) => (
                            <div key={index} className='bg-white rounded-lg shadow-md hover:shadow-lg xl:w-[95%] w-68 sm:w-[97%] lg:mx-2 xl:mx-6'>
                                <div className='flex items-center justify-between xl:mx-16 sm:mx-10 mx-4 mt-4'>
                                    <span className='text-teal-500 bg-gray-100 px-2 py-1 rounded-xl font-serif'>{item.date}</span>
                                    <img src={item.save_img} alt="" className='cursor-pointer' />
                                </div>
                                <div className='xl:mx-24 sm:mx-20 mx-4 flex flex-col gap-3 my-4'>
                                    <h1 className='text-xl font-bold font-serif'>{item.title}</h1>
                                    <h3 className='text-lg font-serif'>{item.text}</h3>
                                </div>
                                <div className='flex items-center xl:gap-6 gap-2 sm:gap-4 xl:mx-36 sm:mx-10 mx-4 mt-2 mb-4'>
                                    <div className='sm:flex items-center gap-2'>
                                        <img src={item.img1} alt="" />
                                        <span>{item.service}</span>
                                    </div>
                                    <div className='sm:flex items-center gap-2 ml-4'>
                                        <img src={item.img3} alt="" />
                                        <span>{item.time}</span>
                                    </div>
                                    <div className='sm:flex items-center gap-2'>
                                        <img src={item.img2} alt="" />
                                        <span>{item.price}</span>
                                    </div>
                                    <div className='sm:flex items-center gap-2'>
                                        <img src={item.img4} alt="" />
                                        <span>{item.venue}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-8 flex items-center justify-center'>
                        <div className='flex items-center gap-4'>
                            <button className='border border-1 border-gray-200 px-3 py-1 font-semibold text-lg cursor-pointer'>1</button>
                            <button className='border border-1 border-gray-200 px-3 py-1 font-semibold text-lg cursor-pointer'>2</button>
                        </div>
                    </div>
                </div>
    </section>
  )
}

export default Applied_Jobs