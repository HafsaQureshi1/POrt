import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../assets/images/Dark Purple Modern Letter H Logo (1).png';
import cvFile from '../assets/cv/Hafsa CV Resume.pdf'; // replace with the actual path to your CV file

export default function Header() {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setNavbarBackground("white");
    } else {
      setNavbarBackground("transparent");
    }
  };

  const handleDownloadCV = () => {
    // Trigger the download when the button is clicked
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Hafsa Resume'; // replace with the desired filename
    link.click();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className={`navbar navbar-expand-lg navbar-light fixed-top`} style={{ backgroundColor: navbarBackground }}>
        <div className="container-fluid   ">
          <div className="col-lg-4 col-md-4 col-sm-12 justify-content-center text-center">
            <img style={{width:'50px'}} className="" src={logo} alt="" />
          </div>
          <div className="col-lg-7 col-md-8 col-sm-12  justify-content-center text-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-light" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav style={{ fontFamily: 'sans-serif' }} className="me-auto">
                <Nav.Link style={{ fontSize: '16px' }} className='mx-2 fw-bold text-dark' >Home</Nav.Link>
                <Nav.Link style={{ fontSize: '16px' }} className='mx-2 fw-bold text-dark'>About</Nav.Link>
                <Nav.Link style={{ fontSize: '16px' }} className='mx-2 fw-bold text-dark'>Portfolio</Nav.Link>
                <Nav.Link style={{ fontSize: '16px' }} className='mx-2 fw-bold text-dark'>Service</Nav.Link>
                <Nav.Link style={{ fontSize: '16px' }} className='mx-2 fw-bold text-dark'>Contact</Nav.Link>
                <Button id="but" className="mx-3 btn btn-lg fw-bold" onClick={handleDownloadCV}>Download CV</Button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      <br />
    </>
  );
}
