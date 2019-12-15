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
          confirmed: true
        },

        {
          name: 'Sriti',
          confirmed: false
        }

      ]
    }




  }

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

        <input type='text' placeholder='Type Invitee Name'>
        </input>

        <div className='votes'>
          Where all the guest divs will stay!
        </div>

        {/* <GuestList /> */}

        <ul>
        {this.state.guests.map((guest, index) => 
          <li key={index}>
            <p>{guest.name}</p>
            <label>
              <input type='checkbox' checked={guest.confirmed} /> Confirm
            </label>
            <button>edit</button>
            <button>remove</button>
        </li>
        )}
      </ul>



    </div>
    );
  }
}

export default App;
