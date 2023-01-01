import React, { useState } from "react";
import Logo from "../assets/animatedlogo.gif";

const Sidebar = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle =()=>{
        setToggle(prev=>!prev)
    }
  return (
    <aside className='h-full hidden sm:flex w-32 px-4  flex-col justify-between items-center overflow-hidden pt-10 pb-32 selection:bg-neutral-300'>
      <img src={Logo} alt="" className="opacity-0" />
      <Menu toggle={toggle} handleToggle={handleToggle} />
      <div className='flex justify-end'>
        <p className='-rotate-90 text-lg'>contact@cloudpark.com</p>
      </div>
    </aside>
  );
};

export default Sidebar;

const Menu = ({toggle, handleToggle}) => {
  return (
    <button onClick={handleToggle} className="opacity-0">
      <svg xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        strokeWidth={1}
        stroke='black'
        className='w-12 h-12 fill-white dark:stroke-white' >
      <line   strokeLinecap="round" strokeLinejoin="round"  y2="4" x2="24" y1={!toggle?"4":"20"} x1="1" fill="none"/>
      {!toggle?<line  strokeLinecap="round" strokeLinejoin="round"  y2="12" x2="24" y1="12" x1="1" fill="none"/>:""}
      <line  strokeLinecap="round" strokeLinejoin="round"  y2="20" x2="24" y1={!toggle?"20":"4"} x1="1" fill="none"/>
      </svg>
    </button>
  );
};
