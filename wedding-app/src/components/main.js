import React, { Component } from "react";
import "../App.css";

import GuestList from "./guestList";
import Footer from "./footer";
import Counter from "./counter";
import { apiCall } from "./randomGuests";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputGuest: "",
      guests: [
        {
          name: "Ash",
          confirmed: true,
          editing: false
        },

        {
          name: "Sriti",
          confirmed: true,
          editing: false
        }
      ]
    };
  }

  toggleConfirmation = indexToChange =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            confirmed: !guest.confirmed
          };
        }
        return guest;
      })
    });

  toggleGuestProperty = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmation = index => this.toggleGuestProperty("confirmed", index);

  toggleEditing = index => this.toggleGuestProperty("editing", index);

  removeGuest = index =>
    this.setState({
      guests: [
        ...this.state.guests.splice(0, index),
        ...this.state.guests.splice(index + 1)
      ]
    });

  setEditWithIndex = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  handleNameInput = e =>
    this.setState({
      inputGuest: e.target.value
    });

  newGuest = e => {
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
      inputGuest: ""
    });
  };

  totalInvited = () => this.state.guests.length;
  confirmedGuests = () =>
    this.state.guests.reduce(
      (confirm, guest) => (guest.confirmed ? confirm + 1 : confirm),
      0
    );

  componentDidMount = async () => {
    const allGuests = this.state.guests;
    console.log(allGuests);

    const results = await apiCall();
    console.log(results.data[0].name);

    let tempObj = {
      name: results.data[0].name,
      confirmed: true,
      editing: false
    };

    let tempObj2 = {
      name: results.data[1].name,
      confirmed: true,
      editing: false
    };

    allGuests.push(tempObj, tempObj2);
    console.log(allGuests);

    this.setState({ allGuests });
  };

  render() {
    const total = this.totalInvited();
    const numberConfirmed = this.confirmedGuests();
    const numberUnconfirmed = total - numberConfirmed;

    return (
      <div className="App">
        <form onSubmit={this.newGuest}>
          <input
            className="field"
            type="text"
            placeholder="Type Invitee Name"
            onChange={this.handleNameInput}
            value={this.state.inputGuest}
          />
          <button className="button" type="submit" name="submit" value="submit">
            Submit
          </button>
        </form>

        <Counter
          total={total}
          numberConfirmed={numberConfirmed}
          numberUnconfirmed={numberUnconfirmed}
        />

        <GuestList
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setEditWithIndex={this.setEditWithIndex}
          removeGuest={this.removeGuest}
          ghostGuest={this.state.inputGuest}
        />

        <div className="break"></div>

        <Footer />
      </div>
    );
  }
}

export default Main;
