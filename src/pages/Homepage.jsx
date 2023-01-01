import React, { useState, useEffect } from "react";
import Coffee from "../assets/coffee.svg";
import AnimatedLogo from "../assets/animatedlogo.gif";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <section className='relative h-auto w-full  overflow-y-scroll '>
      <Hero />
      <Featured />
      <Services />
      <Testimonial />
    </section>
  );
};

export default Homepage;

const Hero = () => {
  return (
    <div className='h-screen w-full relative bg-home '>
      <div className='h-full w-full bg-gray-100 absolute opacity-[.85] z-0 '></div>
      <div className='w-full h-32 flex justify-end items-center gap-12  lg:px-32 z-30 isolate text-neutral-600 tracking-wide '>
        <a
          href='#'
          className='relative h-10 font-bold text-xl  pr-14  flex items-center   text-magenta ease-in-out duration-150'>
          Coffee and catch up?
          <span className='absolute -right-4 -top-3'>
            <img src={Coffee} alt='' className='h-14 ' />
          </span>
        </a>
      </div>
      <div className='h-full w-full flex flex-col justify-center items-center lg:px-32  z-10'>
        <div className='w-full relative mx-auto mb-48'>
          <img
            className='h-64  absolute  -top-40 -left-20'
            src={AnimatedLogo}
            alt=''
          />
          <div className='absolute h-[16.05rem] -top-[8.44rem] -left-[4.1rem]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 520 500'
              className='h-56 w-[13.9rem] fill-neutral-600'>
              <g>
                <path
                  d='M246.7,85.8c-21.6,5-40.3,16.1-60.5,35.9c-7.4,7.3-15,13.7-16.9,14.4c-2.4,0.9-6.2,0.8-12.8-0.5c-25.4-5.5-44.5-5-65.3,1.6
                    C69.7,144,54.3,153.4,39.6,169c-11.3,11.8-19.1,24.5-24.7,39.6C-1.5,253.4,7.9,300,40,333.3c10.9,11.3,20.7,18.7,32.9,24.9
                    c20.3,10.2,41.4,13.8,68.1,11.7c8.3-0.7,16.7-0.9,18.5-0.4c1.7,0.4,8.1,5.4,14.1,10.9c25.9,24.3,42.7,33.5,67.3,36.8
                    c18,2.6,40.7-2.7,60.6-14.1c13.3-7.5,21.4-13.8,35.5-27.4c6-6,12.6-11.3,14.4-11.7c2-0.5,8.6,0.7,16.5,3
                    c11.2,3.4,15.3,3.8,29.2,3.8c34.3-0.1,65.2-13.3,87.6-37.3c22.3-23.8,33.2-51.2,33-83.4c-0.1-19.1-3.1-31.8-11.2-48.8l-5.2-11
                    h-26.5h-26.3l5,5.5c7,7.8,14.9,20.3,18.3,29.3c2.1,5.5,3.1,11.6,3.6,22.6c1.1,25.3-4.6,40.6-21,57.2c-28.7,29.3-64.5,33-101.6,10.7
                    l-7.8-4.8l-5.5,6.6c-21.2,25.5-54,48.5-75.6,52.9c-12.5,2.6-27.9,1.2-37.2-3.4c-9.5-4.7-21.1-16.5-21.1-21.5c0-2.7,5.2-9,23.2-27.8
                    c51.6-54.1,63-66.4,64.9-69.1c1.6-2.3,1.9-8.5,1.6-32.1l-0.4-29.4l-53.9,57.1c-64.2,67.8-68.6,72.1-81.4,78.3
                    c-30.8,14.5-62.9,8.5-88.5-16.7c-15.4-15.2-21.1-28.2-22.3-51c-1.3-25.1,4-39.4,21.8-57.2c17.7-18,36.7-25.7,60.5-24.3
                    c14.8,0.8,25,4.2,38.3,12.8l9.9,6.3l12.1-14.1c29.4-34.3,51.2-53.5,69.9-61.7c7.5-3.2,27-8.6,39.8-11c13-2.4,13.3-2.8,5-8.3
                    C290,86.4,264.9,81.7,246.7,85.8z'
                />
              </g>
            </svg>
          </div>
          <div className='text-[10rem] myfont text-neutral-700 text-center mx-auto w-full'>
            CLOUD PARK
          </div>
          <p className='myont text-8xl font-extrabold w-full text-start z-10'>
            <Typewriter />
          </p>
        </div>
        <Navbar />
      </div>
      <a id='top' href='#hero' className='absolute right-20 bottom-20'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-16 h-16 animate-bounce hover:animate-none '>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3'
          />
        </svg>
      </a>
    </div>
  );
};

