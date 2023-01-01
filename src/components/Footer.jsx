import React from "react";

const Footer = () => {
  return (
    <div id="footer" className='h-[50%] w-full bg-neutral-700  text-white '>
      <div className='max-w-7xl grid grid-cols-3 mx-auto py-24'>
        <div className='col-span-1 px-12'>
          <h3>Cloudpark</h3>
        </div>
        <div className='col-span-1 px-12'>
          <h3 className='uppercase'>Useful Links</h3>
          <ul className='font-light py-12 space-y-3'>
            <li className='hover:text-magenta'>
              <a href='/'>Home</a>
            </li>
            <li className='hover:text-magenta'>
              <a href='/about'>About</a>
            </li>
            <li className='hover:text-magenta'>
              <a href='/services'>Services</a>
            </li>
            <li className='hover:text-magenta'>
              <a href='/contact'>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='col-span-1 px-12'>
          <h3>Contact</h3>
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
      <div className='text-center font-light tracking-widest'>
        All Rights Reserved. CLOUDPARK 2022 | Designed by{" "}
        <a href='https://nischaltimalsina.com.np' target={"_blank"}>
          Nischal Timalsina
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
