import React from 'react'
import "./Podcast.css"
import PodcastHeader from "../images/Podcast_Header.png"
import PodcastLogo from "../images/Resisting_Enlightenment.png"

function Podcast() {
    return (
        <div>
            <img className='podcastHeader' src={PodcastHeader}></img>
            <div className='podcastText'>Antsy McClain’s new podcast unwisely revisits our most awkward, embarrassing moments, offering only the impotent act of commiseration.
                “Resisting Enlightenment” presents conversations, stories and music with the philosophy that if we can laugh, we can heal.
                And along the way, you’ll hear about living a creative life from the most creative and interesting people in Antsy’s wide circle of friends. </div>
            <img className='podcast_logo' src={PodcastLogo}></img>    
        </div>
    )
}

export default Podcast