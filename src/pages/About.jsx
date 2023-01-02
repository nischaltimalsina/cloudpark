import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className='relative h-auto w-full bg-office '>
      <div className="h-full w-full bg-gray-100 absolute opacity-[.92] z-0 ">
      </div>
      
      <Navbar />
      <div className='w-full py-12 px-6 lg:px-32 mx-auto z-10 isolate'>
        <div className='w-full'>
          <h2 className='text-4xl text-center my-12 font-bold uppercase '>Who We Are</h2>
        </div>
        <div className='h-80 max-w-7xl object-center mx-auto mt-24 hidden'>
          <img
            src='https://images.pexels.com/photos/7989234/pexels-photo-7989234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            className='h-full w-full object-cover'
            alt=''
          />
        </div>
        <p className='py-12 text-lg leading-9 tracking-wide max-w-7xl mx-auto font-light'>
          At Cloudpark, we understand the crucial role that technology plays in
          driving business success. That's why we are a team of dedicated
          professionals who are deeply passionate about using technology to help
          our clients achieve their goals. <br /><br />
          Founded in 2019, we have been providing innovative and reliable IT
          solutions to businesses of all sizes for over 4 years. Our team of
          experts has extensive experience in cloud computing, web and mobile
          development, IoT, and more. We are constantly learning and staying
          up-to-date with the latest trends and innovations in the industry, so
          that we can provide our clients with the most advanced solutions
          available.
          <br /><br />
          We believe in building long-lasting partnerships with our clients and
          being a trusted resource for all of their IT needs. Our goal is to
          provide exceptional value and return on investment for all of our
          services, helping our clients succeed and grow. We understand that
          every business is unique, which is why we work closely with our
          clients to understand their specific needs and challenges, and provide
          tailored solutions and support to help them achieve their goals.
          <br /><br />
          We are proud of the work we do and the value we bring to our clients.
          If you are looking for a reliable and forward-thinking IT partner,
          look no further than Cloudpark. We would be honored to work with you
          and help your business thrive. Our team is dedicated to helping you
          succeed, and we are committed to being a valuable partner in your
          success. Thank you for considering Cloudpark as your IT partner. We
          look forward to the opportunity to work with you and help your
          business thrive. <br /><br />
          Thank you for considering Cloudpark as your IT partner. We look
          forward to the opportunity to work with you and help your business
          thrive.
        </p>
      </div>
    </div>
  );
};

export default About;
