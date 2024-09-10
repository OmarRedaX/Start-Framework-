import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// import style from "./Navber.module.css"
export default function Navber() {
  return <>
  

{/* <nav  className="border-gray-200 z-50 bg-[#2C3E50] dark:bg-gray-800 fixed top-0 left-0 right-0 p-4">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NavLink to="" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-white text-2xl font-semibold whitespace-nowrap uppercase">Start Framework</span>
    </NavLink>
    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-solid-bg" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
        <li>
          <NavLink to="about" className="block py-2 px-3 md:p-0 text-white uppercase" aria-current="page">About</NavLink>
        </li>
        <li>
          <NavLink to="portfolio" className="block py-2 px-3 md:p-0 text-white uppercase">portfolio</NavLink>
        </li>
        <li>
          <NavLink to="contact" className="block py-2 px-3 md:p-0 text-white uppercase">contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav> */}


<Navbar  className='border-gray-200 z-50  bg-[#2C3E50] dark:bg-gray-800 fixed top-0 text-white  left-0 right-0  p-9 '>
<NavLink to="" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center navIgnore text-white text-2xl font-bold whitespace-nowrap uppercase ">Start Framework</span>
    </NavLink>
      <Navbar.Toggle className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '/>
      <Navbar.Collapse>
        <NavLink to="about" active="true" className="block py-2 px-3 md:p-0 text-white uppercase navHov font-bold">
          About
        </NavLink>
        <NavLink as={Link} to="portfolio" className="block py-2 px-3 md:p-0 text-white uppercase navHov font-bold">
          Portfolio
        </NavLink>
        <NavLink to="contact" className="block py-2 px-3 md:p-0 text-white uppercase navHov font-bold">Contact</NavLink>
      </Navbar.Collapse>
    </Navbar>

  
  </>
}
