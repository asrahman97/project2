import React from 'react';
import GuestEdit from './guestEdit'

const OneGuest = (props) => {
  return ( 
    
    <div>    
      
       
          <li>
            <GuestEdit editing={props.editing} handleEdits={e => props.setEdit(e.target.value)}>{props.name}</GuestEdit>
            <label>
              <input
                type='checkbox'
                checked={props.confirmed}
                onChange={props.handleConfirmation}
              /> 
              Confirm
            </label>
            <button onClick={props.handleToggleEditing}>{props.editing ? 'save' : 'edit'}</button>
            <button onClick={props.handleRemove}>remove</button>
          </li>
       



    </div>
  )
}







export default OneGuest;