import React from 'react'
import { Link } from 'react-router-dom'
import "./LinksPanel.css"
import Instagram from "../images/instagram_logo.png"
import Facebook from "../images/facebook_logo.png"

function LinksPanel() {
    return (
        <>
        <div className='links'> 
            <div className='link_container'>
                <div className='link_block'>HEY, COUSIN! SUBSCRIBE TO OUR MONTHLY NEWSLETTER SO WE CAN STAY IN TOUCH!</div>
                <div className='link_block'>
                    <a href="https://www.bandsintown.com/artist-subscribe/1362611?utm_campaign=track&utm_medium=web&app_id=js_unhitched.com&affil_code=js_unhitched.com&utm_source=widget&came_from=242&spn=0&signature=ZZb2c946900f126ab0ecc45faec33bf0644d4cbd7730a0d836b83e79adb793c3d1" className='track_link'>Track</a> to get concert, live stream updates and tour updates.
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
            </div>
        </>
    )
}

export default LinksPanel