import React from "react";
import { Container } from "react-bootstrap";
import heroImg from "../../assets/hero1.png"
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <Container className="heroSection d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center gap-5 gap-lg-0 pb-5 ">
      {/* the text part div */}
      <HeroText/>
      {/* the hero image div */}
      <div className="heroImg d-flex justify-content-end">
        <img src={heroImg} alt=""  className=""/>
      </div>
    </Container>
  );
};

export default HeroSection;
