import React from 'react'
import "./Contact.css"
import contactHeader from "../images/Contact_Header.png"

function Contact() {
  return (
    <div>
      <img className='contactHeader' src={contactHeader} />
      <div className='contactInfoCont'>
        <div className='contactInfo'>For management & booking inquiries,</div>
        <div className='contactInfo'>Antsy McClain</div>
        <div className='contactInfo'>11205 Lebanon Rd.</div>
        <div className='contactInfo'>P.O. Box 33</div>
        <div className='contactInfo'>Mount Juliet, TN 37122</div>
        <div className='contactInfo'>302-242-3166</div>
        <div className='contactInfo'>Booking: deana@unhitched.com</div>
        <div className='contactInfo'>Antsy's e-mail: thetroubs@unhitched.com</div>
      </div>
    </div>
  )
}

export default Contact