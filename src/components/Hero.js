import React, { useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import pic from "../assets/images/1.png";
import f from "../assets/images/f.png";
import r from "../assets/images/re.png";
import logo2 from "../assets/images/span.skills.png";
import Typed from "typed.js";
import l from '../assets/images/l.png'
const Hero = () => {
  

  useEffect(() => {
    const options = {
      strings: ["Front End Dev", "Web Designer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
      showCursor: true,
    };

    const typed = new Typed(".typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <br />
      <section id="hero">
      <div
        style={{ marginTop: "90px" }}
        className="mx-auto container-fluid  justify-content-center  "
      >
        <div className="mx-auto row dflex justify-content-center mx-5">
          <div className="my-5 col-lg-4 col-m-6 col-sm-12 justify-content-center  ">
            <p
              style={{ fontSize: "24px", color: "rgb(219, 58, 0)" }}
              className="fw-bold justify-content-center "
            >
              Hello I'm
            </p>
            <h2 id="h"
              style={{fontSize: "50px",fontfamily: 'oswald' }}
              className="name justify-content-center"
            >
              Hafsa Waseem,
            </h2>
            <span style={{ fontSize: "38px", color: "brown" }}>
              a{" "}
              <div
                className="typed-text"
                style={{
                  fontFamily: "",
                  color: "orangered",
                  fontSize: "38px",
                  display: "inline-block",
                }}
              ></div>
            </span>
            <div style={{ fontSize: "22px" }} className="my-3">
              I'm very{" "}
              <span style={{ color: "rgb(39, 168, 0)" }} className=" ">
                {" "}
                Passionate
              </span>{" "}
              and <span className="text-primary">Dedicated</span>
              <br />
            </div>
            <p className=""style={{ color: "gray", fontSize: "18px",  }}>
              Specializing in Figma design, proficiency in{" "}
              <span style={{ color: "gray" }}>
                {" "}
                Web Design and Development.
              </span>
            </p>
            <div className="row dflex">
            <div className="col-lg-3 col-md-6 col-sm-6">
            <button className="my-2" id="ab">
              About me
            </button></div>
            {/* Use FontAwesomeIcon for the Facebook icon */}
            <div className="mx-4 col-lg-6 col-md-6 col-sm-6 my-3">
              <a className=""
                
                href="https://www.linkedin.com/in/hafsa-qureshi-51aa93286/"
              >
            
                <FontAwesomeIcon id="hov" style={{width:'18px' ,height:'18px'}}  className="mx-1 p-2" icon={faLinkedinIn} />
              </a>
              <a
              
                href="https://github.com/HafsaQureshi1"
              >
                <FontAwesomeIcon id="hov" style={{width:'19px' ,height:'19px'}} className="p-2" icon={faGithub} />
              </a>
              <a 
               
                href="https://www.instagram.com/hafsa_qureshi_890/"
              >
                <FontAwesomeIcon id="hov" style={{width:'19px' ,height:'19px'}} className="mx-1 p-2 " icon={faInstagram} />
              </a>
            </div>
          </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12 position-relative my-4  justify-content-center text-center">
            <br />
            <div className="mx-5 my-4 float-area position-absolute top-0 start-50 translate-middle-y">
              <img
                style={{ width: "5rem" }}
                className="float-img"
                src={r}
                alt="Skytsunami"
              />
            </div>
            <div className="mx-5 my-4 float-area position-absolute top-0 start-150 translate-middle-y">
              <img className=" float-img" src={f} alt="Skytsunami" />
            </div>
            {/* Float the logo on top of the pic */}
            <img style={{width:'65%'}} className=" img-fluid" src={pic} alt="" />
            <div className="my-4 float-area position-absolute top-0 start-50 translate-middle-x">
              <img  className="img-fluid float-img" src={logo2} alt="Skytsunami" />
            </div>
          </div>
        </div>
        <ScrollLink to="sectionToScroll" smooth={true} duration={50}>
        <div class="page-wrap justify-content-center text-center">
  <section class="example example--1">
    <span class="scroll-icon">
      <span class="scroll-icon__wheel-outer">
        <span class="scroll-icon__wheel-inner"></span>
      </span>
    </span>
  </section>
 
</div>
</ScrollLink>
 
  </div>
  </section>
    </>
  );
};

export default Hero;
