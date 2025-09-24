import React, { useEffect, useState } from 'react'
import { assets, category, RecentJobs, slider, testimonials } from '../assets/assets'
import { Link } from 'react-router-dom'
import Footer from './Footer';

function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className='pt-5'>
      <div className='bg-cover bg-center m-auto w-[95%] h-[650px] sm:h-[630px] md:h-[650px] lg:h-[600px] xl:h-[600px] rounded-xl flex flex-col' style={{backgroundImage: `url(${assets.bcg7})`}}>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl py-6 font-serif font-bold text-teal-500 mx-12 xl:pt-10'>Create and Find your Dream Job Today!</h1>
        <p className='text-lg lg:text-2xl xl:mx-12 sm:mx-12 sm:flex text-white'>Connecting talent to Opportunity:Unlocking Pathways to Success.</p>

      <div className='grid grid-cols-3 max-w-3xl xl:mt-14 sm:mt-10 gap-4 lg:gap-10 xl:gap-4'>
        <div className='flex flex-col items-center gap-2'>
          <img src={assets.briefcase2} alt="briefcase" className='bg-teal-500 p-3 lg:p-4 lg:w-20 xl:p-2 xl:w-12 rounded-full shadow-md hover:shadow-xl' />
          <div className='flex flex-col'>
            <span className='font-serif font-semibold text-white text-lg'>25,850</span>
            <span className='font-serif font-semibold text-white text-lg'>jobs</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <img src={assets.user} alt="" className='bg-teal-500 p-2 lg:p-3 lg:w-20 xl:p-2 xl:w-12 rounded-full shadow-md hover:shadow-xl' />
          <div className='flex flex-col'>
            <span className='font-serif font-semibold text-white text-lg'>10,250</span>
            <span className='font-serif font-semibold text-white text-lg'>candidates</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <img src={assets.building} alt="" className='bg-teal-500 p-2 lg:p-4 lg:w-20 xl:p-2 xl:w-12 rounded-full shadow-md hover:shadow-xl' />
          <div className='flex flex-col'>
            <span className='font-serif font-semibold text-white text-lg'>18,400</span>
            <span className='font-serif font-semibold text-white text-lg'>companies</span>
          </div>
        </div>
      </div>

      <div className='grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 sm:mx-4 xl:mx-12 bg-teal-500 py-8 px-8 rounded-xl xl:mt-[13rem] sm:mt-[9rem] md:mt-[15rem] lg:mt-[10rem] sm:gap-4'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="job" className='text-white ml-3 font-semibold xl:flex'>Enter Job or Company</label>
          <input type="text" placeholder='Job Title or company' className='focus:outline-none text-white font-semibold flex-1 px-2 p border-2 border-gray-200 rounded-full shadow-md px-12 sm:px-9 py-2 xl:w-56'/>
        </div>

        <div className='flex flex-col gap-1 xl:ml-1'>
          <label htmlFor="location" className='font-semibold text-white ml-3'>Select Location</label>
          <select name="location" id="location" className='cursor-pointer text-white flex items-center rounded-full shadow-md px-2 py-2 border-1 border-gray-200 xl:w-64'>
            <option value="it">Nairobi</option>
          </select>
        </div>
        <div className='flex flex-col gap-1 xl:ml-1'>
          <label htmlFor="location" className='font-semibold text-white ml-3'>Select Category</label>
          <select name="location" id="location" className='cursor-pointer text-white flex items-center rounded-full shadow-md px-2 py-2 border-1 border-gray-200 xl:w-64'>
            <option value="it">Full Stack Development</option>
          </select>
        </div>
        <button className='flex items-center justify-center rounded-full shadow-md gap-2 mt-5 px-3 lg:px-1 py-2 bg-teal-500 cursor-pointer hover:bg-orange-500 transition duration-300 ease-in-out'>
          <img src={assets.search} alt="search" className='w-5 h-5' />
          <span className='text-white font-semibold'>Search Job</span>
        </button>
      </div>
      </div>
      <div className='mt-18 mb-4'>
        <marquee behavior="scroll" direction="horizontal">
        <div className='flex justify-between gap-6'>
          {slider.map((item, index) => (
            <div key={item.id} className='relative'>
              <span className='font-serif text-teal-700 text-xl font-semibold'>{item.title}</span>
            </div>
          ))}
        </div>
        </marquee>
      </div>

      <div className='overflow-hidden bg-white w-full h-full'>
        <h1 className='text-3xl font-serif font-semibold flex justify-center mt-4'>Recent Jobs Available</h1>
        <div className='grid grid-cols-1 gap-8 w-[95%] h-fit sm:w-[93%] xl:ml-12 ml-3 md:ml-7 mt-6'>
          {RecentJobs.map((item, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md hover:shadow-xl transition duration-500 ease-in-out'>
              <span className='bg-gray-300 ml-6 rounded-md px-2 py-1 my-2 text-teal-500'>{item.mins}</span>
              <div className='ml-16 mt-4'>
                <h1 className='text-xl font-serif font-semibold'>{item.title}</h1>
                <p>{item.text}</p>
              </div>
              <div className='sm:flex items-center gap-2 justify-between'>
                <div className='mx-2 grid grid-cols-2 sm:flex gap-6 ml-4 py-6'>
                  <div className='flex items-center gap-2'>
                    <img src={item.img1} alt="" className='size-6' />
                    <span className='text-base font-serif'>{item.service}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={item.img2} alt="" className='size-6' />
                    <span className='text-base font-serif'>{item.time}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={item.img3} alt="" className='size-6' />
                    <span className='text-base font-serif'>{item.price}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={item.img4} alt="" className='size-6 white' />
                    <span className='text-base font-serif'>{item.venue}</span>
                  </div>
                </div>
                <button className='bg-teal-500 sm:mr-8 mb-2 ml-4 py-1 px-4 rounded-lg text-white cursor-pointer'>{item.btn}</button>
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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 overflow-hidden md:ml-4 sm:ml-10 ml-10'>
          {category.map((item, index) => (
            <div key={index} className='bg-white w-[90%] sm:w-[90%] md:w-[95%] xl:w-[75%] xl:ml-6 py-16 mt-6 rounded-md shadow-md hover:shadow-lg'>
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
        <div className='md:flex items-center xl:justify-evenly pt-16'>
          <div className='md:max-w-[40%] flex flex-col gap-8 ml-14'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mx-4 leading-normal font-serif font-semibold text-teal-500'>Great Career Start with the Right Company.</h1>
            <p className='text-lg mx-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem explicabo quaerat quidem cumque eius. Pariatur mollitia tenetur fuga adipisci ex? Fugit distinctio maiores nisi atque cumque alias. Reprehenderit, odit?</p>
            <div className='flex items-center gap-4 mb-4'>
              <button className='bg-teal-400 py-2 px-4 text-white text-base font-serif cursor-pointer shadow-lg  hover:bg-orange-500 hover:shadow-xl rounded-xl'>Search Job</button>
              <Link className='text-lg hover:underline decoration-1 underline-offset-4 hover:text-teal-400 font-serif transition duration-500 ease-in-out'>Learn more</Link>
            </div>
          </div>
          <div className='sm:ml-14 md:mr-8'>
            <img src={assets.company} alt="company" className='rounded-lg w-[95%] h-[95%] md:w-[400px] md:h-[400px] xl:w-[95%]' />
          </div>
        </div>

        <div className='grid grid-cols-2 sm:flex ml-10 xl:ml-24 gap-2 xl:gap-12 my-10'>
          <div className='flex flex-col max-w-[70%] xl:max-w-[25%] gap-1'>
            <span className='text-4xl text-teal-800 font-semibold'>10k+</span>
            <span className='text-2xl font-bold'>clients worldwide</span>
            <p className='text-lg'>Clients all around the world look forward to make an impact onto this company.</p>
          </div>
          <div className='flex flex-col max-w-[70%] xl:max-w-[25%] gap-1'>
            <span className='text-4xl text-teal-800 font-semibold'>14k+</span>
            <span className='text-2xl font-bold'>Active resume</span>
            <p className='text-lg'>Resumes, help clients to guarrantee them a job. make an effort to send yours..</p>
          </div>
          <div className='flex flex-col justify-center mr-10 max-w-[70%] xl:max-w-[25%] gap-1'>
            <span className='text-4xl text-teal-800 font-semibold'>9k+</span>
            <span className='text-2xl font-bold'>companies</span>
            <p className='text-lg'>more companies get to advertise their works under us.</p>
          </div>
        </div>

        <div>
          <div className='flex justify-center'>
            <h1 className='text-3xl font-serif font-semibold'>What Our Clients Say</h1>
          </div>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 overflow-hidden gap-2 ml-14'>
            {testimonials.map((item, index) => (
              <div key={index} className='bg-teal-500 w-[90%] py-24 my-10 rounded-md shadow-md hover:shadow-xl'>
                <img src={item.image} alt="quote" className='-mt-10 mb-14 ml-4 left-6 size-16' />
                <p className='-mt-12 mb-6 max-w-[24rem] mx-4 text-lg text-white'>{item.text}</p>
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

      <Footer />

    </section>
  )
}

export default Home
