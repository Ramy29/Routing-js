import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import './about.css'


export default function About() {
  return <>
  <div className="container a1 ">
    <div className="row w-100 g-5">
      <div className="col-3 c1">Frontend Using <span>React</span></div>
       <div className="col-1 cc"></div>
      <div className="col-3 c2">Backend Using <span>Nodejs</span></div>
      <div className="col-1 cc"></div>
      <div className="col-3 c3"><span>Route</span> Academy</div>
    </div>
  </div>
  
 
  </>
}
