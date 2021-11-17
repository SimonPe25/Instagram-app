import React from "react";
import "./photoGalery.scss";
import Gallery from "./Gallery";



const PhotoGalery = () => {
  return (
    <div className="backgroundPhone">
      <div className="galery-container">
        <Gallery/>
      </div>
    </div>
  );
};

export default PhotoGalery;