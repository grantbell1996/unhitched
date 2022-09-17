import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useHref } from 'react-router-dom'
import "./Homepage.css"
import LateBloomer from "../images/late_bloomer_cover.jpeg"

function HomePage() {
  return (
    <>
      <h1 className='hp_header'>Welcome to everything you needed to know about Antsy McClain and his musical cohorts, The Trailer Park Troubadours</h1>
      <div className="links_container"> 
      <ul className='hp_links'>
        <Link className='hp_link' to="">
          Antsy McClain on IMDB
        </Link>
        <Link className='hp_link' to="">
          Antsy McClain on Instagram
        </Link>
        <Link className='hp_link' to="">
          Antsy McClain on Youtube
        </Link>
        <Link className='hp_link' to="">
          Antsy McClain on Facebook
        </Link>
        <Link className='hp_link' to="">
          Antsy McClain on Facebook
        </Link>
        <Link className='hp_link' to="">
          Antsy McClain on Spotify
        </Link>
        <Link className='hp_link' to="">
          Antsy McClain Podcast
        </Link>
      </ul>
      </div>

      <div className='album_tile'>
        <Link className="" to="">
          <img className="album_bg" width="" src={LateBloomer} />
          <div className='album_hover'>Click here to download Antsy McClain's latest album!</div>
        </Link>
      </div>
    </>
  )
}

export default HomePage