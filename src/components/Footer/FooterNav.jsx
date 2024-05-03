import React from "react";
import { Container, Nav } from "react-bootstrap";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import logo from "../../assets/Logo.png";

const FooterNav = () => {
  return (
    <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 mt-5 mb-2 border-bottom">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <Nav className="d-flex gap-1 gap-md-4 justify-content-between align-items-center">
          <Nav.Link href="#home" className="text-black">
            About
          </Nav.Link>
          <Nav.Link href="#link" className="text-black">
            Features
          </Nav.Link>
          <Nav.Link href="#link" className="text-black">
            Work
          </Nav.Link>
          <Nav.Link href="#link" className="text-black">
            Support
          </Nav.Link>
        </Nav>
      </div>
      <div className="d-flex gap-4 justify-content-between align-items-center">
        <TiSocialTwitter />
        <FaFacebook />
        <SlSocialInstagram />
        <FaGithub />
      </div>
    </Container>
  );
};

export default FooterNav;
