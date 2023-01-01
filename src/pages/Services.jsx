import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <div className='relative h-auto w-full '>
      <div className='h-full w-full bg-gray-100 absolute opacity-[.92] z-0 '></div>
      <Navbar />
      <div className='w-full py-12 px-6 lg:px-32 mx-auto z-10 isolate'>
        <div className='w-full '>
          <h2 className='text-2xl text-start my-12 '>What We Do</h2>
        </div>
        <div className=' w-full flex items-center pb-32'>
          <p className=' text-3xl max-w-6xl font-light leading-[1.5]'>
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
            providing the tools and support they need to grow and thrive.{" "}
          </p>
        </div>

        <div className='grid grid-cols-4'>
          <div className='col-span-2 text- '>
            <ul className='space-y-16'>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-7xl"
                      : "text-6xl hover:text-7xl ease-in-out duration-200"
                  }
                  to={"cloud"}>
                  Cloud
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-7xl"
                      : "text-6xl hover:text-7xl ease-in-out duration-200"
                  }
                  to={"cloud"}>
                  Training & Consulting
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-7xl"
                      : "text-6xl hover:text-7xl ease-in-out duration-200"
                  }
                  to={"cloud"}>
                  Cloud
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-7xl"
                      : "text-6xl hover:text-7xl ease-in-out duration-200"
                  }
                  to={"cloud"}>
                  Cloud
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-7xl"
                      : "text-6xl hover:text-7xl ease-in-out duration-200"
                  }
                  to={"cloud"}>
                  Cloud
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
