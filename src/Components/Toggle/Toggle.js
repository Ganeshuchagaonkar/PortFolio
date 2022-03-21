import React from 'react';
import './toggle.css';
import Sun from "../../image/sun.png";
import Moon from "../../image/moon.png";
import {useContext} from "react";
import {ThemeContext} from "../../Context"

function Toggle() {
    const theme = useContext(ThemeContext);
    const handleClick =()=>{
        theme.dispatch({type:"Toggle"})
    }
    
  return (
    <div className='t'>
        <img src={Sun} alt="Not found" className='t-icon' />
        <img src={Moon} alt="Not found" className='t-icon' />
        <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode?0:25}}></div>
    </div>
  )
}

export default Toggle