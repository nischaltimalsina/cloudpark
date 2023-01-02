import React from 'react'
import Navbar from "../components/Navbar";


const Contact = () => {
  return (
    <div className='relative h-auto w-full '>
      <div className="h-full w-full bg-gray-100 absolute opacity-[.92] z-0 ">
      </div>
      
      <Navbar />
      <div className='w-full py-12 px-6 lg:px-32 mx-auto z-10 isolate'>
        <div className='w-full'>
          <h2 className='text-4xl text-center my-12 font-bold uppercase '>Contact Us</h2>
        </div>
        <div className='h-80 max-w-7xl object-center mx-auto mt-24 hidden'>
          <img
            src='https://images.pexels.com/photos/7989234/pexels-photo-7989234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            className='h-full w-full object-cover'
            alt=''
          />
        </div>
        <div className="grid grid-cols-2 py-24 gap-16 md:gap-0">
          <div className="col-span-2 md:col-span-1 order-last md:order-first text-lg flex md:justify-center sm:px-12">
         <div className=''>
         <h3 className='text-xl'>Contact Details</h3>
          <ul className='font-light py-12 space-y-3'>
            <li className=''>
              <p>+977 9845677777</p>
            </li>
            <li className=''>
              <p>cloud-park@hotmail.com </p>
            </li>{" "}
            <li className=''>
              <p>cloud-park@outlook.com</p>
            </li>
            <li className=''>
              <p>
                Birgunj, Parsa <br /> Madhesh Province, Nepal
              </p>
            </li>
          </ul>
         </div>
          </div>
          <div className="col-span-2 md:col-span-1 w-full flex justify-center">
          <form action="" className='w-full '>
        <ul className='w-full flex flex-col items-center gap-10 text-neutral-600  sm:px-12'>
          <li className='relative h-12 w-full lg:w-[32rem]'>
            <label className='absolute -top-3 left-2 bg-neutral-100 bg-blend-exclusion px-2 text-lg'  htmlFor="name">Full Name
            </label>
            <input id='name' type="text" className='h-full w-full outline-none px-4 border font-light border-neutral-400 bg-neutral-100 rounded-lg'/>
          </li>
          <li className='relative h-12 w-full lg:w-[32rem]'>
            <label className='absolute -top-3 left-2 bg-neutral-100 bg-blend-exclusion px-2 text-lg'  htmlFor="mobile">Mobile
            </label>
            <input id='mobile' type="text" className='h-full w-full outline-none px-4 border font-light border-neutral-400 bg-neutral-100 rounded-lg'/>
          </li>
          <li className='relative h-12 w-full lg:w-[32rem]'>
            <label className='absolute -top-3 left-2 bg-neutral-100 bg-blend-exclusion px-2 text-lg'  htmlFor="email">E-mail
            </label>
            <input id='email' type="text" className='h-full w-full outline-none px-4 border font-light border-neutral-400 bg-neutral-100 rounded-lg'/>
          </li>
          <li className='relative h-auto w-full lg:w-[32rem]'>
            <label className='absolute -top-3 left-2 bg-neutral-100 bg-blend-exclusion px-2 text-lg'  htmlFor="message">Message
            </label>
            <textarea  id='message' className='h-full font-light w-full outline-none p-4 border border-neutral-400 bg-neutral-100 rounded-lg '/>
          </li>
          <li className="h-12 w-full lg:w-[32rem]">
            <button className="h-full w-full bg-magenta rounded-lg text-white"> Send Message</button>
          </li>
        </ul>
       </form>
          </div>
        </div>

     
      </div>
    </div>
  )
}

export default Contact

