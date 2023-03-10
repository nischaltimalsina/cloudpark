import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import CloudImg from "../assets/cloud.svg";
import IoTImg from "../assets/iot.svg";
import EcomImg from "../assets/ecom.svg";
import MobileImg from "../assets/mobile.svg";
import TrainingImg from "../assets/training.svg";
import WebsiteImg from "../assets/website.svg";
import EnterpriseImg from "../assets/enterprise.svg";

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

        <div className=''>
          <div className='py-12'>
            <ul className='space-y-16 list-decimal list-inside font-light'>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-magenta text-5xl"
                      : "text-5xl hover:text-magenta ease-in-out duration-200"
                  }
                  to={"cloud"}>
                  Cloud
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-magenta text-5xl"
                      : "text-5xl hover:text-magenta ease-in-out duration-200"
                  }
                  to={"training"}>
                  Training & Consulting
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-magenta text-5xl"
                      : "text-5xl hover:text-magenta ease-in-out duration-200"
                  }
                  to={"enterprise"}>
                  Enterprise Solutions
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-magenta text-5xl"
                      : "text-5xl hover:text-magenta ease-in-out duration-200"
                  }
                  to={"iot"}>
                  IoT Solutions
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-magenta text-5xl"
                      : "text-5xl hover:text-magenta ease-in-out duration-200"
                  }
                  to={"website"}>
                  Websites & Portals
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-magenta text-5xl"
                      : "text-5xl hover:text-magenta ease-in-out duration-200"
                  }
                  to={"ecom"}>
                  E-Commerce Solution
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-magenta text-5xl"
                      : "text-5xl hover:text-magenta ease-in-out duration-200"
                  }
                  to={"mobile"}>
                  Web & Mobile Development:
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='grid grid-cols-4 py-24 '>
            <div className='col-span-2'></div>
            <div className='col-span-2 grid grid-cols-2'>
              <div className='col-span-1 p-6 flex items-center border-b border-r border-neutral-400'>
                <img src={CloudImg} alt='' />
              </div>
              <div className='col-span-1 border-b border-t border-neutral-400 text-lg font-light py-12 px-6'>
                <Cloud />
              </div>
              <div className='col-span-1  border-neutral-400 text-lg font-light py-12 px-6'>
                <Training />
              </div>
              <div className='col-span-1 p-6 flex items-center border-r border-neutral-400'>
                <img src={TrainingImg} alt='' />
              </div>
              <div className='col-span-1 px-6 flex items-center border-t border-b border-l border-neutral-400'>
                <img src={IoTImg} alt='' />
              </div>
              <div className='col-span-1 border-b border-t border-neutral-400 text-lg font-light py-12 px-6'>
                <IoT />
              </div>
              <div className='col-span-1 border-b  border-neutral-400 text-lg font-light py-12 px-6'>
                <Enterprise />
              </div>
              <div className='col-span-1 p-6 border-b border-r border-l flex items-center border-neutral-400'>
                <img src={EnterpriseImg} alt='' />
              </div>
              <div className='col-span-1 p-6 border-b  flex items-center border-neutral-400'>
                <img src={WebsiteImg} alt='' />
              </div>
              <div className='col-span-1 border-b border-l border-neutral-400 text-lg font-light py-12 px-6'>
                <Website />
              </div>
              <div className='col-span-1 border-b border-neutral-400 text-lg font-light py-12 px-6'>
                <Mobile />
              </div>
              <div className='col-span-1 p-6 border-b border-r flex items-center border-neutral-400'>
                <img src={MobileImg} alt='' />
              </div>
              <div className='col-span-1 p-6 border-b border-r border-l flex items-center border-neutral-400'>
                <img src={MobileImg} alt='' />
              </div>
              <div className='col-span-1 border-b  border-neutral-400 text-lg font-light py-12 px-6'>
                <Mobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

function Cloud() {
  return (
    <>
    <h3 className="py-4 text-3xl text-magenta">Cloud</h3>
      <p className=''>
        Our cloud services are designed to help businesses streamline their
        operations and increase efficiency. We offer a range of hosting,
        storage, and cloud-based software solutions to meet the unique needs of
        each of our clients. Our cloud services are built on top of leading
        cloud platforms, including Amazon Web Services (AWS), Google Cloud, and
        Huawei Cloud.
      </p>
    </>
  );
}
function Training() {
  return (
    <><h3 className="py-4 text-3xl text-magenta">Training & Consuting</h3>
      <p className=''>
        We offer training and consulting services to help businesses stay
        up-to-date with the latest technology trends and best practices. Our
        team of experts can provide personalized training and consulting
        services to help businesses understand and implement new technologies
        and processes.
      </p>
    </>
  );
}
function Enterprise() {
  return (
    <><h3 className="py-4 text-3xl text-magenta">Enterprise Solutions</h3>
      <p className=''>
        We understand that large businesses often have unique IT needs that
        require custom solutions. That's why we offer enterprise solutions that
        are tailored to fit the specific needs of each of our clients. Our team
        can help businesses integrate new systems and processes with their
        existing infrastructure, streamline their operations, and increase
        efficiency.
      </p>
    </>
  );
}
function IoT() {
  return (
    <>
      <p className=''>
        The Internet of Things (IoT) is revolutionizing the way businesses
        operate by connecting devices and systems to the internet. We offer a
        range of IoT solutions to help businesses connect and automate their
        devices and systems. With our IoT solutions, businesses can collect and
        analyze data from their devices to gain insights and make more informed
        decisions.
      </p>
    </>
  );
}
function Website() {
  return (
    <>
      <p className=''>
        Our cloud services are designed to help businesses streamline their
        operations and increase efficiency. We offer a range of hosting,
        storage, and cloud-based software solutions to meet the unique needs of
        each of our clients. Our cloud services are built on top of leading
        cloud platforms, including Amazon Web Services (AWS), Google Cloud, and
        Huawei Cloud.
      </p>
    </>
  );
}
function Ecom() {
  return (
    <>
      <p className=''>
        We offer e-commerce solutions to help businesses sell their products and
        services online. Our team can design and develop an e-commerce platform
        that is easy to use and optimized for conversions. With our e-commerce
        solutions, businesses can reach a wider audience and increase sales.
      </p>
    </>
  );
}
function Mobile() {
  return (
    <>
      <p className=''>
        We design and develop custom web and mobile apps to meet the unique
        needs of our clients. Our team can help businesses
      </p>
    </>
  );
}

export { Cloud, Training, Enterprise, IoT, Ecom, Website, Mobile };
