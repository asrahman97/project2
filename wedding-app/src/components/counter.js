import React from 'react'

const Counter = (props) => {
  return (
    <div>
        <table className='counter'>
          <tbody>
            <tr>
              <td>Confirmed</td>
              <td>{props.numberConfirmed}</td>
            </tr>
            <tr>
              <td>Unconfirmed</td>
              <td>{props.numberUnconfirmed}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{props.total}</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}


export default Counter