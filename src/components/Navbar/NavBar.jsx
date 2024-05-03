import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/Logo.png";

const NavBar = () => {
  const [scrollColor, setScrollColor] = useState(false);
  const scrollColorChange = () => {
    if (window.scrollY >= 80) {
      setScrollColor(true);
    } else setScrollColor(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollColorChange);
    return () => {
      return window.removeEventListener("scroll", scrollColorChange);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`position-fixed w-100 z-3 ${
        scrollColor ? "bg-warning" : "bg-body-tertiary "
      }`}
    >
      <Container className="d-flex gap-2 align-items-center">
        <div>
          <Navbar.Brand href="#" className="d-flex justify-content-center pt-0">
            <img src={logo} alt="logo of the website" className="img-fluid" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 d-flex justify-content-between align-items-center ms-5 gap-4"
            navbarScroll
          >
            <Nav.Link href="#action1">Demos</Nav.Link>
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action1">Blogs</Nav.Link>
            <Nav.Link href="#action2">Pages</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
          </Nav>

          <div className="d-flex justify-content-between align-items-center gap-4 flex-column flex-lg-row">
            <Nav.Link href="#">Login</Nav.Link>
            <Button variant="primary">Get Started Free</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
