import React, { useEffect } from "react";
import style from "./Contact.module.css";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <div className="titleAndDesc pt-[45px]">
        <h1 className="uppercase text-3xl  text-[#2C3E50] md:text-4xl  font-bold flex gap-4 align-middle justify-center">
          contact <span>section</span>
        </h1>
      </div>
      {/* ----- after the head------- */}
      <div className="star gap-6 flex justify-center items-center pt-5">
        <div className="bg-[#2C3E50] w-20 h-1"></div>
        <i className="fa-solid fa-star block  text-[#2C3E50]"></i>
        <div className="bg-[#2C3E50] w-20 h-1"></div>
      </div>
      {/* ----------inputs---------- */}
    

<form className="max-w-md mx-auto pt-[45px] md:flex flex-col justify-center md:items-start mb-24">
  <div className="relative left-14 md:left-0 z-0 w-full mb-8 group">
    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 w-72  px-0 md:w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_email" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
  </div>
  <div className="relative left-14 md:left-0 z-0 w-full mb-8 group">
    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 w-72   px-0 md:w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_email" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
  </div>
  <div className="relative left-14 md:left-0 z-0 w-full mb-8 group">
    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 w-72   px-0 md:w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_email" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>
  </div>
  <div className="relative left-14 md:left-0 z-0 w-full mb-8 group">
    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 w-72   px-0 md:w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_email" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword</label>
  </div>
  <button type="submit" className="text-white md:flex bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-36  md:w-24 sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</form>



    </>
  );
}
