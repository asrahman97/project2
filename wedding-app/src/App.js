import React, { Component } from "react";
import "./App.css";

import Main from "./components/main";

import Header from "./components/header";
import Footer from "./components/footer";
import HeroPhoto from "./components/heroPhoto";

import Photos from "./components/photos";

import { Route } from "react-router-dom";
import Registry from "./components/registry";

class App extends Component {
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

  render() {
    return (
      <div className="App">
        July 25, 2020 #insertCornyHashtagHere
        <Header />
        <Route path="/photos" component={Photos} />
        <Route path="/registry" render={() => <Registry />} />
        <HeroPhoto />
        <Route path="/main" render={() => <Main />} />
        <div className="break"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
