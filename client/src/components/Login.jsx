import React from 'react'
import { assets } from '../assets/assets'


function Login() {
  return (
    <section className='pt-20 flex justify-center mb-10'>
          <div className='bg-white shadow-xl rounded-lg px-16 mx-4 pb-4 pt-4'>
            <div className='flex flex-col items-center gap-1 mb-4'>
                <img src={assets.user1} alt="user" className='w-15 h-15 rounded-full bg-teal-400 p-2 shadow-lg hover:shadow-xl transition' />
                <h1 className='text-2xl font-semibold font-serif'>Sign In</h1>
                <span className='text-base font-serif'>Enter your details to get signed in..</span>
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
              <button className='bg-teal-500 px-4 py-2 rounded-full cursor-pointer shadow-md hover:shadow-lg hover:bg-orange-500'>Sign In</button>
            </form>
          </div>
        </section>
  )
}

export default Login