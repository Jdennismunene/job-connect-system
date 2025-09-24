import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Register from './components/Register'
import Contact from './components/Contact'
import Jobs from './components/Jobs'
import Dashboard from './pages/Client/Dashboard'
import Sidebar from './components/Client/Sidebar'
import Job_Recommended from './pages/Client/Job_Recommended'
import Current_Jobs from './pages/Client/Current_Jobs'
import Applied_Jobs from './pages/Client/Applied_Jobs'
import Completed_Jobs from './pages/Client/Completed_Jobs'
import Profile from './pages/Client/Profile'
import Sidebar2 from './components/Employer/Sidebar2'
import Dashboard2 from './pages/Employer/Dashboard2'
import Job_Posted from './pages/Employer/Job_Posted'
import Job_Done from './pages/Employer/Job_Done'
import Hirings from './pages/Employer/Hirings'
import Total_Application from './pages/Employer/Total_Application'
import Profile2 from './pages/Employer/Profile2'
import Register2 from './components/Register2'
import Login from './components/Login'

function App() {
  const location = useLocation();
  const hideNavbar = ['/register', '/login', '/register2', '/sidebar', '/sidebar2', '/sidebar/dashboard', '/sidebar/job_recommended', '/sidebar/current_jobs', '/sidebar/applied_jobs', '/sidebar/completed_jobs', '/sidebar/profile', '/sidebar2/dashboard2', '/sidebar2/job_posted', '/sidebar2/jobs_done', '/sidebar2/hirings', '/sidebar2/total_applications', '/sidebar2/profile'];
  return (
    <>
    {!hideNavbar.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/sidebar'  element={<Sidebar />}/>
        <Route path='/sidebar/dashboard' element={<Dashboard />}/>
        <Route path='/sidebar/job_recommended' element={<Job_Recommended />}/>
        <Route path='/sidebar/current_jobs' element={<Current_Jobs />}/>
        <Route path='/sidebar/applied_jobs' element={<Applied_Jobs />}/>
        <Route path='/sidebar/completed_jobs' element={<Completed_Jobs />}/>
        <Route path='/sidebar/profile' element={<Profile />}/>
        <Route path='/sidebar2' element={<Sidebar2 />}/>
        <Route path='/sidebar2/dashboard2' element={<Dashboard2 />}/>
        <Route path='/sidebar2/job_posted' element={<Job_Posted />}/>
        <Route path='/sidebar2/jobs_done' element={<Job_Done />}/>
        <Route path='/sidebar2/hirings' element={<Hirings />}/>
        <Route path='/sidebar2/total_application' element={<Total_Application />}/>
        <Route path='/sidebar2/profile' element={<Profile2 />}/>
        <Route path='/register2' element={<Register2 />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
