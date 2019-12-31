import React, { Component } from "react";
import Location from "./components/location";
import Temperature from "./components/temperature";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Location />
        {/* <Temperature /> */}
      </div>
    );
  }
}

export default App;
