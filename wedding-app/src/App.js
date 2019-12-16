import React, { Component } from 'react';
import './App.css';
import GuestList from './components/guestList'
import Header from './components/header'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputGuest: '',
      guests: [
        {
          name: 'Ash',
          confirmed: true,
          editing: false
        },

        {
          name: 'Sriti',
          confirmed: true,
          editing: false
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
  
  
  removeGuest = (index) => 
    this.setState({
      guests: [
        ...this.state.guests.splice(0, index),
        ...this.state.guests.splice(index + 1)
      ]
    })
  
  
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

  handleNameInput = (e) => 
    this.setState({
      inputGuest: e.target.value
    })
  
  newGuest = (e) => {
    e.preventDefault();
      this.setState({
        guests: [
          {
            name: this.state.inputGuest,
            confirmed: false,
            editing: false
          },
          ...this.state.guests
        ],
        inputGuest: ''
        
      })
  }


  render() {
    return (
      <div className="App">
        July 25, 2020
        #insertCornyHashtagHere

        <Header />

        <div>
          <img src='../hero.jpg' alt='img goes here' />
        </div>

        <form onSubmit={this.newGuest}>
          <input type='text' placeholder='Type Invitee Name' onChange={this.handleNameInput} value={this.state.inputGuest} />
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
          removeGuest={this.removeGuest}
          ghostGuest={this.state.inputGuest}
        />

    



    </div>
    );
  }
}

export default App;
