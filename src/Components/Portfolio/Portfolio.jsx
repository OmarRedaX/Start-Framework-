import React, { useEffect, useState } from "react";
import style from "./Portfolio.module.css";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

const images = [{ src: port1 }, { src: port2 }, { src: port3 }];

function App() {
useEffect(() =>{
  document.title = "Portfolio"
},[])
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <div className="titleAndDesc py-7">
        <h1 className="uppercase text-2xl md:text-4xl  font-bold flex gap-4 align-middle justify-center">
          portfolio <span>component</span>
        </h1>
      </div>
      <div className="star gap-6 flex justify-center items-center">
        <div className="bg-black w-20 h-1"></div>
        <i className="fa-solid fa-star block  "></i>
        <div className="bg-black w-20 h-1"></div>
      </div>
      <div className="image-gallery md:w-1/3 md:p-5 md:flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openModal(image)}
            className="thumbnail p-4 "
          />
        ))}
      </div>
      <div className="image-gallery md:w-1/3 md:p-5  md:flex ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openModal(image)}
            className="thumbnail p-4 "
            
          />
        ))}
      </div>

      {isOpen && (
        <div className="p-4 homePh modal">
          <span className="close md:px-[35px]" onClick={closeModal}>
            &times;
          </span>
          <div className="relative w-[100%] md:mt-0 mt-28 p-6">
            <img
              src={selectedImage.src}
              className="modal-content  md:w-[40%] w-[100%] rounded-xl cursor-pointer"
              alt="image"
            />
            <div className="caption">{selectedImage.alt}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
