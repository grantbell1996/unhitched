import React from 'react'
import "./Art.css"
import ArtHeader from "../images/Art_header.png"

function Art() {
  return (
    <>
      <div className="art_container">
        <img className="art_header" src={ArtHeader} />
        <div className="art_body">New artwork coming soon.</div>
      </div>
    </>
  )
}

export default Art
