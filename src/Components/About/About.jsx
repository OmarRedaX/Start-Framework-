import React, { useEffect } from "react";
import style from "./About.module.css";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <div className="bg-[#1ABC9C] h-screen ">
        <div className="relative top-10 md:top-[20%] ">
        <div className=" w-60 m-auto pt-10 ">
          {/* ---------head home-------- */}
          <div className="titleAndDesc py-5">
            <h1 className="uppercase md:text-4xl text-3xl  text-white font-bold flex gap-4 align-middle justify-center">
              about <span>component</span>
            </h1>
          </div>
          {/* ----- after the head------- */}
          <div className="star flex justify-between items-center">
            <div className="bg-white w-20 h-1"></div>
            <i className="fa-solid fa-star block text-white "></i>
            <div className="bg-white w-20 h-1"></div>
          </div>
          {/* -------Desc of the tittle----- */}
          <div className="text-white p-2 md:p-0 flex w-96 md:w-[500%] flex-col  md:flex-row   justify-start gap-4 items-center translate-x-[-19%] md:translate-x-[-39%] ">
            <p className="p-3 text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className=" p-3 text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
