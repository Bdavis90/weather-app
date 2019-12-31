import React, { Component } from "react";
import Temperature from "./temperature";
import { Skycons } from "../skycons";
class Location extends Component {
  state = {
    long: 0,
    lat: 0,
    timezone: "",
    temperature: 0,
    summary: "",
    icon: ""
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ long: position.coords.longitude });
      this.setState({ lat: position.coords.latitude });

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/30b1f2e824444b68d4ac18c0925070b9/${this.state.lat}, ${this.state.long}`;

      fetch(api)
        .then(res => res.json())
        .then(data => {
          const { temperature, summary, icon } = data.currently;
          const temp = temperature;
          const description = summary;

          this.setState({ temperature: temp });
          this.setState({ summary: description });
          this.setState({ timezone: data.timezone });
          this.setState({ icon });
          this.setIcons(this.state.icon, document.querySelector("#icon1"));
        });
    });
  };
  setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace("-", "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }

  render() {
    return (
      <div>
        <div className="location" onLoad={this.getLocation()}>
          <h1 className="location-timezone">{this.state.timezone}</h1>
          <canvas id="icon1" width="128" height="128"></canvas>
        </div>
        <div>
          <Temperature
            temperature={Math.round(this.state.temperature)}
            summary={this.state.summary}
          />
        </div>
      </div>
    );
  }
}

export default Location;
