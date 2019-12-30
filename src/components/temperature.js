import React, { Component } from "react";

class Temperature extends Component {
  state = {};
  render() {
    return (
      <div className="temperature">
        <h2 className="degree">34</h2>
        <div className="temperature-description">It's cold</div>
      </div>
    );
  }
}

export default Temperature;
