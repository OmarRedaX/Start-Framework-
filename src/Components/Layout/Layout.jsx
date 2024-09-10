import React from 'react'
import style from "./Layout.module.css"
import Navbar from "../Navbar/Navber"
import { Outlet } from 'react-router-dom'
import Footer from "../Footer/Footer"



export default function Layout() {
  return <>
  <Navbar />
  <div className="pt-24">
    <Outlet />
  </div>
  <Footer />
 
  </>
}