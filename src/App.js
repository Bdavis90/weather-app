import React, { Component } from "react";
import Location from "./components/location";
import Daily from "./components/daily";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Location />
        {/* <Daily /> */}
      </div>
    );
  }
}

export default App;
