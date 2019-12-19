import React, { Component } from "react";
import RegistryItems from "./registryItems";

class Registry extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="reg-card">

        <RegistryItems />

      </div>
    );
  }
}

export default Registry;
