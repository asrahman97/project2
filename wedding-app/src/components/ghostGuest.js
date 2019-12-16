import React from 'react';
import OneGuest from './oneGuest'

const GhostGuest = (props) => {
  
  if (props.name) {
    return (
      <div>
        <li className='ghost'>
          <span>
            {props.name}
          </span>
        </li>
      </div>
    )
  } 
    return null
  
}



export default GhostGuest;