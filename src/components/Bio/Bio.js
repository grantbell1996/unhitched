import React from 'react'
import "./Bio.css"
import antsyBird from "../images/ANTSY-AND-BLUEBIRD.jpeg"
import { Link } from 'react-router-dom'

function Bio() {
    return (
        <>
            <div className='bio'>
                <div className='bio_body'>
                    <h1 className='bio_header'>About Antsy McClain</h1>
                    <img className='antsy_bird' src={antsyBird} />
                    <div className='bio_container'>Antsy McClain was born and raised in an American-made singlewide mobile home that was moved to three trailer parks during his formative years, giving him a unique perspective on life, love and the American Dream. </div>
                    <div className='bio_container'>Antsy combined his observations, his musical and wardrobe influences to create the trailer park that time forgot, Pine View Heights, where the residents take care of each other despite their differences. And they continue to provide him with endless inspiration for his songs and stories. </div>
                    <div className='bio_container'>Nicknamed “Antsy” as a child for his boundless energy – and the unfortunate fact that his parents couldn’t afford Ritalin – young Ronnie Joe McClain observed the people around him. They would become his heroes, his anti-heroes and fodder for an ever-growing catalogue of music. </div>
                    <div className='bio_container'>Antsy grew up and moved to Nashville, Tennessee where he now resides with his wife, Deana Lynn. He developed a stage show that blends his love of American Roots music with his trademark, “humor with heart.” The show includes Antsy’s own life observations, some social commentary and a bevy of hilarious sponsors from back home.</div>
                    <div className='bio_container'>As a master storyteller with many PBS, NPR and countless radio and television appearances under his belt, Antsy McClain has fine-tuned the craft of getting an audience to laugh hysterically and shed a tear – often within the same song. Whether alone with his guitar or with his band, The Trailer Park Troubadours, Antsy creates an unforgettable night of music, theater and storytelling. He has made over 25 albums of all original songs and has garnered the praise of artists like Waylon Jennings, Willie Nelson, Kris Kristofferson, Guy Clark, Lindsay Buckingham, Tommy Smothers and many more. His albums have sold in the hundreds of thousands from decades of tireless touring and promotion. </div>
                    <div className='bio_container'>Many of his songs have been included in projects for The Blue Collar Comedy Tour guys, Jeff Foxworthy, Larry the Cable Guy and Bill Engvall. </div>
                    <div className='bio_container'>He’s been called “a national treasure” (Modesto Bee), and “a creative force” (Houston Chronicle). But his favorite quote comes from his uncle Fred, who describes Antsy as “a happier, funnier Bob Dylan.” However you may think others perceive him, you will likely think of Antsy as a friend after attending one of his concerts. His word craft and boundless energy matched with his casual, approachable persona make him a one of a kind. </div>

                    <iframe className="youtube_link" width="640" height="360" src="https://www.youtube.com/embed/x1RFhCv8tR4" title="14 | Antsy McClain | TEDxCarsonCity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <iframe className="youtube_link" width="510" height="287" src="https://www.youtube.com/embed/C53lWaHe1Kw" title="ANTSY EPK 2016" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <iframe className="youtube_link" width="510" height="287" src="https://www.youtube.com/embed/J7YUgX1Ydcc" title="OUR EVIDENCE OF LIFE ON EARTH PROMO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                    <iframe className="youtube_link" width="510" height="287" src="https://www.youtube.com/embed/GQrlCTBVZ1Y" title="Antsy McClain & Tommy Smothers - Prozac Made Me Stay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                        <ul className='antsy_links'>
                            <a className='bio_link' href="https://www.imdb.com/name/nm3061497/">
                                Antsy McClain on IMDB
                            </a>
                            <a className='bio_link' href="https://www.instagram.com/antsymc/">
                                Antsy McClain on Instagram
                            </a>
                            <a className='bio_link' href="https://www.youtube.com/channel/UCbzoj5IXvR-ngdEv6qVJlMA">
                                Antsy McClain on Youtube
                            </a>
                            <a className='bio_link' to="https://www.facebook.com/AntsyMcClain">
                                Antsy McClain on Facebook
                            </a>
                            <a className='bio_link' to="https://www.facebook.com/thetroubs">
                                The Troubs on Facebook
                            </a>
                            <a className='bio_link' to="https://open.spotify.com/artist/1XUPlOOT5Rtf85Ps3E1PNy">
                                Antsy McClain on Spotify
                            </a>
                        </ul>
            </div>
        </>
    )
}

export default Bio