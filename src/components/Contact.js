import React, { useState } from "react";
import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form Data:", formData);
    // You can add logic to send the form data to a server or handle it in another way.
  };

  return (
    <>
    <section id="contact">
      <br /><br /><br />
      <br /><br />
      <br />
      <div className="container-fluid justify-content-center text-center wow-delayed">
        <h3 id="h2_font " style={{ color: 'orangered' }}>Contact Me</h3>
        <h1 id="ad" className="my-4">I Anticipate your Professional Response</h1>
        <div style={{ textAlign: 'left' }} className="row my-5 justify-content-center text-center">
          <div className="mx-3 col-lg-4 col-md-6 col-sm-6 justify-content-center text-center">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 justify-content-center text-center">
                <br />
                <img style={{width:'80px'}} className="img-fluid my-2" src={c1} alt="" /> <br /><br />
                <img style={{width:'80px'}} className="img-fluid " src={c2} alt="" /><br /><br />
                <img style={{width:'80px'}} className="img-fluid my-2" src={c3} alt="" />
              </div>
              <div style={{ textAlign: 'left' }} className="col-lg-4 col-md-6 col-sm-6 my-5 col-6 justify-content-center text-center">
                <h4 style={{ textAlign: 'left' }} className="">Address</h4>
                <p style={{ fontSize: '16px', textAlign: 'left' }} className="text-secondary">Sukkur, Pakistan</p><br />
                <h4 style={{ textAlign: 'left' }} className="">Email</h4>
                <p style={{ fontSize: '16px', textAlign: 'left' }} className="text-secondary">hafsaqureshi486 @gmail.com</p><br />
                <h4 style={{ textAlign: 'left' }} className="">Phone</h4>
                <p style={{ fontSize: '16px', textAlign: 'left' }} className="text-secondary">03233******</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-5 col-md-6 col-sm-6 justify-content-center text-center animated-text my-3">
            <form onSubmit={handleSubmit}>
              <div className="row my-2">
                <div className="col-lg-6 col-sm-6 col-md-6">
                  <div style={{ textAlign: 'left' }} className="form-group my-2">
                    <input
                      style={{ textAlign: 'left', height: '58px', width: '96%', fontSize: '19px', padding: '25px' }}
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control-lg border border-secondary" // Updated class
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6">
                  <div style={{ textAlign: 'left' }} className="form-group my-2">
                    <input
                      style={{ height: '58px', width: '95%', fontSize: '19px', padding: '25px' }}
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control-lg border border-secondary" // Updated class
                    />
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'left' }} className="col-lg-12 col-sm-12 col-md-12 form-group">
                <textarea
                  placeholder="Write your Message here"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className=" form-control-lg border border-secondary" // Updated class
                  rows="4"
                  style={{ fontSize: '19px', width: '97%', textAlign: 'left', padding: '25px' }}
                ></textarea>
              </div>
              <div style={{ textAlign: 'left' }}>
                <button id="ab" type="submit" className="btn my-3 ">Submit now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>    </>
  );
}
