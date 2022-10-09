import React from 'react'
import "./Bio.css"
import antsyBird from "../images/ANTSY-AND-BLUEBIRD.jpeg"

function Bio() {
    return (
        <>
            <div className='bio_body'>
                <h1 className='bio_header'>About Antsy McClain</h1>
                <img className='antsy_bird' src={antsyBird} />
                <div></div>
            </div>
        </>
    )
}

export default Bio