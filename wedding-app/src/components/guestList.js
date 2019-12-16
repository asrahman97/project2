import React from 'react';
import OneGuest from './oneGuest'
import GhostGuest from './ghostGuest'

const GuestList = (props) => {
  return ( 
    
    <div>    
      
      <ul>

        <GhostGuest name={props.ghostGuest} />


        {props.guests.map((guest, index) => 
         
          <OneGuest
            key={index}
            name={guest.name}
            confirmed={guest.confirmed}
            editing={guest.editing}
            handleConfirmation={() => props.toggleConfirmation(index)}
            handleToggleEditing={() => props.toggleEditing(index)}
            setEdit={text => props.setEditWithIndex(text, index)}
            handleRemove={() => props.removeGuest(index)} 
          />
          
        )}
      </ul>



    </div>
  )
}







export default GuestList;