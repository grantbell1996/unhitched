import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useHref } from 'react-router-dom'
import "./Homepage.css"
import homepageBG from "../images/ANTSY-AND-BLUEBIRD.png"
import unhitched_banner from "../images/unhitched_banner.png"

function HomePage() {
  return (
    <>
    <div className='hp_background'> 
      <img className='unhitched_tagline' src={unhitched_banner}/>
      <img className='antsy_photo' src={homepageBG}/>
      {/* <div className='album_desc'>
        “I’m excited to have you all hear my new album, Late Bloomer. It’s available NOW and contains 23 songs that blend humor with more serious messages to entertain you, make you think a little, and get you tapping your toes.” – Antsy McClain</div>

      <div className='album_desc'>Some may not know that long before he became a singer/songwriter, Antsy McClain was a busy illustrator, working for such clients as The Atlantic Monthly, Newsweek, Simon & Schuster, Psychology Today and many more. As music beckoned, Antsy’s graphic art career took a back seat, but never completely went away. During those lonely lockdown months of 2020, it was time to get back to work.</div>

      <div className='album_desc'>“I wanted to recreate the kind of multi-sensory experience I had as a boy with so many of those lush, illustrative album covers of the 1970s,” explains Antsy, “I would let my eyes soak up the images while listening to the music, which often had links to the visual element.” The artwork was done in ink, charcoal powder and pencil, using soft brushes and a flannel cloth to create the gradated, ‘airbrush’ effect.</div>

      <div className='album_desc'>“I’ve never been able to get an airbrush to work for me,” says Antsy, “And I really like using dry media like pastel and charcoal, so I developed this technique years ago as a way to get to a place of softness and depth.” All of the images on the cover have connections to the 23 songs on Late Bloomer, making it a concept album of sorts.</div>

      <div className='album_desc'>The original artwork is in the private collection of Lisa Forsyth.
      </div> */}
      </div>
    </>
  )
}

export default HomePage