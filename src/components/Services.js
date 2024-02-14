
import React from "react";
import { Card } from "react-bootstrap";
import {Tilt} from 'react-tilt';
import w1 from '../assets/images/w1.png';
import w2 from '../assets/images/w2.png';
import w3 from '../assets/images/w3.png';

import w4 from '../assets/images/w4.png';
export default function Services() {
  return (
    <>
       <br /><br />
      <div className="container justify-content-center text-center my-5 wow-delayed">
      <h3 className=" " style={{color:'orangered',fontSize:'30px'}}>Services</h3>
         <h1 style={{fontSize:'39px'}} className="my-3">What I Do for Clients</h1>
       
        <div className="row justify-content-center text-center">
          <div className="col-lg-1"></div>
         <div  className=" col-lg-5 col-md-6 col-sm-12 justify-content-center text-center">
            <Tilt className="tilt-effect" options={{ max: 25 }}>
              <Card  className='justify-content-center text-center my-5' style={{borderRadius: '30px',textAlign:'left',width:'100%',alignItems:'center' }}>
                <div className="row">
                  <div className="col-lg-4 my-5">
                    <img src={w4} alt="" />
                  </div>
                  <div className="col-lg-8 my-3">
             
             <Card.Body style={{textAlign:'left'}} className=''>
               <Card.Title style={{fontSize:'25px'}} >Web Development </Card.Title>
               <Card.Text style={{ lineHeight: '35px', fontSize: '18px',textAlign:'left' }} className='text-secondary my-3'>
               Transforming your ideas into dynamic and responsive websites with cutting-edge technologies and seamless functionality.
               </Card.Text>
             </Card.Body>

                  </div>
                </div>
                          </Card>
            </Tilt>
            <Tilt className="tilt-effect " options={{ max: 25 }}>
            <Card  className='justify-content-center text-center my-5' style={{borderRadius: '30px',textAlign:'left',width:'100%',alignItems:'center' }}>
                <div className="row">
                  <div className="col-lg-4 my-5">
                    <img src={w3} alt="" />
                  </div>
                  <div className="col-lg-8 my-3">
             
             <Card.Body style={{textAlign:'left'}} className=''>
               <Card.Title style={{fontSize:'25px'}} >Ui/UX Design</Card.Title>
               <Card.Text style={{ lineHeight: '35px', fontSize: '18px',textAlign:'left' }} className='text-secondary my-3'>Crafting intuitive designs for seamless digital interactions, enhancing user experiences with innovation and visual appeal.
              </Card.Text>
             </Card.Body>

                  </div>
                </div>
                          </Card>
            </Tilt>
          </div>
          <div className="col-lg-5 justify-content-center text-center">
          <Tilt className="tilt-effect" options={{ max: 25 }}>
          <Card  className='justify-content-center text-center my-5' style={{borderRadius: '30px',textAlign:'left',width:'100%',alignItems:'center' }}>
                <div className="row">
                  <div className="col-lg-4 my-5">
                    <img src={w2} alt="" />
                  </div>
                  <div className="col-lg-8 my-3">
             
             <Card.Body style={{textAlign:'left'}} className=''>
               <Card.Title style={{fontSize:'25px'}} >Graphic Designing </Card.Title>
               <Card.Text style={{ lineHeight: '35px', fontSize: '18px',textAlign:'left' }} className='text-secondary my-3'>
               Captivating visuals that speak volumes, blending creativity with precision to leave a lasting impression on your audience.      </Card.Text>
             </Card.Body>

                  </div>
                </div>
                          </Card>
            </Tilt>
            <Tilt className="tilt-effect" options={{ max: 25 }}>
            <Card  className='justify-content-center text-center my-5' style={{borderRadius: '30px',textAlign:'left',width:'100%',alignItems:'center' }}>
                <div className="row">
                  <div className="col-lg-4 my-5">
                    <img src={w1} alt="" />
                  </div>
                  <div className="col-lg-8 my-3">
             
             <Card.Body style={{textAlign:'left'}} className=''>
               <Card.Title style={{fontSize:'25px'}} >Content Writing </Card.Title>
               <Card.Text style={{ lineHeight: '35px', fontSize: '18px',textAlign:'left' }} className='text-secondary my-3'>
               Crafting compelling narratives and engaging content that not only informs but also resonates with your target audience.     </Card.Text>
             </Card.Body>

                  </div>
                </div>
                          </Card>
            </Tilt>
          </div>
          <div className="col-lg-1"></div>
       
        </div>
      </div>
      <br /><br /><br /><br />
    </>
  );
}
