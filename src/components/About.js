import React from "react"; 
import 'animate.css/animate.min.css'; // Import animate.css for animations
import { useEffect } from "react";
import u from '../assets/images/unsplash_LJ9KY8pIH3E.png'
export default function About(){
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('wow', 'fadeInUp');
            }
          });
        });
    
        document.querySelectorAll('.wow-delayed').forEach(element => {
          observer.observe(element);
        });
      }, []);
    
    return(
        <>
        <section id="about">
          <br /><br />
            <div className="container-fluid justify-content-center text-center  wow-delayed">
                <div className="row  justify-content-center text-center">
                <div className=" col-lg-5 col-md-6 col-sm-12 ">
                    <img style={{width:'80%'}} className="img-fluid my-3" src={u} alt="" />
                </div>
                    <div className="mx-5 col-lg-4 col-md-6 col-sm-12 justify-content-center text-center animated-text1 ">
                    <h5 className="fw-bold my-3" style={{color:'orangered',textAlign:'left',fontFamily:''}}>As a Developer and Designer</h5>
                    <h1 className="fw-bold my-2" style={{fontSize:'40px',textAlign:'left'}}>How can I Help You?</h1>
                    <p style={{fontSize:'17px',textAlign:'left',lineHeight:'1.8rem',color:'gray',fontFamily:'sans-serif'}} className="my-4">As an accomplished web developer, I specialize in <span  style={{color:'darkblue'}} className="fw-bold"> React.js, Bootstrap, HTML, CSS, and JavaScript</span>, utilizing tools like <span style={{color:'rgb(0, 160, 19)'}} className=" fw-bold"> Git, GitHub, and Vercel</span> for efficient project management. Beyond coding, I am deeply passionate about design, finding joy in every step of the process. Proficient in <span className="fw-bold" style={{color:'rgb(150, 0, 115)'}}>Figma and Photoshop,</span> I ensure exceptional results and here to contribute to the success of your projects by blending my web development and design expertise.
</p><div style={{textAlign:'left'}}> <button  className="" id="ab">
              Hire Me
            </button>
            </div>           </div>
                    <div className="col-lg-1"></div>
                </div>
            </div> 
            </section>       </>
    )
}