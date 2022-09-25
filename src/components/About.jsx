import React from 'react'
import DR from './aaaa.jpg'
import DrR from './DRR.jpg'

function About() {
  
  return (
    <div className='about' id='about'>
      <img src={DrR} alt={DrR}/>
      <div className='Content'>
        <h1>About Our Doctor</h1>
        <p>My name is Dr Himanshu Garg, <br/> I am a Physiotheripist and MBBS from AIIMS, New Delhi <br/>
        A physician, medical practitioner, medical doctor, or simply doctor, is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments.</p>
    </div>
    </div>
  )
}

export default About
