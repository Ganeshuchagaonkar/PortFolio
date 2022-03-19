import React from 'react';
import "./intro.css"
import Me from "../../image/Ganesh.png"
import Typed from 'react-typed';


function intro() {
  return <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, my name is </h2>
            <h1 className="i-name">Ganesh Uchagaonkar</h1>
            <strong className="text-slider" style={{fontSize:"30px", color: "#59b256"}}>
                  <Typed
                    strings={[
                      "Software Engineer",
                      "Frontend Developer",
                      "Flutter Developer",
                      "IOT/IIOT"
                    ]}
                    typeSpeed={60}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
            <div className="i-title">
            
             {/* <div className="i-title-wrapper">
               <div className="i-title-item">Web developer</div>
               <div className="i-title-item">UI/UX Designer</div>
               <div className="i-title-item">Flutter developer</div>
               <div className="i-title-item">IOT/IIOT</div>
               
             </div> */}
             
            </div>
            <br />
            <div className="i-desc">
               I design and develope service for customer of all sizes, specializing in creating stylish and modern website.
             </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className='i-image'/>
          {/* <img src="https://toppng.com/uploads/preview/business-woman-and-man-11551063789qs5pbpxds0.png" alt="" /> */}
        </div>
      </div>
  </div>;
}

export default intro;
