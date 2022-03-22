import React from 'react'
import './footer.css'
import Twitter from '../../image/Twitter.jpg';
import Linkedin from '../../image/linkedin.png';
import youtube from '../../image/youtube.png';
import github from '../../image/Github.png';

function Footer() {
  return (
      <div style={{display:"flex",alignItems:"center", justifyContent:"center",flexDirection:"column",fontWeight:"300" , backgroundColor:"#222"}}>
    ______________
    <div className='F'>
           <a href="https://github.com/Ganeshuchagaonkar"><img src={github} alt="" className='f-image' /></a>
          <a href="https://"><img src={Twitter} alt="" className='f-image' /></a>
          <a href="https://www.youtube.com/channel/UCoKFtaERGBsamT8JYJmkK_w"><img src={youtube} alt="" className='f-image' /></a>
           <a href="https://www.linkedin.com/in/ganesh-uchagaonkar-1830b6200/"><img src={Linkedin} alt="" className='f-image' /></a>
         
    </div>
    <p style={{color:"#fff"}}>Copyright © 2022 Ganesh Uchagaonkar </p>
        
    </div>
  )
}

export default Footer