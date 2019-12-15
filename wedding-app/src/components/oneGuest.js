import React from 'react';
import GuestEdit from './guestEdit'

const OneGuest = (props) => {
  return ( 
    
    <div>    
      
       
          <li>
            <GuestEdit editing={props.editing}>{props.name}</GuestEdit>
            <label>
              <input
                type='checkbox'
                checked={props.confirmed}
                onChange={props.handleConfirmation}
              /> 
              Confirm
            </label>
            <button onClick={props.handleToggleEditing}>edit</button>
            <button>remove</button>
          </li>
       



    </div>
  )
}







export default OneGuest;