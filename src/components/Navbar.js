import React from 'react'
import './style.css'
import F from './a.png'
import {

    Link
  } from "react-router-dom";

function Navbar() {

  return (
    <>
    <div className='navbar'>
      <img alt='d' width={'200px'} src={F}/>
      <div className='Tabs'>
        <Link to='/'>Home</Link>
        <Link to="/about">About</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/Appointment'>Book Appointment</Link>
      </div>

    </div>

    </>
  )
}

export default Navbar
