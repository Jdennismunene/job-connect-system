import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={`h-full bg-white shadow-lg fixed top-0 left-0 bottom-0 px-4 py-6 ${isOpen ? "xl:w-72" : "w-20"}`}>
        <div className='cursor-pointer pb-6' onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? assets.sideMenuOpen : assets.sideMenuClose} alt="menu" className='bg-teal-500 px-2 py-2 w-10 rounded-full' />
        </div>
        <div className='xl:flex items-center gap-2 mb-4'>
            <img src={assets.briefcase} alt="briefcase2" className='w-8' />
            {isOpen &&
            <h1 className='text-2xl font-bold font-serif'>Job <span className='underline underline-offset-4 decoration-1 under font-light text-teal-500 '>Connect</span></h1>}
        </div>
        <ul className='flex flex-col gap-10 pt-4 text-lg font-serif'>
            <div className='flex items-center gap-2'>
                <Link to="/sidebar/dashboard" className='hover:text-teal-500 hover:underline underline-offset-4 decoration-1 cursor-pointer transition duration-500 ease-in-out flex items-center gap-2'>
                <img src={assets.dashboard} alt="" className='cursor-pointer fill-blue-500 w-8' />{isOpen &&<span>Dashboard</span>}</Link>
            </div>
            <div className='flex items-center gap-2'>
                <Link to="/sidebar/job_recommended" className='hover:text-teal-500 hover:underline underline-offset-4 decoration-1 cursor-pointer transition duration-500 ease-in-out flex items-center gap-2'>
                <img src={assets.briefcase} alt="" className='cursor-pointer fill-blue-500 w-8' />{isOpen &&<span>Job Recommendations</span>}</Link>
            </div>
            <div className='flex items-center gap-2'>
                <Link to="/sidebar/current_jobs" className='hover:text-teal-500 hover:underline underline-offset-4 decoration-1 cursor-pointer transition duration-500 ease-in-out flex items-center gap-2'>
                <img src={assets.briefcase} alt="" className='cursor-pointer fill-blue-500 w-8' />{isOpen &&<span>Current Jobs</span>}</Link>
            </div>
            <div className='flex items-center gap-2'>
                <Link to="/sidebar/applied_jobs" className='hover:text-teal-500 hover:underline underline-offset-4 decoration-1 cursor-pointer transition duration-500 ease-in-out flex items-center gap-2'>
                <img src={assets.applied} alt="" className='cursor-pointer fill-blue-500 w-8' />{isOpen &&<span>Applied Jobs</span>}</Link>
            </div>
            <div className='flex items-center gap-2'>
                <Link to="/sidebar/completed_jobs" className='hover:text-teal-500 hover:underline underline-offset-4 decoration-1 cursor-pointer transition duration-500 ease-in-out flex items-center gap-2'>
                <img src={assets.briefcase} alt="" className='cursor-pointer fill-blue-500 w-8' />{isOpen &&<span>Completed Jobs</span>}</Link>
            </div>
            <div className='flex items-center gap-2'>
                <Link to="/sidebar/profile" className='hover:text-teal-500 hover:underline underline-offset-4 decoration-1 cursor-pointer transition duration-500 ease-in-out flex items-center gap-2'>
                <img src={assets.user} alt="" className='cursor-pointer fill-blue-500 w-8' />{isOpen &&<span>Profile</span>}</Link>
            </div>
        </ul>
    </section>
  )
}

export default Sidebar