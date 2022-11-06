import React from 'react'
import woodflockBanner from "../images/woodflock_banner.png"
import "./Woodflock.css"

function Woodflock() {
  return (
    <div className='woodflock_container'>
        <img className="woodflock_banner" src={woodflockBanner}/> 
        <div className='woodflock_text'>Hi, cousins!</div>
        <div className='woodflock_text'>After 12 years of my spearheading this event, we are making some fun changes. Stay tuned for updates on Woodflock 2023, location and schedule TBA.</div>
        <div className='woodflock_text'>– Antsy McClain, July, 2022</div>
    </div>
  )
}

export default Woodflock