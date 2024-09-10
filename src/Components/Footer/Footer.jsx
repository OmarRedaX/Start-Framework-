import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-[#2C3E50]  text-white p-6 flex flex-col  gap-7 md:flex-row justify-between items-center md:p-20">
        <div className="leftComp md:ps-48">
          <h2 className="uppercase font-bold text-2xl">location</h2>
          <p>2215 John Daniel Drive</p>
          <p className="pt-5">Clark, MO 65243</p>
        </div>
        <div className="centerComp md:py-4 ">
          <h2 className="font-bold text-2xl">AROUND THE WEB</h2>
          <div className="icons md:pt-3 pt-3">
            <i className="fab fa-facebook p-2 border-[3px] border-white rounded-full m-1"></i>
            <i className="fab fa-linkedin p-2 border-[3px] border-white rounded-full m-1"></i>
            <i className="fab fa-twitter p-2 border-[3px] border-white rounded-full m-1"></i>
            <i className="fab fa-google p-2 border-[3px] border-white rounded-full m-1"></i>
          </div>
        </div>
        <div className="rightComp">
          <h2 className="uppercase font-bold text-2xl">about freelancer</h2>
          <p className="pt-2">
            Freelance is a free to use, licensed Bootstrap theme created <br /> by
            Route
          </p>
        </div>
      </div>
      <div className="lastComp p-5 bg-[#1A252F] text-white flex justify-center items-center md:pe-14">
      Copyright © Your Website 2021
      </div>
    </>
  );
}
