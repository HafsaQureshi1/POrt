import React, { useState, useEffect } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import p10 from '../assets/images/p10.JPG';
import p2 from '../assets/images/p2.png';
import p7 from '../assets/images/p7.png';
import p4 from '../assets/images/p4.png';
import p8 from '../assets/images/p8.png';
import p6 from '../assets/images/p6.png';
import Nav from 'react-bootstrap/Nav';
import g1 from '../assets/images/g1.png';
import g2 from '../assets/images/g2.png';
import g3 from '../assets/images/g4.png';
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('tab1');

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
      <section id="portfolio">
        <br /><br />
       

        <div className="container-fluid justify-content-center text-center my-5  wow-delayed ">
          <h3 className="my-4" style={{ color: 'orangered', fontSize: '32px' }}>Portfolio</h3>
            <h1 className="my-4">My Amazing Works</h1>
            <h5 style={{ color: 'gray', fontFamily: 'sans-serif' }}>Here are a few past design projects I've worked on.</h5>
     <br />
        {/* Custom orange dot cursor */}
        <div className="orange-dot-cursor">
          <div className="inner-dot"></div>
        </div>
        <br />
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 justify-content-center text-center"
      style={{fontSize:'25px'}}>
      <Tab  eventKey="home" title="Websites">
      <div className="container">
              <div className="row my-2 justify-content-center text-center ">
              <div className="my-5 col-lg-3 justify-content-center text-center ">
                <a className="web" style={{textDecoration:'none'}} href="https://farhang-official.vercel.app/"><img className="img-fluid" src={g1} alt="" />
                <h3  className="my-4">Ecommerce Website</h3></a>
                <p className="text-secondary">"Embark on a cultural journey through our website, where diversity thrives. Explore and celebrate the richness of traditions, </p>
                  <p>Github Link : <a href="https://github.com/HafsaQureshi1/Final_Project_Hafsa_Ali_Sadia.git">Click Here </a></p>
              </div>


              <div className="my-5 col-lg-3 ">
              <a className="web" style={{textDecoration:'none'}} href="https://bakerywebsite-eight.vercel.app/"><img className="img-fluid" src={g2} alt="" />
                <h3  className="my-4">Ash Bakers Website</h3></a>
                <p className="text-secondary">Ash Bakers: Experience artisanal delights and indulge in freshly baked creations at our online bakery</p>
                  <p>Github Link : <a href="https://github.com/HafsaQureshi1/Bakerywebsite.git">Click Here </a></p>
              </div>


              <div className="my-5 col-lg-3">
              <a className="web" style={{textDecoration:'none'}} href="https://calligraphy-website.vercel.app/"><img className="img-fluid" src={g3} alt="" />
                <h3  className="my-4">Calligraphy Website</h3></a>
                <p className="text-secondary">Discover the artistry of calligraphy on our website. Elevate your writing with exquisite penmanship and personalized creations.</p>
                  <p>Github Link : <a href="https://github.com/HafsaQureshi1/calligraphy_website.git">Click Here </a></p>

              </div>
            </div>
            </div>
    
      </Tab>
      <Tab eventKey="profile" title="Design">
      <div className="row my-2 justify-content-center text-center ">
              <div className="my-5 col-lg-3 justify-content-center text-center ">
                <img style={{ width: '98%', border: '0.5px', borderRadius: '20px' }} className="img-fluid" src={p4} alt="" />
                <img style={{ width: '90%', border: '0.5px', borderRadius: '29px' }} className="img-fluid my-5" src={p7} alt="" />
              </div>
              <div className="my-5 col-lg-3 ">
                <img style={{ border: '0.5px', borderRadius: '15px' }} className="img-fluid" src={p2} alt="" />
                <img style={{ border: '0.5px', borderRadius: '15px' }} className="img-fluid my-5" src={p8} alt="" />
              </div>
              <div className="my-5 col-lg-3">
                <img style={{ textAlign: 'right', alignItems: 'self-end' }} className="img-fluid" src={p6} alt="" />
                <img style={{ border: '0.5px', borderRadius: '15px' }} className="img-fluid my-5" src={p10} alt="" />
              </div>
            </div>
      </Tab>
      
    </Tabs>
    </div>
      </section>
    </>
  );
}
