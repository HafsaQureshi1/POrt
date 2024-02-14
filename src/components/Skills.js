import React, { useState, useEffect } from "react";
import w2 from '../assets/images/12.png';

export default function Skills() {
  const [reactPercentage, setReactPercentage] = useState(0);
  const [figmaPercentage, setFigmaPercentage] = useState(0);
  const [photoshopPercentage, setPhotoshopPercentage] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
  
    // Calculate percentages for each skill
    const reactScrolled = 90;
    const figmaScrolled =80; // Adjusted value for Figma
    const photoshopScrolled = 70; // Adjusted value for Photoshop
  
    setReactPercentage(reactScrolled);
    setFigmaPercentage(figmaScrolled);
    setPhotoshopPercentage(photoshopScrolled);
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <br /><br />
      <div className="container justify-content-center">
        <div className="row my-5 mx-3">
          <div className="col-lg-5 mx-4 ">
            <h4 style={{ color: 'orangered' }}>Design is Life</h4>
            <h1 style={{lineHeight:'53px'}}>I Develop Skills Regularly to Keep Me Updated</h1>
            <p style={{color:'gray',fontSize:'18px'}} className="my-4"> I strive for perpetual growth to stay abreast of the ever-evolving landscape. I am committed to refining my expertise and staying ahead in the dynamic world of design and development.</p>
            <span className="fw-bold fs-5">Figma</span>
            <p className="fw-bold fs-6" style={{textAlign:'right',lineHeight:'7px'}} >90%
              <div className="skill-container my-2">
                <div className="bar_in" style={{ width: `${reactPercentage}%`, backgroundColor: 'rgb(38, 175, 38)' }}></div>
              </div>
            </p>
            <br />
            <span className="fw-bold fs-5">ReactJs</span>
            <p style={{textAlign:'right',lineHeight:'7px'}} className="fw-bold fs-6">80%
              <div className="skill-container my-2">
                <div className="bar_in" style={{ width: `${figmaPercentage}%`, backgroundColor: 'rgb(227, 76, 0)' }}></div>
              </div>
            </p>
            <br />
            <span className="fw-bold fs-5">Photoshop</span>
          
            <p  style={{textAlign:'right',lineHeight:'7px'}} className="fw-bold fs-6">70%
              <div className="skill-container my-2">
                <div className="bar_in" style={{ width: `${photoshopPercentage}%`, backgroundColor: 'rgb(51, 21, 96)' }}></div>
              </div>
            </p>
          </div>
          <div className="col-lg-1">
            {/* Empty column for spacing */}
          </div>
          <div className="col-lg-5 my-5">
            <img className="my-5 img-fluid" src={w2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
