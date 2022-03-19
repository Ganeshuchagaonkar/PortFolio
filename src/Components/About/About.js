import React from 'react'
import '../About/about.css'
import Aboutimg from "../../image/about.jpg"

export default function About() {
  return (
    <div>
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Aboutimg} alt="" className="a-image" /></div>
            </div>
            <div className="a-right">
                <div><h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is a long established fact that areader will be distracted by a readable content
                </p>
                <p className="a-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p></div>
            </div>
        </div>
    </div>
  )
}
