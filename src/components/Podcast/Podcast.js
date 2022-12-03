import React from 'react'
import "./Podcast.css"
import PodcastHeader from "../images/Podcast_Header.png"
import PodcastLogo from "../images/Resisting_Enlightenment.png"
import StitcherLogo from "../images/stitcher-logo-transparent.png"
import SpotifyLogo from "../images/Spotify_Logo.png"
import ItunesLogo from "../images/Itunes_logo.png"

function Podcast() {
    return (
        <div>
            <img className='podcastHeader' src={PodcastHeader}></img>
            <div className='podcastText'>Antsy McClain’s new podcast unwisely revisits our most awkward, embarrassing moments, offering only the impotent act of commiseration.
                “Resisting Enlightenment” presents conversations, stories and music with the philosophy that if we can laugh, we can heal.
                And along the way, you’ll hear about living a creative life from the most creative and interesting people in Antsy’s wide circle of friends. </div>
            <img className='podcast_logo' src={PodcastLogo}></img>
            {/* <video className='podcastVideo' src={}></video> */}
            <div className='podcastText'>Co-hosted by his longtime friend and collaborator, Chris “Spoons” Long, and featuring a long list of talented friends, Antsy settles into a new groove combining his loves of performing, writing songs and books, and painting and drawing.
                Available at these fine providers below. Please rate us while you’re there. We’re new and we need the stars. </div>
            <div className='podcast_app_cont'>
                <a href="https://www.stitcher.com/show/resisting-enlightenment">
                    <img className="stitcherLogo" src={StitcherLogo} />
                </a>
                <a href="https://open.spotify.com/show/6DXkCqyZAruf9DwWRWhcpd">
                    <img className="spotifyLogo" src={SpotifyLogo} />
                </a>
                <a href="https://podcasts.apple.com/us/podcast/resisting-enlightenment/id1436664527?mt=2%20#iTunes">
                    <img className="itunesLogo" src={ItunesLogo} />
                </a>
                <div className='podcastText'>And if you are podcast-resistant, here are the first five episodes in MP3 files. Just click and listen:</div>
            </div>
        </div>
    )
}

export default Podcast