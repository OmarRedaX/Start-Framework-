import React, { useEffect } from "react";
import style from "./Home.module.css";
import logo from "../../assets/homepage.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className="bg-[#1ABC9C] h-screen ">
        <div className="photo w-60 m-auto pt-10">
          {/* -----img home-------- */}
          <div>
            <img src={logo} className="w-full" alt="" />
          </div>
          {/* ---------head home-------- */}
          <div className="titleAndDesc py-5">
            <h1 className="uppercase text-3xl md:text-4xl text-white font-bold flex gap-4 align-middle justify-center">
              start <span>framework</span>
            </h1>
          </div>
          {/* ----- after the head------- */}
          <div className="star flex justify-between items-center">
            <div className="bg-white w-20 h-1"></div>
            <i className="fa-solid fa-star block text-white "></i>
            <div className="bg-white w-20 h-1"></div>
          </div>
          {/* -------Desc of the tittle----- */}
          <div className="flex gap-2 justify-center items-center py-5 text-white text-md">
            <h1 className="flex gap-1">
              Graphic<span>Artist </span>-
            </h1>
            <h1 className="flex gap-1">
              Web<span>Designer</span> -
            </h1>
            <h1>Illustrator </h1>
          </div>
        </div>
      </div>
    </>
  );
}
