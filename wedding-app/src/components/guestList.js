import React from 'react';
import OneGuest from './oneGuest'

const GuestList = (props) => {
  return ( 
    
    <div>    
      
      <ul>
        {props.guests.map((guest, index) => 
         
          <OneGuest key={index} name={guest.name} confirmed={guest.confirmed} />
          
        )}
      </ul>



    </div>
  )
}







export default GuestList;