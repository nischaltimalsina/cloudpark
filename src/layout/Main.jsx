import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'



const Main = () => {
  return (
    <div className='h-screen w-screen relative'>
        {/* <Sidebar/> */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main