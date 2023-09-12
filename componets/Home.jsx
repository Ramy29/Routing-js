import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return <>
   <Navbar/>
    <Outlet></Outlet>
  <Footer/>
  </>
}