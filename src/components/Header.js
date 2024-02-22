import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/images/Dark Purple Modern Letter H Logo (1).png';
import cvFile from '../assets/cv/Hafsa CV Resume.pdf';

export default function Header() {
 

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Hafsa Resume';
    link.click();
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const dotCursor = document.querySelector('.orange-dot-cursor');
      const { clientX, clientY } = event;

      if (dotCursor) {
        dotCursor.style.left = `${clientX}px`;
        dotCursor.style.top = `${clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
     return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="orange-dot-cursor">
        <div className="inner-dot"></div>
      </div>
      <section className="header">
        <Navbar expand="lg" className={`navbar navbar-light bg-light navbar-expand-lg fixed-top`} >
          <div className="container">
            <Navbar.Brand className="col-lg-3 col-md-12 col-sm-12 text-center">
              <img style={{ width: '50px' }} className="" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-light " />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center text-center">
              <Nav style={{ fontFamily: 'sans-serif' }} className="me-auto">
                <section className="my-3">
                  <ScrollLink
                    to="header"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='d-lg-inline d-md-none d-sm-none d-block mx-3 fw-bold scroll-link'
                  >
                    Home
                  </ScrollLink>
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='d-lg-inline d-md-none d-sm-none d-block mx-3 fw-bold  scroll-link'
                  >
                    About
                  </ScrollLink>
                  <ScrollLink
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='d-lg-inline d-md-none d-sm-none d-block mx-3 fw-bold  scroll-link'
                  >
                    Portfolio
                  </ScrollLink>
                  <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='d-lg-inline d-md-none d-sm-none d-block mx-3 fw-bold  scroll-link'
                  >
                    Skills
                  </ScrollLink>
                  <ScrollLink
                    to="service"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='d-lg-inline d-md-none d-sm-none d-block mx-3 fw-bold  scroll-link'
                  >
                    Service
                  </ScrollLink>
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className='d-lg-inline d-md-none d-sm-none d-block mx-3 fw-bold  scroll-link'
                  >
                    Contact
                  </ScrollLink>
                </section>
                <Button id="but" className=" btn btn-lg fw-bold my-2 justify-content-center text-center" onClick={handleDownloadCV}>Download CV</Button>
              </Nav>
             
            </Navbar.Collapse>
          </div>
        </Navbar>
      </section>
    </>
  );
}
