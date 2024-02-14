import React, { useEffect } from "react";
import p10 from '../assets/images/p10.JPG';
import p2 from '../assets/images/p2.png';
import p7 from '../assets/images/p7.png';
import p4 from '../assets/images/p4.png';
import p8 from '../assets/images/p8.png';
import p6 from '../assets/images/p6.png';

export default function Portfolio() {
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
    <br /><br />
      <div className="container-fluid justify-content-center text-center my-5  wow-delayed ">
        <h3 className="my-4 " style={{color:'orangered',fontSize:'32px'}}>Portfolio</h3>
        <h1 className="my-4">My Amazing Works</h1>
        <h5 style={{color:'gray', fontFamily:'sans-serif'}}>Here are a few past design projects I've worked on.</h5>
        <div className=" row my-2 justify-content-center text-center ">
          <div className="my-5 col-lg-3 justify-content-center text-center ">
            <img style={{width:'98%', border:'0.5px', borderRadius:'20px'}} className="img-fluid" src={p4} alt="" />
            <img style={{width:'90%', border:'0.5px', borderRadius:'29px'}} className="img-fluid my-5" src={p7} alt="" />
          </div>
          <div className="my-5 col-lg-3 ">
            <img style={{border:'0.5px', borderRadius:'15px'}} className="img-fluid" src={p2} alt="" />
            <img style={{border:'0.5px', borderRadius:'15px'}} className="img-fluid my-5" src={p8} alt="" />
          </div>
          <div className="my-5 col-lg-3">
            <img style={{textAlign:'right', alignItems:'self-end'}} className="img-fluid" src={p6} alt="" />
            <img style={{border:'0.5px', borderRadius:'15px'}} className="img-fluid my-5" src={p10} alt="" />
          </div>
        </div>
      </div>

      {/* Custom orange dot cursor */}
      <div className="orange-dot-cursor">
          <div className="inner-dot"></div>
      </div>
      <br />
    </>
  );
}