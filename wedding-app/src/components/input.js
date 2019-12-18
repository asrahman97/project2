import React from 'react';





const Input = (props) => {
  return (

    <div>
      <form onSubmit={props.newGuest}>
          <input type='text' placeholder='Type Invitee Name' onChange={props.handleNameInput} value={props.inputGuest} />
          <button type='submit' name='submit' value='submit'>Submit</button>
        </form>
    </div>
  )
}



export default Input;