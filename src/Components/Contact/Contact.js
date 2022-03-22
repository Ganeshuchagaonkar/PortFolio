import React from 'react'
import './Contact.css'
import phone from "../../image/phone.png";
import email from"../../image/email.png";
import address from "../../image/address.png"
import {useRef,useState} from "react";
import { useToasts } from 'react-toast-notifications';
import emailjs from "emailjs-com"
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Contact=()=>{
    const formRef=useRef()
    const { addToast } = useToasts();
    const [done,setDone]=useState(false)
    const handleSubmit = (e) => {   
        e.preventDefault();
        emailjs
          .sendForm(
            "service_h88fmfl",
            "template_07frquo",
            formRef.current,
            "FMiCb9GFvkhx27-ge"
          )
          .then(
            (result) => {
              console.log(result.text);
              addToast('Saved Successfully', { appearance: 'success' } ,{autoDismiss :'true'});
              setDone(true)
            },
            (error) => {
              console.log(error.text);
              addToast(error.message, { appearance: 'error' });
            }
          );
      };
  return (
   
        <div className='c'>
        <div className="c-bg"></div>
            <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={phone} alt="not found" className='c-icon' />
                        +91 7760 281 727
                    </div>
                    <div className="c-info-item">
                        <img src={email} alt="not found" className='c-icon'  />
                        ganesh04gmu@gmail.com                  
                         </div>
                    <div className="c-info-item">
                        <img src={address} alt="not found" className='c-icon' />
                        H.No 45 A2 Ganpat Galli Peeranwadi Belgaum,Karnataka-590014
                    </div>
                   
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story? </b> Get in touch. Always available for freelancing. if the right project comes along me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea 
            // style={{backgroundColor: darkMode && "#333"}} 
            rows="5" placeholder="Message" name="message" />
            <br />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
            </div>
          
            </div>
    </div>
    
  )
}

export default Contact