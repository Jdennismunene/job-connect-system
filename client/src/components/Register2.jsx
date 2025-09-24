import React from 'react'
import { assets } from '../assets/assets'

function Register2() {
  return (
    <section className='pt-10 flex justify-center mb-10'>
          <div className='bg-white shadow-xl rounded-lg px-16 mx-4 pb-4 pt-4'>
            <div className='flex flex-col items-center gap-1 mb-4'>
                <img src={assets.user1} alt="user" className='w-15 h-15 rounded-full bg-teal-400 p-2 shadow-lg hover:shadow-xl transition' />
                <h1 className='text-2xl font-semibold font-serif'>Create Account</h1>
                <span className='text-base font-serif'>Register to get conected to your suitable and most preferred Job today.</span>
            </div>
            <form action="" className='flex flex-col gap-7'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='Enter your username' className='border border-teal-400 p-2 rounded-lg' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Enter email' className='border border-teal-400 p-2 rounded-lg' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter password' className='border border-teal-400 p-2 rounded-lg' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="password">Confirm Password</label>
                <input type="text" placeholder='Enter password to confirm' className='border border-teal-400 p-2 rounded-lg' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="role">Role</label>
                <select name="" id="" className='border border-teal-400 p-2 rounded-lg cursor-pointer'>
                  <option value="employer">Employer</option>
                  <option value="job-seeker">Job Seeker</option>
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="company">Company Name</label>
                <input type="text" placeholder='Enter company name' className='border border-teal-400 p-2 rounded-lg' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="industry">Industry</label>
                <input type="text" placeholder='Enter the industry' className='border border-teal-400 p-2 rounded-lg' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="description">Description</label>
                <textarea name="" id="" rows={6} placeholder='Enter description' className='border border-teal-400 p-2 rounded-lg'></textarea>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="location">Location</label>
                <input type="text" placeholder='Enter the location' className='border border-teal-400 p-2 rounded-lg' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="companySize">Company Size</label>
                <select name="" id="" className='border border-teal-400 p-2 rounded-lg cursor-pointer'>
                  <option value="employer">Big</option>
                  <option value="job-seeker">Small</option>
                </select>
              </div>
              <button className='bg-teal-500 px-4 py-2 rounded-full cursor-pointer shadow-md hover:shadow-lg hover:bg-orange-500'>Submit</button>
            </form>
            <p className='mt-4'>By registering you are agreeing to the terms and conditions.</p>
          </div>
        </section>
  )
}

export default Register2