import React from 'react'
import '../About/about.css'
import Aboutimg from "../../image/Ganesh.jpeg"

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
                    My name is Ganesh Uchagaonkar I'm Front End Engineer. I describe myself as a passionate developer who loves <b>coding</b>, and the <b>Web platform</b>❤️.</p>
                <p className="a-desc">
                    I like to create  <b>web products</b>, empacting peoples lives. That helps me to learn a new stuff, grow as a developer. Also i like reading <b>Books📗📕</b> and <b>Travelling🚉🚋</b>...
                 </p></div>
            </div>
        </div>
    </div>
  )
}
