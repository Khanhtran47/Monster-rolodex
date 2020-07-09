import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [
        {
          name: "Frankenstein",
        },
        {
          name: "Dracula",
        },
        {
          name: "Zombie",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "Hello Andrei" })}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
