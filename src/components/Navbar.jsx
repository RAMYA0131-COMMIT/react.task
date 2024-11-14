import React ,{useState ,useEffect}from "react";
import {BsChatSquare} from 'react-icons/bs';
import {FaBars} from 'react-icons/fa';

const Navbar=() =>{
    
    return(
  <div className="w-full min-h[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80"> 
      <ul className="hidden sm:flex px-4">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="#Gallery">Gallery</a>
        </li>
        <li>
            <a href="#Deals">Deals</a>
        </li>
        <li>
            <a href="#Contacts">Contacts</a>
        </li>
      </ul>
    
      <div  className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer"/>
      </div>
      <div className={'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0  h-screen bg-black/90 px-4 py-7 flex flex-col'}>
        <ul className="h-full w-full text-center pt-12">
            <li className="text-2xl py-8">
            <a href="/">Home</a>
            </li>
            <li>
            <a href="#Gallery">Gallery</a>
        </li>
        <li>
            <a href="#Deals">Deals</a>
        </li>
        <li>
            <a href="#Contacts">Contacts</a>
        </li>
        </ul>
      </div>
  </div>
    );
  }
  export default Navbar;