import React from 'react'
import "./Video.css"

function Video() {
    return (
        <> 
        <div className='video_body'>
            <h1 className='video_header'>Video</h1>

            <div className='video_subheader'>Check out a few of Antsy McClain’s Videos below. For more of his videos, please visit his YouTube Page <a className="yt_channel_link" HREF="https://www.youtube.com/user/antsymcclain">HERE</a></div>

            <iframe className="video_link" width="640" height="360" src="https://www.youtube.com/embed/x1RFhCv8tR4" title="14 | Antsy McClain | TEDxCarsonCity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe className="video_link" width="510" height="287" src="https://www.youtube.com/embed/C53lWaHe1Kw" title="ANTSY EPK 2016" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe className="video_link" width="510" height="287" src="https://www.youtube.com/embed/J7YUgX1Ydcc" title="OUR EVIDENCE OF LIFE ON EARTH PROMO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe className="video_link" width="510" height="287" src="https://www.youtube.com/embed/GQrlCTBVZ1Y" title="Antsy McClain & Tommy Smothers - Prozac Made Me Stay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </>
    )
}

export default Video