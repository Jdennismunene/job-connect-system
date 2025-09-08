import React from 'react'
import { assets, category, RecentJobs, testimonials } from '../assets/assets'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className='w-full h-fit pt-40 bg-gray-200'>
      <div>
      <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-4xl font-serif font-bold text-teal-500'>Create and Find your Dream Job Today!</h1>
        <p className='text-lg'>Connecting talent to Opportunity:Unlocking Pathways to Success.</p>
      </div>
      <div className='flex items-center justify-center mt-10  bg-white max-w-2xl mx-auto shadow-md rounded-full overflow-hidden'>
        <div className='bg-white'>
          <input type="text" placeholder='Job Title or company' className='focus:outline-none flex-1 px-4 py-3' />
        </div>
        <div className='flex items-center gap-0.5 focus:outline-none border-x-1 px-4 py-3 bg-white'>
          <label htmlFor="location">Select Location</label>
          <select name="location" id="location" className='cursor-pointer'></select>
        </div>
        <div className='flex items-center gap-0.5 focus:outline-none border-r-1 px-4 py-3 bg-white'>
          <label htmlFor="category">Select Category</label>
          <select name="category" id="category" className='cursor-pointer'></select>
        </div>
        <button className='flex items-center gap-2 px-3 py-3 bg-teal-500 cursor-pointer hover:bg-orange-500 transition duration-300 ease-in-out'>
          <img src={assets.search} alt="search" className='w-5 h-5' />
          <span>Search Job</span>
        </button>
      </div>

      <div className='flex items-center justify-center mt-10 gap-10'>
        <div className='flex items-center gap-2'>
          <img src={assets.briefcase2} alt="" className='bg-teal-500 p-2 rounded-full shadow-md hover:shadow-xl' />
          <div className='flex flex-col'>
            <span className='font-serif font-semibold'>25,850</span>
            <span className='font-serif font-semibold'>jobs</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <img src={assets.user} alt="" className='bg-teal-500 p-2 rounded-full shadow-md hover:shadow-xl' />
          <div className='flex flex-col'>
            <span className='font-serif font-semibold'>10,250</span>
            <span className='font-serif font-semibold'>candidates</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <img src={assets.building} alt="" className='bg-teal-500 p-2 rounded-full shadow-md hover:shadow-xl' />
          <div className='flex flex-col'>
            <span className='font-serif font-semibold'>18,400</span>
            <span className='font-serif font-semibold'>companies</span>
          </div>
        </div>
      </div>
      </div>
      <nav className='mt-20 mb-1'>
        <ul className='flex items-center justify-evenly w-full bg-gray-800 py-6'>
          <Link   className='text-white text-lg font-serif hover:text-teal-500 transition duration-300 ease-in-out'>Branding</Link>
          <Link   className='text-white text-lg font-serif hover:text-teal-500 transition duration-300 ease-in-out'>Education</Link>
          <Link   className='text-white text-lg font-serif hover:text-teal-500 transition duration-300 ease-in-out'>Design</Link>
          <Link   className='text-white text-lg font-serif hover:text-teal-500 transition duration-300 ease-in-out'>Agritech</Link>
          <Link   className='text-white text-lg font-serif hover:text-teal-500 transition duration-300 ease-in-out'>Business</Link>
        </ul>
      </nav>

      <div className='overflow-hidden bg-white w-full h-full'>
        <h1 className='text-3xl font-serif font-semibold flex justify-center mt-4'>Recent Jobs Available</h1>
        <div className='grid grid-cols-1 gap-8 w-[95%] ml-10 mt-6'>
          {RecentJobs.map((item, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md hover:shadow-xl transition duration-500 ease-in-out'>
              <span className='bg-gray-300 ml-6 rounded-md px-2 py-1 my-2 text-teal-500'>{item.mins}</span>
              <div className='ml-16 mt-4'>
                <h1 className='text-xl font-serif font-semibold'>{item.title}</h1>
                <p>{item.text}</p>
              </div>
              <div className='flex items-center gap-2 justify-between'>
                <div className='mx-2 flex gap-6 ml-4 py-6'>
                  <span className='text-base font-serif'>{item.service}</span>
                  <span className='text-base font-serif'>{item.time}</span>
                  <span className='text-base font-serif'>{item.price}</span>
                  <span className='text-base font-serif'>{item.venue}</span>
                </div>
                <button className='bg-teal-500 mr-14 py-1 px-3 rounded-lg text-white cursor-pointer'>{item.btn}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-10 pb-20  bg-teal-100 w-full h-full overflow-hidden'>
        <div className='flex flex-col gap-2 justify-center items-center pt-8'>
          <h1 className='text-3xl font-serif font-semibold'>Browse By Category</h1>
          <p className='text-lg font-semibold'>Sensitional category of jobs to look into..</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 overflow-hidden md:ml-24'>
          {category.map((item, index) => (
            <div key={index} className='bg-white w-[60%] py-16 mt-6 rounded-md shadow-md hover:shadow-lg'>
              <div className='flex flex-col gap-2 items-center justiy-center'>
                <img src={item.image} alt="image" />
                <h2 className='font-serif font-semibold'>{item.title}</h2>
                <span className='bg-gray-200 text-teal-500 py-1 px-2 rounded-lg'>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full h-full bg-white'>
        <div className='md:flex justify-evenly pt-16'>
          <div className='md:max-w-[40%] flex flex-col gap-8 ml-14'>
            <h1 className='text-5xl leading-normal font-serif font-semibold text-teal-500'>Great Career Start with the Right Company.</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem explicabo quaerat quidem cumque eius. Pariatur mollitia tenetur fuga adipisci ex? Fugit distinctio maiores nisi atque cumque alias. Reprehenderit, odit?</p>
            <div className='flex items-center gap-4'>
              <button className='bg-teal-400 py-2 px-4 text-white text-base font-serif cursor-pointer shadow-lg  hover:bg-orange-500 hover:shadow-xl rounded-xl'>Search Job</button>
              <Link className='text-lg hover:underline decoration-1 underline-offset-4 hover:text-teal-400 font-serif transition duration-500 ease-in-out'>Learn more</Link>
            </div>
          </div>
          <div className='sm:ml-14'>
            <img src={assets.company} alt="company" className='rounded-lg w-[90%] h-[90%]' />
          </div>
        </div>

        <div className='flex justify-evenly my-10'>
          <div className='flex flex-col max-w-[30%] gap-1'>
            <span className='text-4xl text-teal-800 font-semibold'>10k+</span>
            <span className='text-2xl font-bold'>clients worldwide</span>
            <p className='text-lg'>Clients all around the world look forward to make an impact onto this company.</p>
          </div>
          <div className='flex flex-col max-w-[30%] gap-1'>
            <span className='text-4xl text-teal-800 font-semibold'>14k+</span>
            <span className='text-2xl font-bold'>Active resume</span>
            <p className='text-lg'>Resumes, help clients to guarrantee them a job. make an effort to send yours..</p>
          </div>
          <div className='flex flex-col max-w-[30%] gap-1'>
            <span className='text-4xl text-teal-800 font-semibold'>9k+</span>
            <span className='text-2xl font-bold'>companies</span>
            <p className='text-lg'>more companies get to advertise their works under us.</p>
          </div>
        </div>

        <div>
          <div className='flex justify-center'>
            <h1 className='text-5xl font-serif'>What Our Clients Say</h1>
          </div>
          <div className='grid grid-cols-3 overflow-hidden gap-2 ml-14'>
            {testimonials.map((item, index) => (
              <div key={index} className='bg-teal-500 w-[80%] py-24 my-10 rounded-md shadow-md hover:shadow-xl'>
                <img src={item.image} alt="quote" className='relative bottom-20 left-6 size-16' />
                <p className='relative bottom-12 max-w-[24rem] mx-4 text-lg text-white'>{item.text}</p>
                <hr  className='mx-4'/>
                <div className='flex mt-8 mx-7 gap-10 items-center'>
                  <img src={item.img} alt="img" className='rounded-full size-24' />
                  <div className='flex flex-col gap-3'>
                    <h2 className='text-xl font-semibold'>{item.title}</h2>
                    <span className='font-serif'>{item.text2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
