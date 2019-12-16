import React from 'react';
import OneGuest from './oneGuest'

const GuestList = (props) => {
  return ( 
    
    <div>    
      
      <ul>
        {props.guests.map((guest, index) => 
         
          <OneGuest
            key={index}
            name={guest.name}
            confirmed={guest.confirmed}
            editing={guest.editing}
            handleConfirmation={() => props.toggleConfirmation(index)}
            handleToggleEditing={() => props.toggleEditing(index)}
            setEdit={text => props.setEditWithIndex(text, index)}
          />
          
        )}
      </ul>



    </div>
  )
}







export default GuestList;