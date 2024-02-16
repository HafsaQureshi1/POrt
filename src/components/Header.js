import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/images/Dark Purple Modern Letter H Logo (1).png';
import cvFile from '../assets/cv/Hafsa CV Resume.pdf';

export default function Header() {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setNavbarBackground("rgb(255, 240, 233)");
    } else {
      setNavbarBackground("transparent");
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Hafsa Resume';
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
    <section className="header">
      <Navbar expand="lg" className={`navbar navbar-expand-lg navbar-light fixed-top`} style={{ backgroundColor: navbarBackground }}>
        <div className="container-fluid">
          <div className="col-lg-4 col-md-4 col-sm-12 justify-content-center text-center">
            <img style={{ width: '50px' }} className="" src={logo} alt="" />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 justify-content-center text-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-light" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav style={{ fontFamily: 'sans-serif' }} className="me-auto">
                <section className="my-3">
                  <ScrollLink
                
                    to="header"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='mx-3 fw-bold scroll-link'
                  >
                    Home
                  </ScrollLink>
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='mx-3 fw-bold  scroll-link'
                  >
                    About
                  </ScrollLink>
                  <ScrollLink
                     to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='mx-3 fw-bold  scroll-link'
                  >
                    Portfolio
                  </ScrollLink>
                  
                  
                  <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='mx-3 fw-bold  scroll-link'
                  >
                    Skills
                  </ScrollLink>
                  <ScrollLink
                     to="service"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='mx-3 fw-bold  scroll-link'
                  >
                    Service
                  </ScrollLink>
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='mx-3 fw-bold  scroll-link'
                  >
                    Contact
                  </ScrollLink>
                
               

                </section>
                <Button id="but" className="mx-3 btn btn-lg fw-bold my-2" onClick={handleDownloadCV}>Download CV</Button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      <br /></section>
    </>
  );
}
