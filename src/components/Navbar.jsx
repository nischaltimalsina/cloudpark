import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="  h-32 flex justify-end items-center gap-12  lg:px-32 z-30 isolate text-2xl tracking-wider mx-auto ">
      <NavLink className={({isActive})=>isActive?"text-magenta":""} to={"/"}>Home</NavLink>
        <NavLink className={({isActive})=>isActive?"text-magenta":""} to={"/about"}>Who We Are</NavLink>
        <NavLink className={({isActive})=>isActive?"text-magenta":""} to={"/services"}>What We Do</NavLink>
        </div>
    </div>
  );
};

export default Navbar;
