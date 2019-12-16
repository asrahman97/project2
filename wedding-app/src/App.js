import React, { Component } from 'react';
import './App.css';
import GuestList from './components/guestList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: [
        {
          name: 'Ash',
          confirmed: true,
          editing: false
        },

        {
          name: 'Sriti',
          confirmed: true,
          editing: true
        }

      ]
    }




  }


  toggleConfirmation = (indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            confirmed: !guest.confirmed
          }
        }
        return guest
      })
    })
  
  
  toggleGuestProperty = (property, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
          [property]: !guest[property]
          }
        }
        return guest
      })
    })
  
  
  toggleConfirmation = (index) =>
    this.toggleGuestProperty('confirmed', index)
  
  toggleEditing = (index) =>
    this.toggleGuestProperty('editing', index)
  
  
  
    setEditWithIndex = (name, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
          name
          }
        }
        return guest
      })
    })
  

  totalInvited = () => this.state.guests.length;



  render() {
    return (
      <div className="App">
        July 25, 2020
        #insertCornyHashtagHere

        <nav className='header'>
          <h3>RSVP</h3>
          <h3>Photos</h3>
          <h3>Registry</h3>
        </nav>

        <div>
          <img src='' alt='img goes here' />
        </div>

        <form>
          <input type='text' placeholder='Type Invitee Name' />
          <button type='submit' name='submit' value='submit'>Submit</button>
        </form>
        
        <table className='counter'>
          <tbody>
            <tr>
              <td>Confirmed</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>


        <div className='votes'>
          Where all the guest divs will stay!
        </div>

        <GuestList
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setEditWithIndex={this.setEditWithIndex}
        />

    



    </div>
    );
  }
}

export default App;
