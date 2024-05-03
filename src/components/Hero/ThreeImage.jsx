import React from 'react';
import ellipseImg1 from "../../assets/Ellipse 3.png"
import ellipseImg2 from "../../assets/Ellipse 4.png"
import ellipseImg3 from "../../assets/Ellipse 5.png"

const ThreeImage = () => {
  return (
    <div className="d-flex my-4">
      <div className="portfolio-image z-2">
        <img src={ellipseImg1} alt="" />
      </div>
      <div className="portfolio-image z-1 " style={{marginLeft:"-15px"}}>
        <img src={ellipseImg2} alt="" />
      </div>
      <div className="portfolio-image z-0 "  style={{marginLeft:"-15px"}}>
        <img src={ellipseImg3} alt="" />
      </div>
    </div>
  );
};

export default ThreeImage;