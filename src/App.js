import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";

import StudentForm from "./components/StudentForm";

class App extends Component {
  handleClick = () => {
    console.log("I was clicked");
  };

  render() {
    return (
      <div className="App" onClick={this.handleClick}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <StudentForm />
        <Modal>
          <div className="modal">
            I AM A MODAL<button>Close x</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
