import React, { Component } from 'react';
import './App.css';
import rsz_hero from './images/rsz_hero.jpg'
import GuestList from './components/guestList'
import Header from './components/header'
import Footer from './components/footer'
import Counter from './components/counter'

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

  totalInvited = () => this.state.guests.length;
  confirmedGuests = () => this.state.guests.reduce((confirm, guest) => guest.confirmed ? confirm +1: confirm, 0)

  render() {

    const total = this.totalInvited();
    const numberConfirmed = this.confirmedGuests();
    const numberUnconfirmed = (total - numberConfirmed);

    return (
      <div className="App">
        July 25, 2020
        #insertCornyHashtagHere

        <Header />

        <div>
          <img src={rsz_hero} alt='img goes here' className='hero'/>
        </div>

        <form onSubmit={this.newGuest}>
          <input type='text' placeholder='Type Invitee Name' onChange={this.handleNameInput} value={this.state.inputGuest} />
          <button type='submit' name='submit' value='submit'>Submit</button>
        </form>
        
        <Counter
          total={total}
          numberConfirmed={numberConfirmed}
          numberUnconfirmed={numberUnconfirmed}
        />


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

        <div className='break'></div>

    
        <Footer />


    </div>
    );
  }
}

export default App;
