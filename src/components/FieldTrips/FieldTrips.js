import React from 'react'
import "./FieldTrips.css"
import FieldTripHeader from "../images/FieldTrip_header.png"
import FieldTripImage from "../images/NASHVILLE-FIELD-TRIP-MAST-FOR-WEB.png"


function FieldTrips() {
  return (
    <div className='field_trip_body'>
        <img className="field_trip_header" src={FieldTripHeader}/>
        <img className='field_trip_img' src={FieldTripImage}/>
    </div>
  )
}

export default FieldTrips