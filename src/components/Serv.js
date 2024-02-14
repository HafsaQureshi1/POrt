import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import s1 from '../assets/images/s1.png';
import s2 from '../assets/images/s2.png';
import s3 from '../assets/images/s3.png';

import 'animate.css/animate.min.css'; // Import animate.css for animations


function Serv() {
 
  return (

    <>
    <br /><br /><br />
    <div id="sectionToScroll">
  <div className="my-5 container-fluid justify-content-center text-center p-2">
        <div className="row my-5">
          <div className="col-lg-1 col-md-1 "></div>
          <div className=" mx-1 col-lg-3 col-md-5 col-sm-12 justify-content-center text-center ">
            <Card id='hov' className='justify-content-center text-center' style={{ border: 'none' }}>
              <Card.Img className="mx-auto d-block img-fluid justify-content-center" style={{ width: '27%' }} variant="top" src={s1} />
              <Card.Body className='animated-text'>
                <Card.Title className='my-2 fw-bold ' style={{ fontSize: '23px', fontFamily: 'sans-serif' }}>Polished </Card.Title>
                <Card.Text style={{ lineHeight: '35px', fontSize: '19px' }} className='text-secondary my-3'>
                Polished excellence - showcase of refined craftsmanship to elevating experiences </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="mx-2 col-lg-3 col-md-5 col-sm-12 justify-content-center text-center wow-delayed">
            <Card id='hov' className='justify-content-center text-center' style={{ border: 'none' }}>
              <Card.Img className="mx-auto d-block" style={{ width: '27%' }} variant="top" src={s2} />
              <Card.Body className='animated-text'>
                <Card.Title className='my-2 fw-bold' style={{ fontSize: '23px', fontFamily: 'sans-serif' }}>High Quality</Card.Title>
                <Card.Text style={{ lineHeight: '35px', fontSize: '19px' }} className='text-secondary my-3'>
                High quality – where every project reflects precision, excellence, and unwavering commitment."    </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="mx-2 col-lg-3 col-md-5 col-sm-12 justify-content-center text-center wow-delayed">
            <Card id='hov' className='justify-content-center text-center' style={{ border: 'none' }}>
              <Card.Img className="mx-auto d-block" style={{ width: '27%' }} variant="top" src={s3} />
              <Card.Body className='animated-text'>
                <Card.Title className='my-2 fw-bold' style={{ fontSize: '23px', fontFamily: 'sans-serif' }}>Awesome Idea</Card.Title>
                <Card.Text style={{ lineHeight: '35px', fontSize: '19px' }} className='text-secondary my-3'>
                Awesome Ideas Unleashed: <br /> Showcasing Creative Brilliance in Every Endeavor.      </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      
</div>
<br /><br />
    </>
  );
}

export default Serv;
