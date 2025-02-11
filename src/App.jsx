import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Notfound from "./Components/Notfound/Notfound";

function App() {

  let Pages = createBrowserRouter([
    {path : "" , element : <Layout /> ,children :[
      {index:true ,element : <Home />},
      {path : "about" ,element : <About />},
      {path : "portfolio" ,element : <Portfolio />},
      {path : "contact" ,element : <Contact />},
      {path : "*" ,element : <Notfound />},
    ]}
  ])
  return <RouterProvider router={Pages}></RouterProvider>

}


export default App
