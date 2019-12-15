import React from 'react';

const guestEdit = (props) => {
  
  if (props.editing) {
    return (
      <input type='text' value={props.children} />
    )
  } else {
    return (
      <span>
        {props.children}
      </span>
    )
  }


}







export default guestEdit;