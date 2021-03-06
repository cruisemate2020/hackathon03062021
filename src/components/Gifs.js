import React, { Component } from "react";
import axios from "axios";

export default class Gifs extends Component {
  state = {
    gif: "",
  };

  componentDidMount() {
    this.fetchNewGifs();
  }

  fetchNewGifs = () => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/random?api_key=hPyMawzi7mKO3sf0LuQU7B1e176BiOL8&tag=funny"
      )
      .then((res) => {
        console.log(res);
        this.setState({ gif: res.data.data.image_url });
      });
  };

  getGifs() {
    return <img src={this.state.gif} alt="funny gif" />;
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>{this.getGifs()}</div>
        <button className="btn" onClick={this.fetchNewGifs}>Show Me Another!</button>
      </div>
    );
  }
}
