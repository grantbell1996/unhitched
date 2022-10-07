import React from 'react'
import { Link } from 'react-router-dom'
import UnhitchedBanner from "../images/unhitched banner.png"
import AntsyHomeLogo from "../images/AntsyHomeLogo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <> 
        {/* <img className="navbar_Logo" src={UnhitchedBanner}/> */}
        <ul className="navbar">
            <div className="navbar_link">
                <Link className='link_text' to="">
                     <img className='homeLogo' src={AntsyHomeLogo}/>
                </Link>
            </div>
            <div className="navbar_link">
                <Link className='link_text' to="/tour">
                    tour
                </Link>
            </div>
            <div className="navbar_link">
                <Link className='link_text' to="/store">
                    store
                </Link>
            </div>
            <div className="navbar_link">
                <Link className='link_text' to="/art">
                    art
                </Link>
            </div>
            <div className="navbar_link">
                <Link className='link_text' to="/design">
                    design
                </Link>
            </div>
            <div className="navbar_link">
                <Link className='link_text' to="/bio">
                    bio
                </Link>
            </div>
            <div className="navbar_link">
                <Link className='link_text' to="/video">
                    video
                </Link>
            </div>
            <div className="navbar_link">
                <Link className='link_text' to="/fieldtrips">
                    field trips
                </Link>
            </div>
            <div className="navbar_link">
                <Link className='link_text' to="/woodflock">
                    wood flock
                </Link>
            </div>
            <div className="navbar_link">
                <Link className='link_text' to="/podcast">
                    podcast
                </Link>
            </div>
            <div className="navbar_link">
                <Link className='link_text' to="/contact">
                    contact
                </Link>
            </div>
        </ul>
        </>
    )
}

export default Navbar