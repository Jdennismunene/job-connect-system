import React, { useState } from 'react'
import Sidebar2 from '../../components/Employer/Sidebar2'
import { assets, dashboardJobs} from '../../assets/assets'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from 'chart.js'


ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard2() {
    const [active, setActive] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const data = {
        labels: ['Total Jobs', 'My Jobs', 'Completed Jobs'],
        datasets: [
            {
                data: [100, 40, 60],
                backgroundColor: ['#2563EB', '#F97316', '#14B8A6'],
                borderWidth: 3,
                borderColor: '#FFFFFF',
                cutout: '75%',
                hoverOffset: 8,
                borderradius: 50,
            },
        ],
    }
    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxwidth: 12,
                    padding: 20,
                },
            },
        },
        responvive: true,
        maintainAspectRatio: false,
    }
  return (
    <section>
        <Sidebar2 />
        <div className={`bg-white shadow-md hover:shadow-lg xl:w-[93.5%] w-[75%] sm:w-[85%] md:w-[87%] lg:w-[90%] p-3 rounded-lg sm:flex justify-between items-center ${isOpen ? "" : "ml-22 fixed"}`}>
            <h1 className='sm:text-2xl text-lg font-bold font-serif mb-2'>Dashboard</h1>
            <div className='flex items-center gap-4'>
                <div className='flex gap-2 border border-gray-400 rounded-full px-3 py-1 items-center'>
                    <img src={assets.search} alt="search" />
                    <input type="text" placeholder='Search for jobs..' className='border-none outline-none' />
                </div>
                <img src={assets.notification} alt="notification" className='border border-1 rounded-lg  p-1' />
            </div>
        </div>

        <div className='xl:pt-24 pt-30 sm:pt-20'> 
        <div className='ml-24 bg-teal-500 xl:w-[76%] w-[74%] sm:w-[83%] md:w-[85%] lg:w-[89%] xl:w-[93%] rounded-lg h-fit md:flex justify-between items-center'>
            <div className='flex flex-col gap-10 ml-8'>
                <h1 className='text-5xl text-white'>Welcome Back</h1>
                <h2 className='text-4xl text-white font-bold'>John Doe</h2>
            </div>
            <img src={assets.db_img1} alt="img1" className='w-65 h-65 mr-8' />
        </div>
        </div>

        <div className='ml-24 mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-10 lg:flex items-center xl:gap-16'>
            <div className='bg-white shadow-md hover:shadow-lg w-64 sm:w-56 md:w-48 h-32 flex flex-col justify-between rounded-lg'>
                <div className='flex flex-col mx-4 mt-2 gap-2'>
                    <h3 className='text-lg font-semibold'>Job Recommended</h3>
                    <span className='xl:text-2xl font-bold '>2,456</span>
                </div>
                <span className='mx-3 mb-2 text-lg text-teal-500 font-semibold'>+2.5%</span>
            </div>
            <div className='bg-white shadow-md hover:shadow-lg w-64 sm:w-56 md:w-48 h-32 flex flex-col justify-between rounded-lg'>
                <div className='flex flex-col mx-4 mt-2 gap-2'>
                    <h3 className='text-lg font-semibold'>Total Applications</h3>
                    <span className='xl:text-2xl font-bold '>4,561</span>
                </div>
                <span className='mx-3 mb-2 text-lg text-teal-500 font-semibold'>-4.4%</span>
            </div>
            <div className='bg-white shadow-md hover:shadow-lg w-64 sm:w-56 md:w-44 h-32 flex flex-col justify-between rounded-lg'>
                <div className='flex flex-col mx-4 mt-2 gap-2'>
                    <h3 className='text-lg font-semibold'>Current Job</h3>
                    <span className='xl:text-2xl font-bold '>125</span>
                </div>
                <span className='mx-3 mb-2 text-lg text-teal-500 font-semibold'>+1.5%</span>
            </div>
            <div className='bg-white shadow-md hover:shadow-lg w-6 sm:w-56 md:w-48 h-32 flex flex-col justify-between rounded-lg'>
                <div className='flex flex-col mx-4 mt-2 gap-2'>
                    <h3 className='text-lg font-semibold'>Job Completed</h3>
                    <span className='xl:text-2xl font-bold '>2,456</span>
                </div>
                <span className='mx-3 mb-2 text-lg text-teal-500 font-semibold'>+4.5%</span>
            </div>
        </div>

        <div className='ml-26 mt-8 lg:flex gap-8 mb-10 xl:mb-2'>
            {/* Application and chart*/}
            <div className='bg-white shadow-md hover:shadow-lg w-70 sm:w-[95%] lg:w-[60%] h-104 rounded-lg mb-8'>
                <div className='flex items-center justify-between mx-4 mt-1'>
                    <h2 className='text-xl text-teal-500 font-semibold'>Application Response</h2>
                    <h3><a href="" className='text-base text-orange-600 font-serif'>Download Report</a></h3>
                </div>
                <div className='sm:w-90 sm:h-90 lg:w-70 lg:h-70 w-64 h-64 mt-3 sm:ml-12 lg:ml-8 xl:ml-12'>
                    <Doughnut data={data} options={options} />
                </div>
            </div>
            {/* Recent Activities */}
            <div className='bg-white shadow-md hover:shadow-lg w-70 h-104 sm:w-[95%] lg:w-[90%] mr-2 rounded-lg mb-4'>
                <div className='sm:flex items-center sm:justify-between mx-2 mt-1'>
                    <h2 className='text-lg font-semibold mx-4'>Recent Job</h2>
                    <div className={`flex items-center gap-2 rounded-full`} >
                        <button className={`px-4 py-1 rounded-full text-gray-600 ${active ? "bg-teal-500 px-4 py-1 text-white" : "bg-transparent"} cursor-pointer hover:underline underline-offset-4 decoration-1 hover:text-white`} onClick={() => setActive(true)}>Monthly</button>
                        <button className={`px-4 py-1 rounded-full text-gray-600 ${active ? "bg-teal-500 px-4 py-1 text-white" : "bg-transparent"} cursor-pointer hover:underline underline-offset-4 decoration-1 hover:text-white`} onClick={() => setActive(true)}>Weekly</button>
                        <button className={`px-4 py-1 rounded-full text-gray-600 ${active ? "bg-teal-500 px-4 py-1 text-white" : "bg-transparent"} cursor-pointer hover:underline underline-offset-4 decoration-1 hover:text-white`} onClick={() => setActive(true)}>Today</button>
                    </div>
                </div>
                <div className='overflow-x-auto'>
                    <table className='mt-4 rounded-xl min-w-full text-sm text-left'>
                        <thead className='bg-teal-500 text-white'>
                        <tr>
                            <th className='p-3'>Job Title</th>
                            <th className='p-3'>Category</th>
                            <th className='p-3'>Openings</th>
                            <th className='p-3'>Applications</th>
                            <th className='p-3'>Status</th>
                        </tr>
                        </thead>
                        <tbody className='bg-white'>
                            {dashboardJobs.map((item, index) => (
                                <tr key={index} className='border-b'>
                                    <td className='p-4'>{item.title}</td>
                                    <td className='p-4'>{item.category}</td>
                                    <td className='p-4'>{item.openings}</td>
                                    <td className='p-4'>{item.applications}</td>
                                    <td className='p-5'><span className={`px-3 py-1 text-white rounded-full text- base ${item.status === "active" ? "bg-teal-500" : "bg-orange-500"}`}>{item.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard2