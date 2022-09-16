import React from 'react'
import { Link } from 'react-router-dom'
import UnhitchedBanner from "../images/unhitched banner.png"
import "./Navbar.css"

function Navbar() {
    return (
        <> 
        <img className="navbar_Logo" src={UnhitchedBanner}/>
        <ul>
            <div className="navbar__item active">
                <Link to="">
                    LINK
                </Link>
            </div>
        </ul>
        </>
    )
}

export default Navbar