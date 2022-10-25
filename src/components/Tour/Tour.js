import React from 'react'
import "./Tour.css"
import TourHeader from "../images/Tour_header.png"

function Tour() {
  return (
    <>
      <div className='date_body'>
        <img className="tour_header" src={TourHeader} />
        <div className='tour_container'>
          <div className='date_container_top'>
            <a href="https://www.bandsintown.com/artist-subscribe/1362611?utm_campaign=track&utm_medium=web&app_id=js_unhitched.com&affil_code=js_unhitched.com&utm_source=widget&came_from=242&spn=0&signature=ZZb2c946900f126ab0ecc45faec33bf0644d4cbd7730a0d836b83e79adb793c3d1" className='track_link'>Track</a> to get concert, live stream updates and tour updates.
          </div>
          <div className='date_container_bottom'>
            <a className='date_link' href="">Upcoming Dates</a>
            <a className="date_link" href="">Past Dates</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tour
