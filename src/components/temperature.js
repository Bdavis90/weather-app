import React, { Component } from "react";

class Temperature extends Component {
  state = {};
  render() {
    return (
      <div className="temperature">
        <div className="degree-section">
          <h2 className="temperature-degree">34</h2>
          <span>F</span>
        </div>
        <div className="temperature-description">It's cold</div>
      </div>
    );
  }
}

export default Temperature;
