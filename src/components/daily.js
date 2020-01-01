import React, { Component } from "react";

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      long: 0,
      lat: 0,
      timezone: "",
      temperature: 0,
      summary: "",
      icon: ""
    };
  }
  render() {
    console.log("props", this.props);
    return <div></div>;
  }
}

export default Daily;
