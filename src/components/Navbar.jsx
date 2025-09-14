import React from "react";
// import Logo from "../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" flex justify-around py-[20px] items-center text-black  w-[100%] bg-[white] ">
      <img
        className=" hover:transform-gpu hover:scale-120 active:scale-80
                        transition-all duration-[0.5s] shadow-lg "
        src=""
        alt=""
      />
      <ul className=" flex justify-center items-center gap-[30px]">
        <li className=" hover:text-[#ff6f16] hover:transform-gpu hover:translate-y-[-7px] hover:scale-120 transition-all duration-[0.4s] active:text-red-600 active:scale-90 active:translate-y-[7px] cursor-none">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:text-[#ff6f16] hover:transform-gpu hover:translate-y-[-7px] hover:scale-120 transition-all duration-[0.4s] active:text-red-600 active:scale-90 active:translate-y-[7px] cursor-none">
        </li>
        <li className=" hover:text-[#ff6f16] hover:transform-gpu hover:translate-y-[-7px] hover:scale-120 transition-all duration-[0.4s] active:text-red-600 active:scale-90 active:translate-y-[7px] cursor-none">
          <Link to="/about">About us</Link>
        </li>
        <li className=" hover:text-[#ff6f16] hover:transform-gpu hover:translate-y-[-7px] hover:scale-120 transition-all duration-[0.4s] active:text-red-600 active:scale-90 active:translate-y-[7px] cursor-none">
          <Link to="/services">Services</Link>
        </li>
        <li className=" hover:text-[#ff6f16] hover:transform-gpu hover:translate-y-[-7px] hover:scale-120 transition-all duration-[0.4s] active:text-red-600 active:scale-90 active:translate-y-[7px] cursor-none">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <div className=" text-black flex item-center gap-[20px] text-2xl">
        <CiSearch
          className="  hover:transform-gpu hover:scale-150 active:scale-80
                        transition-all duration-[0.5s]  hover:text-[#ff6f16]"
        />
        <CiUser
          className=" hover:transform-gpu hover:scale-150 active:scale-80
                        transition-all duration-[0.5s]  hover:text-[#ff6f16]"
        />
        <CiHeart
          className="  hover:transform-gpu hover:scale-150 active:scale-80
                        transition-all duration-[0.5s]  hover:text-[#ff6f16]"
        />
        <IoBagOutline
          className=" hover:transform-gpu text-[20px] hover:scale-150 active:scale-80
                        transition-all duration-[0.5s]  hover:text-[#ff6f16]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
