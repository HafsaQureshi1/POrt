import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import p10 from '../assets/images/p10.JPG';
import p2 from '../assets/images/p2.png';
import p7 from '../assets/images/p7.png';
import p4 from '../assets/images/p4.png';
import p8 from '../assets/images/p8.png';
import p6 from '../assets/images/p6.png';
import g1 from '../assets/images/g1.png';
import g2 from '../assets/images/g2.png';
import g3 from '../assets/images/g4.png';
import q1 from '../assets/images/design1/1.png';
import q2 from '../assets/images/design1/2.png';
import q3 from '../assets/images/design1/3.png';
import q4 from '../assets/images/design1/4.png';
import q5 from '../assets/images/design1/5.png';
import q6 from '../assets/images/design1/s2.png';
import q7 from '../assets/images/design1/des2.png';
import q8 from '../assets/images/design1/design4.png';
import q9 from '../assets/images/design1/design6.png';
import q10 from '../assets/images/design1/design7.png';
import q11 from '../assets/images/design1/web2.PNG';





export default function Portfolio() {
  // Array for websites
  const websites = [
    {
      name: "Ecommerce Website",
      description: "Embark on a cultural journey through our website, where diversity thrives. Explore and celebrate the richness of traditions.",
      link: "https://farhang-official.vercel.app/",
      image: g1,
      githubLink: "https://github.com/HafsaQureshi1/Final_Project_Hafsa_Ali_Sadia.git"
    },
    {
      name: "Ash Bakers Website",
      description: "Ash Bakers: Experience artisanal delights and indulge in freshly baked creations at our online bakery.",
      link: "https://bakerywebsite-eight.vercel.app/",
      image: g2,
      githubLink: "https://github.com/HafsaQureshi1/Bakerywebsite.git"
    },
    {
      name: "Calligraphy Website",
      description: "Discover the artistry of calligraphy on our website. Elevate your writing with exquisite penmanship and personalized creations.",
      link: "https://calligraphy-website.vercel.app/",
      image: g3,
      githubLink: "https://github.com/HafsaQureshi1/calligraphy_website.git"
    }
  ];

  // Array for design images
  const designImages = [p4, p6, p2,q1,q10,q3,q7,q5,q8,q4,q6,q2,p7,q9,p8,p10];

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
          <br />
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 justify-content-center text-center"
            style={{ fontSize: '25px' }}
          >
            <Tab eventKey="home" title="Websites">
              <div className="container">
                <div className="row my-2 justify-content-center text-center ">
                  {websites.map((website, index) => (
                    <div key={index} style={{ border: '1px solid orangered' }} className="my-5 mx-2 col-lg-3 justify-content-center text-center mainweb ">
                      <a className="web" style={{ textDecoration: 'none' }} href={website.link}>
                        <img className="img-fluid my-3" src={website.image} alt="" />
                        <h3 className="my-2">{website.name}</h3>
                      </a>
                      <p className="text-secondary my-4">{website.description}</p>
                      <p>Github Link : <a style={{ color: 'green', textDecoration: 'none' }} href={website.githubLink}>Click Here</a></p>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Design">
              <div className="mx-3 row my-2 justify-content-center text-center ">
                {designImages.map((image, index) => (
                  <div key={index} className="my-5   col-lg-3 justify-content-center text-center ">
                    <img style={{ width: '100%', border: '1px solid grey', borderRadius: '20px' }} className="img-fluid" src={image} alt="" />
                  </div>
                ))}
              </div>
            </Tab>
            <Tab eventKey="ui" title="App UI">
              <div className="mx-3 row my-2 justify-content-center text-center ">
                  <div  className="my-5   col-lg-4 justify-content-center text-center ">
                    <img style={{ width: '100%', border: '1px solid grey', borderRadius: '20px' }} className="img-fluid" src={q11} alt="" />
                  </div>
                
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
}
