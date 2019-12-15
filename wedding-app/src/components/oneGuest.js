import React from 'react';

const OneGuest = (props) => {
  return ( 
    
    <div>    
      
       
          <li>
            <p>{props.name}</p>
            <label>
              <input type='checkbox' checked={props.confirmed} /> Confirm
            </label>
            <button>edit</button>
            <button>remove</button>
          </li>
       



    </div>
  )
}







export default OneGuest;