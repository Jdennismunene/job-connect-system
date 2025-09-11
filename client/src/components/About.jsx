import React, { useState } from 'react'
import { assets, faqs, steps } from '../assets/assets'
import Footer from './Footer';

function About() {

  const [activeId, setActiveId] = useState(1);

  const toggle = (id) => {
    setActiveId(prev => (prev === id ? null :id))
  };

  return (
    <section className='pt-10'>
      <div className='lg:flex justify-evenly ml-4 overflow-hidden'>
        <img src={assets.about_img} alt="image" className='rounded-lg shadow-md hover:shadow-xl pr-2 lg:w-[50%]' />
        <div className='xl:flex flex-col gap-5 mx-4'>
          <h1 className='text-2xl sm:text-4xl font-serif font-semibold text-blue-500/50 pt-2'>ABOUT <span className='underline underline-offset-4 decoration-1 under font-light text-teal-700'>US</span></h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi mollitia quis rem <br />corrupti aliquid ipsam porro, doloribus minima iusto, corporis enim eum. Nulla sed recusandae, fugit officiis quas ipsa?</p>
          <button className='bg-teal-500 px-8 py-3 text-white rounded-xl shadow-md hover:shadow-lg flex items-center sm:w-[28%] lg:w-[40%] w-[60%] my-4 cursor-pointer text-lg font-serif font-semibold'>Check Below</button>

          <div className='flex gap-6'>
            <div>
              <img src={assets.explore_img} alt="explore_img" className='w-50 h-40 rounded-lg shadow-md hover:shadow-lg' />
              <span className='font-serif font-semibold'>Explore Opportunities</span>
            </div>
            <div>
              <img src={assets.career_img} alt="career_img" className='w-50 h-40 rounded-lg shadow-md hover:shadow-lg' />
              <span className='font-serif font-semibold'>Career Match</span>
            </div>
            <div>
              <img src={assets.connect_img} alt="connect_img" className='w-50 h-40 rounded-lg shadow-md hover:shadow-lg' />
              <span className='font-serif font-semibold'>Connect & Apply</span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-200 w-full h-full mt-10 pt-20 pb-20 overflow-hidden'>
        <div className='flex justify-center pb-10'>
          <h1 className='text-2xl sm:text-4xl font-semibold text-blue-300'>How Job Connect Work!</h1>
        </div>
        <div className='grid lg:grid-cols-2 xl:grid-cols-4 xl:gap-2 gap-4'>
          {steps.map((step, index) => (
            <div key={index} className={`xl:w-[90%] w-[90%] sm:w-[94%] md:ml-5 ml-4 flex flex-col items-center justify-center border gap-4 pb-8 rounded-lg  ${step.active ? "bg-white" : "bg-gray-200"}`}>
              <img src={step.image} alt="images" className={`${step.active ? "bg-teal-500" : "bg-white"} rounded-full shadow-md p-2 w-20 my-4`} />
              <h2 className='text-2xl font-semibold font-serif'>{step.title}</h2>
              <p className='mx-3'>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-10'>
        <div className='lg:flex justify-evenly'>
          <div>
          <div className='flex flex-col items-center'>
            <h2 className='text-2xl ml-2 sm:text-4xl font-serif font-semibold text-blue-300 leading-normal'>We're only working with The Best</h2>
            <p className='text-lg pt-2 ml-3 md:ml-6 pb-3'>We have a link with some of the best, top companies in the world. Your career path is a guarrantee of no waste.</p>
            </div>
            <div className='grid sm:grid-cols-2 xl:pt-18 gap-10 ml-4'>
              <div className='flex items-center gap-6'>
                <img src={assets.crown} alt="crown" className='w-15 border-teal-500 border-2 p-2 rounded-full shadow-md' />
                <span className='text-lg font-semibold font-serif'>Quality Job</span>
              </div>
              <div className='flex items-center gap-6'>
                <img src={assets.card} alt="card" className='w-15 border-teal-500 border-2 p-2 rounded-full shadow-md' />
                <span className='text-lg font-semibold font-serif'>Resume Builder</span>
              </div>
              <div className='flex items-center gap-6'>
                <img src={assets.award} alt="award" className='w-15 border-teal-500 border-2 p-2 rounded-full shadow-md' />
                <span className='text-lg font-semibold font-serif'>Top Companies</span>
              </div>
              <div className='flex items-center gap-6 pb-4'>
                <img src={assets.badge} alt="badge" className='w-15 border-teal-500 border-2 p-2 rounded-full shadow-md' />
                <span className='text-lg font-semibold font-serif '>Top Talents</span>
              </div>
            </div>
            </div>
          <div className='flex gap-4 mx-3 sm:ml-4 md:ml-8 sm:pt-2'>
          <div className='flex flex-col gap-2'>
            <img src={assets.company_img1} alt="company_img1" className='sm:w-60 w-40 h-50 sm:h-60 md:w-70 xl:w-60 md:h-60 lg:w-50 rounded-lg' />
            <img src={assets.company_img2} alt="company_img2" className='sm:w-60 w-40 md:w-70 xl:w-60 rounded-lg' />
          </div>
          <img src={assets.company_img3} alt="company_img3" className='sm:w-70 w-50 md:w-80 xl:w-70 lg:w-50 rounded-lg' />
        </div>
      </div>
      </div>

      <div className='mt-10 mb-20'>
        <div className='flex flex-col gap-2 items-center'>
          <h2 className='text-2xl sm:text-4xl font-semibold text-blue-300'>Frequently Asked Questions</h2>
          <p className='text-lg sm:text-xl ml-4'>Some of the questions asked by our dearest clients.</p>
        </div>
        <div className='grid gap-4 mt-6'>
          {faqs.map((faq, index) => (
            <div key={index} className={`border rounded-lg py-6 px-4 xl:w-[95%] w-[90%] md:w-[94%] lg:ml-9 ml-5 xl:ml-8 ${activeId === faq.id ? "bg-teal-200/50" : "bg-white"}`}>
              <div onClick={() => toggle(faq.id)} className='flex items-center justify-between cursor-pointer'>
                <h3 className='font-semibold text-lg'>{String(faq.id).padStart(2, "O")} {faq.question}</h3>
                <span className='text-2xl text-teal-600 font-bold border-2 rounded-md p-2'>{activeId === faq.id ? "x" : "+"}</span>
              </div>
              {activeId === faq.id && (
                <p className='mt-2 text-gray-600 text-lg'>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default About
