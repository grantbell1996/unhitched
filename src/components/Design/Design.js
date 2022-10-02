import React from 'react'
import "./Design.css"
import antsyAlbumDesign from "../images/ANTSY_ALBUM_DESIGN.jpeg"
import antsyBookDesign from "../images/ANTSY_BOOK_COVERS.jpeg"
import TnMagDesign from "../images/TN-MAG-DESIGN.jpeg"

function Design() {
    return (
        <>
            <div className='design_body'>
                <h1 className='design_header'>Design</h1>
                <div className='design_container'>
                    <div className='design_block'>Most friends of Antsy McClain's music know that he has designed and illustrated all of his own albums, DVDs and book covers. Proficient in Photoshop and other computer graphic programs, Antsy honed his skills as a graphic designer at his first jobs in t-shirt print shops, daily newspapers, book and magazine publishers and advertising agencies. </div>

                    <div className='design_block'>“Long before songwriting became a thing for me,” explains Antsy, “Art was my biggest passion. I was always drawing, always looking at the world with an artist’s eye. And when folks started referring to me as ‘a visual writer,’ it was probably because of my earlier years as an artist. I want to create a picture in your mind with my songs, like painting with words. If I hadn’t been an artist first, I doubt I’d be writing in the same way.”</div>

                    <div className='design_block'>If you have a project that needs graphic attention, feel free to contact him <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=antsymc@gmail.com">HERE</a>. He’s always busy with music and other art projects of his own, but he often finds the time for outside freelance work.</div>

                    <div className='design_block'>Antsy has worked with all kinds of design projects, from logo design to book design. “I’m one of the lucky ones, I guess,” says Antsy, “I get up in the morning and I get to do what I love.”</div>
                </div>
                <img className='design_image' src={antsyAlbumDesign} />
                <div className='design_container'>
                    <h2>Antsy's Own Album Covers</h2>
                    <div>“I like to think of myself as my band’s first groupie,” Antsy laughs, “I designed all of our band’s t-shirts and posters. I still do. When we got our first record deal, I made them put it in writing that I had graphic control over everything – especially our album covers. They had seen my work and thankfully said okay. I think I was just as excited to design the album cover as I was to record my first album. I spent weeks on it, wanting it to be just right.” Buy Antsy's music <a href="https://shop.unhitched.com/">HERE</a>.</div>
                </div>
                <img className="design_image" src={antsyBookDesign} />
                <div className='design_container'>
                    <h2>Antsy's Own Book Covers</h2>
                    <div>As the author of 6 books, Antsy feels the cover and overall design has to reflect the book’s mission statement, from humorous escapism to thoughtful memoir. He’s often thinking of the cover and graphics while composing the book textually. “It’s a hand-in-hand process for me,” he says, “The visual often informs the content, and vice versa.” Buy Antsy's books <a href="https://shop.unhitched.com/">HERE</a>.</div>
                </div>
                <img className="design_image" src={TnMagDesign} />
                <div className='design_container'>
                    <h2>The Tennessee Magazine</h2>
                    <div>Antsy has been the art director and designer of The Tennessee Magazine, published in Nashville, for more than 25 years. He's also written many articles for the publication. It’s published monthly and promotes travel, food, culture and the arts in Tennessee, as well as being the face of 24 hard-working Electric Cooperatives across the state. Check it out <a href="https://www.tnmagazine.org/">HERE</a>.</div>
                </div>
            </div>
        </>
    )
}

export default Design