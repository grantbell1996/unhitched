import React from 'react'
import { Link } from 'react-router-dom'
import UnhitchedBanner from "../images/unhitched banner.png"
import "./Navbar.css"

function Navbar() {
    return (
        <> 
        <img className="navbar_Logo" src={UnhitchedBanner}/>
        <ul className="navbar">
            <div className="navbar__item active">
                <Link className='navbar_link' to="">
                    home
                </Link>
            </div>
            <div className="navbar__item active">
                <Link className='navbar_link' to="/tour">
                    tour
                </Link>
            </div>
            <div className="navbar__item active">
                <Link className='navbar_link' to="/store">
                    store
                </Link>
            </div>
            <div className="navbar__item active">
                <Link className='navbar_link' to="/art">
                    art
                </Link>
            </div>
            <div className="navbar__item active">
                <Link className='navbar_link' to="/design">
                    design
                </Link>
            </div>
            <div className="navbar__item active">
                <Link className='navbar_link' to="/bio">
                    bio
                </Link>
            </div>
            <div className="navbar__item active">
                <Link className='navbar_link' to="/video">
                    video
                </Link>
            </div>
            <div className="navbar__item active">
                <Link className='navbar_link' to="/fieldtrips">
                    field trips
                </Link>
            </div>
            <div className="navbar__item active">
                <Link className='navbar_link' to="/woodflock">
                    wood flock
                </Link>
            </div>
            <div className="navbar__item active">
                <Link className='navbar_link' to="/podcast">
                    podcast
                </Link>
            </div>
            <div className="navbar__item active">
                <Link className='navbar_link' to="/contact">
                    contact
                </Link>
            </div>
        </ul>
        </>
    )
}

export default Navbar