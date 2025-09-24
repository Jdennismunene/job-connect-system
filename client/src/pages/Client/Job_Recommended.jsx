import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Client/Sidebar'
import { assets, jobs } from '../../assets/assets'

function Job_Recommended() {
    const [progress, setProgress] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100))
        }, 30)
        return () => clearInterval(timer);
    }, [])
  return (
    <section>
        <Sidebar />
        <div className={`bg-white shadow-md hover:shadow-lg xl:w-[93.8%] w-[75%] sm:w-[85%] md:w-[87.5%] lg:w-[90.5%] p-3 rounded-lg sm:flex justify-between items-center ${isOpen ? "fixed" : "ml-22 fixed"}`}>
            <h1 className='md:text-2xl text-xl sm:text-lg font-bold font-serif mb-2'>Jobs Recommended</h1>
            <div className='flex items-center gap-4'>
                <div className='flex gap-2 border border-gray-400 rounded-full px-3 py-1 items-center'>
                    <img src={assets.search} alt="search" />
                    <input type="text" placeholder='Search for jobs..' className='border-none outline-none' />
                </div>
                <img src={assets.notification} alt="notification" className='border border-1 rounded-lg  p-1' />
            </div>
        </div>

        <div className='xl:pt-24 sm:pt-20 pt-30 lg:flex justify-evenly gap-2 xl:gap-8 ml-24'>
            {/*--job recommended part--*/}
            <div className='grid md:grid-cols-2'>
               {jobs.map((job, index) => (
                   <div key={index} className='xl:w-112 w-68 sm:w-112 md:w-72 lg:w-64 bg-white rounded-lg shadow-md hover:shadow-lg mr-8 mb-8 sm:mx-8 md:mx-4 lg:mx-1 xl:mx-4'>
                    <div className='flex flex-col gap-2'>
                        <span className='mx-4 text-teal-500'>{job.mins}</span>
                       <span className='mx-4 font-semibold text-xl'>{job.title}</span>
                       <span className='mx-4 text-lg'>{job.text}</span>
                       <img src={job.img5} alt="image" className='mx-4' />
                    </div>
                    <div className='flex flex-col gap-3 mb-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2 mx-3 mt-2'>
                                <img src={job.img1} alt="" />
                                <span>{job.service}</span>
                            </div>
                            <div className='flex items-center gap-2 mx-3 mt-2 mr-4'>
                                <img src={job.img2} alt="" />
                                <span>{job.time}</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 mx-3 mt-2'>
                            <img src={job.img3} alt="" />
                            <span>{job.price}</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2 mx-3 mt-2'>
                                <img src={job.img4} alt="" />
                                <span>{job.venue}</span>
                            </div>
                            <button className='bg-teal-500 px-3 py-1 rounded-lg text-white mr-3 cursor-pointer'>{job.btn}</button>
                        </div>
                    </div>
                   </div>
               ))}
            </div>

            {/*--search part--*/}
            <div className='flex flex-col gap-4 mr-4'>
            <div className='bg-teal-100 lg:w-84 xl:w-112 h-fit pb-8 rounded-lg shadow-md hover:shadow-lg'>
                <div className='mt-6 flex flex-col gap-3 mx-4'>
                    <h2 className='text-xl font-semibold mx-2'>Search by Job title</h2>
                    <div className='flex items-center bg-white rounded-lg px-3 py-2 mt-2 mx-3 gap-2'>
                        <img src={assets.search} alt="search" className='w-5 h-5' />
                        <input type="text" placeholder='Job Title or company' className='border-none outline-none' />
                    </div>
                </div>
                <div className='mt-6 flex flex-col gap-3 mx-4'>
                    <h2 className='text-xl font-semibold mx-2'>Location</h2>
                    <div className='flex items-center bg-white rounded-lg mx-4'>
                        <img src={assets.location} alt="location" className='ml-2' />
                        <select name="" id="" className='bg-white rounded-lg px-3 py-2 w-full border-none outline-none cursor-pointer'>
                            <option value="">Choose city</option>
                        </select>
                    </div>
                </div>

                {/*---job category part--*/}
                <div className='mt-6 flex flex-col gap-3 mx-4'>
                    <h2 className='text-xl font-semibold mx-2'>Category</h2>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Commerce</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Telecommunications</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Hotels & Tourism</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Education</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Financial Services</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <button className='bg-teal-500 text-white rounded-lg py-2 mt-2 font-serif text-lg cursor-pointer shadow-md hover:shadow-lg'>Show More</button>
                </div>

                {/*---job type part--*/}
                <div className='mt-6 flex flex-col gap-3 mx-4'>
                    <h2 className='text-xl font-semibold mx-2'>Job Type</h2>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Full Time</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Part Time</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Freelance</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Seasonal</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Fixed-Price</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                </div>

                {/*---experience part--*/}
                <div className='mt-6 flex flex-col gap-3 mx-4'>
                    <h2 className='text-xl font-semibold mx-2'>Experience Level</h2>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>No-experience</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Fresher</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Intermediate</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Expert</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                </div>

                {/*---date posted part--*/}
                <div className='mt-6 flex flex-col gap-3 mx-4'>
                    <h2 className='text-xl font-semibold mx-2'>Date Posted</h2>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>All</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Last Hour</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Last 24 Hours</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Last 7 days</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <input type="checkbox" className='size-5 border-none outline-none' />
                                <span>Last 30 days</span>
                            </div>
                            <span className='bg-white rounded-full px-2 py-1'>10</span>
                        </div>
                    </div>
                </div>

                {/*---salary part--*/}
                <div className='mt-6 flex flex-col gap-3 mx-4'>
                    <h2 className='text-xl font-semibold mx-4'>Salary</h2>
                    <div className="flex items-center justify-center  p-4">
                        <div className="flex items-center w-full max-w-sm">
                            {/*--left circle--*/}
                            <div className="w-4 h-4 bg-teal-600 rounded-full z-10 "/>
                            
                            {/*--line--*/}
                            <div className="flex-1 h-1 bg-teal-600" style={{width: `${progress}%`}}/>

                            {/*--right circle--*/}
                            <div className="w-4 h-4 bg-teal-600 rounded-full z-10" style={{left: `calc(${progress}% - 8px)`}}/>

                            {/* Optional: trailing line (white or grey) */}
                            <div className="w-8 h-1 bg-white" />
                        </div>
                    </div>
                    <div className='flex items-center justify-between mx-2'>
                        <span className='text-lg font-semibold'>Salary: $0 - $9999</span>
                        <button className='bg-teal-500 text-white px-3 py-1 text-lg rounded-lg shadow-md hover:shadow-lg cursor-pointer'>Apply</button>
                    </div>
                </div>

                {/*--tags part--*/}
                <div className='mt-6 flex flex-col gap-3'>
                    <h2 className='text-xl font-semibold mx-6 mt-6'>Tags</h2>
                    <div className='flex items-center gap-2 mx-2'>
                        <span className='bg-gray-100 text-teal-500 px-2 py-1 rounded-lg'>Engineering</span>
                        <span className='bg-gray-100 text-teal-500 px-2 py-1 rounded-lg'>Design</span>
                        <span className='bg-gray-100 text-teal-500 px-2 py-1 rounded-lg'>ui/ux</span>
                    </div>
                    <div className='flex items-center gap-2 mx-2'>
                        <span className='bg-gray-100 text-teal-500 px-2 py-1 rounded-lg'>marketing</span>
                        <span className='bg-gray-100 text-teal-500 px-2 py-1 rounded-lg'>management</span>
                        <span className='bg-gray-100 text-teal-500 px-2 py-1 rounded-lg '>soft</span>
                    </div>
                </div>
            </div>
            {/*--hiring--*/}
            <div className='lg:w-84 xl:w-112 h-fit pb-8 bg-gray-700 mb-8 rounded-lg shadow-md hover:shadow-lg'>
                <div className='flex flex-col gap-3 mx-4 mt-6 items-center'>
                    <h2 className='text-xl font-bold text-white'>WE ARE HIRING</h2>
                    <p className='text-lg font-semibold text-white'>Apply Today!</p>
                    <img src={assets.hiring_img} alt="" />
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Job_Recommended