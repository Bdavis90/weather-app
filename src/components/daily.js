import React, { Component } from "react";
import Skycons from "../skycons";

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyLat: 0,
      dailyLong: 0,
      dailySummary: "",
      dailyIcon: "",
      dailyData: []
    };
  }

  getDailyWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({ dailyLong: position.coords.longitude });
        this.setState({ dailyLat: position.coords.latitude });
        console.log("dailyPosition", position);
        console.log("lat", this.state.dailyLat);
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/30b1f2e824444b68d4ac18c0925070b9/${this.state.dailyLat}, ${this.state.dailyLong}`;

        fetch(api)
          .then(res => res.json())
          .then(dailyData => {
            console.log("dailyData", dailyData);
            const { data, summary, icon } = dailyData.daily;
            this.setState({
              dailySummary: summary,
              dailyIcon: icon,
              dailyData: data
            });
            this.setDailyIcons(
              this.state.dailyIcon,
              document.querySelector("#icon2")
            );
          })
          .catch(err => console.log(err));
      });
    }
  };

  setDailyIcons(dailyIcon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const dailyIcons = dailyIcons.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[dailyIcon]);
  }

  render() {
    console.log("dailyState", this.state);
    return (
      <div className="daily" onLoad={this.getDailyWeather()}>
        <canvas id="icon2" width="128" height="128"></canvas>
        <div>{this.state.dailySummary}</div>
        <div>{this.state.dailyIcon}</div>
      </div>
    );
  }
}

export default Daily;
