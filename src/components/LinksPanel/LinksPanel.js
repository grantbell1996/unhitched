import React from 'react'
import { Link } from 'react-router-dom'
import "./LinksPanel.css"
import Instagram from "../images/instagram_logo.png"
import Facebook from "../images/facebook_logo.png"

function LinksPanel() {
    return (
        <>
            <div className='link_container'>
                <div className='link_block'>HEY, COUSIN! SUBSCRIBE TO OUR MONTHLY NEWSLETTER SO WE CAN STAY IN TOUCH!</div>
                <div className='link_block'>
                    <Link className='track_link'>Track</Link> to get concert, live stream updates and tour updates.
                </div>
                <div className='follow_block'>
                    <div className=''>Follow us!</div>
                    <a href="https://www.instagram.com/antsymc/?__coig_restricted=1">
                        <img src={Instagram} className='social_logo' />
                    </a>
                    <a href="https://www.facebook.com/thetroubs">
                        <img src={Facebook} className='social_logo' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default LinksPanel