import React from 'react'
import { assets } from '../assets/assets'
import Footer from './Footer'

function Contact() {
  return (
    <section className='pt-6'>
      <div className='lg:flex justify-evenly'>
        <div className='flex flex-col gap-20'>
        <div className='flex flex-col gap-4 items-center'>
            <h2 className='text-2xl sm:text-4xl font-serif font-semibold text-blue-400 leading-normal'>Ready to Take the Next <br />Step? We're Here for You.</h2>
            <p className='text-xl font-serif ml-3'>Glad to have you on board, for any enquiry, you can surf us through the below areas..</p>
        </div>
        <div className='grid grid-cols-2 xl:gap-9 gap-2 ml-4 mb-6 sm:ml-10'>
            <div className='flex flex-col gap-1'>
                <img src={assets.phone} alt="phone" className='size-8' />
                <span className='xl:text-2xl text-xl font-bold'>Call for inquiry</span>
                <span className='sm:text-lg text-base'>+254 115-942-960</span>
            </div>
            <div className='flex flex-col gap-1'>
                <img src={assets.mail} alt="mail" className='size-8' />
                <span className='sm:text-2xl text-xl font-bold'>Send us email</span>
                <span className='sm:text-lg text-base'>jobconnect@gmail.com</span>
            </div>
            <div className='flex flex-col mt-6 gap-1'>
                <img src={assets.clock} alt="clock" className='size-8' />
                <span className='xl:text-2xl text-xl font-bold'>Opening hours</span>
                <span className='sm:text-lg text-base'>Mon - Fri: 10am - 10pm</span>
            </div>
            <div className='flex flex-col mt-6 gap-1'>
                <img src={assets.location} alt="location" className='size-8' />
                <span className='xl:text-2xl text-xl font-bold'>Office</span>
                <span className='sm:text-lg text-base'>Kilifi area, diani..</span>
            </div>
        </div>
        </div>

        <div className='mx-2'>
            <form action="" className='bg-teal-100/50 px-4 py-4 rounded-md shadow-md h-fit w-full'>
                <div className='flex flex-col items-center gap-1 pb-3'>
                    <h1 className='text-2xl font-semibold'>Contact Info.</h1>
                    <p className='text-lg font-serif'>Proceed by inserting your details</p>
                </div>
                <div className='lg:flex mt-4 gap-4'>
                <div className='flex flex-col ml-4 gap-2 mt-2'>
                    <label htmlFor="first_name" className='font-semibold text-lg font-serif'>First Name</label>
                    <input type="text" placeholder='Enter first name' className='bg-white py-2 px-6 rounded-lg text-black' />
                </div>
                <div className='flex flex-col ml-4 gap-2 mt-2'>
                    <label htmlFor="last_name" className='font-semibold text-lg font-serif'>Last Name</label>
                    <input type="text" placeholder='Enter last name' className='bg-white py-2 px-6 rounded-lg text-black' />
                </div>
                </div>
                <div className='flex flex-col mt-3 ml-4 gap-2'>
                    <label htmlFor="email" className='font-semibold text-lg font-serif'>Email Address</label>
                    <input type="email" placeholder='Enter email address' className='bg-white py-3 px-5 rounded-lg text-black' />
                </div>
                <div className='flex flex-col mt-3 ml-4 gap-2'>
                    <label htmlFor="message" className='font-semibold text-lg font-serif'>Message</label>
                    <textarea name="Enter message" id="message" rows={8} className='bg-white rounded-lg px-2 py-1 border-outline-none' placeholder='Your message'></textarea>
                </div>
                <button className='mt-4 mb-6 ml-4 bg-teal-500 py-2 px-10 rounded-lg font-semibold text-white'>Send Message</button>
            </form>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact
