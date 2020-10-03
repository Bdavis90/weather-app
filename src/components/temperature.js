import React, { Component } from "react";

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: "F",
    };
  }

  render() {
    return (
      <div className="temperature">
        <div className="degree-section">
          <h2 className="temperature-degree">{this.props.temperature}</h2>
          <span>{this.state.degree}</span>
        </div>
        <div className="temperature-description">{this.props.summary}</div>
      </div>
    );
  }
}

export default Temperature;
