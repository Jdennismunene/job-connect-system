import React, { useState } from 'react'
import Sidebar from '../../components/Client/Sidebar'
import { assets } from '../../assets/assets'

function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        skills: 'coding',
        gender: 'female',
        language: 'english',
        jobTitle: 'developer',
        photo: '',
        cv: null,
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setProfile({...profile, [name]: value})
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if(!file) return;
    }
    
  return (
    <section>
        <Sidebar />
        <div className={`bg-white shadow-md hover:shadow-lg xl:w-[93.7%] w-[75%] sm:w-[85%] md:w-[87%] lg:w-[90%] p-3 rounded-lg flex justify-between items-center fixed ${isOpen ? "" : "ml-22"}`}>
            <h1 className='text-2xl font-bold font-serif'>My Profile</h1>
            <div className='flex items-center gap-4'>
                <div className='flex gap-2 border border-gray-400 rounded-full px-3 py-1 items-center'>
                    <img src={assets.search} alt="search" className='cursor-pointer' />
                    <input type="text" placeholder='Search for jobs..' className='border-none outline-none' />
                </div>
                <img src={assets.notification} alt="notification" className='border border-1 rounded-lg  p-1 cursor-pointer' />
            </div>
        </div>

        <div className='pt-24 ml-24'>
            <div>
                <div className='flex items-center justify-between mx-10'>
                    <div className='flex items-center gap-4'>
                        <img src={assets.user} alt="user" className='w-30 cursor-pointer' />
                        <div>
                            <h2 className='text-xl font-serif font-semibold'>Username</h2>
                            <h3 className='text-lg'>Email</h3>
                        </div>
                    </div>
                    <button className='bg-teal-500 rounded-lg shadow-md hover:shadow-lg text-white text-lg px-8 py-2 cursor-pointer mr-20'>Edit</button>
                </div>

                <form action="">
                    <div>

                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Profile