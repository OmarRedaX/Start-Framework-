import React from 'react'
import style from "./Notfound.module.css"
import photo from "../../assets/bh.png"


export default function Notfound() {
  
  
  
  
  return <>
    <div className='flex justify-center items-center mt-20 absolute top-0 left-0 right-0 bottom-0'>
      <img src={photo} className='w-[50%] object-cover rounded-[20px]' alt="" />
    </div>
  
  </>
}