const Featured = () => {
  return (
    <>
      <div className='h-screen relative'>
        <div className='ease-in-out duration-300 snap-y scroll-smooth snap-mandatory  max-w-7xl mx-auto h-screen flex flex-col justify-center items-center lg:px-32'>
          <div className='w-full'>
            <h2 className='text-4xl myfont'>Who We Are</h2>
          </div>
          <div className='py-20 text-start w-full'>
            <div className=' text-xl text-wrap font-light tracking-wider leading-8'>
              Cloudpark is a team of dedicated professionals who are passionate
              about technology and its ability to drive business success. With
              over 4 years of experience in providing innovative and reliable IT
              solutions, we have the expertise and drive to help your business
              thrive. We believe in building long-term partnerships with our
              clients and delivering exceptional value and return on investment
              for all of our services. If you are looking for a reliable and
              forward-thinking IT partner, we would be honored to work with you
              and help your business succeed.{" "}
              <a className='text-magenta' href='/about'>
                {" "}
                Read more...
              </a>
            </div>
          </div>
        </div>
        <a
          id='hero'
          href='#services'
          className='absolute right-20 top-0 pb-20 h-full flex items-end'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-16 h-16 animate-bounce hover:animate-none '>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3'
            />
          </svg>
        </a>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <div className='bg-neutral-100  h-screen relative'>
      <div
        id='featured'
        className='ease-in-out duration-300 snap-y scroll-smooth snap-mandatory h-full max-w-7xl mx-auto  flex flex-col justify-center items-center lg:px-32'>
        <div className='w-full'>
          <h2 className='text-4xl text-end myfont'>What We Do</h2>
        </div>
        <div className='py-20 text-end w-full'>
          <div className=' text-xl text-wrap font-light tracking-wider leading-8'>
            At Cloudpark, we offer a wide range of products and services to help
            businesses succeed. Our offerings include products, as well as
            services such as cloud solutions, training and consulting,
            enterprise solutions, IoT solutions, website and portal development,
            e-commerce solutions, and custom web and mobile app development. Our
            team of experts is dedicated to staying up-to-date with the latest
            technology trends and offering the most advanced solutions to our
            clients. We believe in building long-term partnerships with our
            clients and delivering exceptional value and return on investment
            for all of our services. Our goal is to help our clients succeed by
            providing the tools and support they need to grow and thrive.
            <a className='text-magenta' href='/services'>
              {" "}
              Read more...
            </a>
          </div>
        </div>
      </div>
      <a
        id='services'
        href='#testimonial'
        className='absolute right-20 top-0 pb-20 h-full flex items-end'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-16 h-16 animate-bounce hover:animate-none '>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3'
          />
        </svg>
      </a>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className='relative  h-screen '>
      <div
        id='featured'
        className='ease-in-out duration-300 snap-y scroll-smooth snap-mandatory h-full max-w-7xl mx-auto  flex flex-col justify-center items-center lg:px-32'>
        <div className='w-full'>
          <h2 className='text-4xl text-center myfont'>Testimonials</h2>
        </div>
        <div className='py-20 text-end w-full'>
          <div className=' text-xl text-wrap font-light tracking-wider leading-8'>
            At Cloudpark, we offer a wide range of products and services to help
            businesses succeed. Our offerings include products, as well as
            services such as cloud solutions, training and consulting,
            enterprise solutions, IoT solutions, website and portal development,
            e-commerce solutions, and custom web and mobile app development. Our
            team of experts is dedicated to staying up-to-date with the latest
            technology trends and offering the most advanced solutions to our
            clients. We believe in building long-term partnerships with our
            clients and delivering exceptional value and return on investment
            for all of our services. Our goal is to help our clients succeed by
            providing the tools and support they need to grow and thrive.
            <a className='text-magenta' href='/services'>
              {" "}
              Read more...
            </a>
          </div>
        </div>
      </div>
      <a
        id='testimonial'
        href='#testimonial'
        className='fixed right-20 bottom-0 pb-20 flex items-end'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-16 h-16 animate-bounce hover:animate-none '>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3'
          />
        </svg>
      </a>
    </div>
  );
};
function Typewriter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const words = ["Innovative Technology, At Your Fingertips."];

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + words[index][text.length]);
      if (text.length === words[index].length) {
        setIndex((index + 1) % words.length); // reset index to 0 when it reaches the end of the array
        setText("");
      }
    }, 300);
    return () => clearInterval(interval);
  }, [text, index, words]);
  return (
    <div className='text-4xl text-center h-12 text-magenta'>
      {text}
      <span className='text-4xl blink'>|</span>
    </div>
  );
}

/*        <div className='pt-20 hidden grid-cols-2 text-start w-full'>
          <div className='col-span-1 text-xl text-wrap pr-48'>
            At Coudpark, we are dedicated to providing the highest level of
            service and support to our clients. We promise to always be
            responsive and available to answer any questions or concerns you may
            have.
          </div>
          <div className='col-span-1 text-xl text-wrap pr-48'>
            We promise to always be transparent and upfront about our services,
            pricing, and policies. We believe in honesty and aim to deliver
            exceptional value and return on investment for all of our services.
          </div>
        </div> */
