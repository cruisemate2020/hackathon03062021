import React, { Component } from "react";
import axios from "axios";

export default class Jokes extends Component {
  state = {
    jokes: [],
    i: 0,
  };

  componentDidMount() {
    this.fetchNewJokes();
  }

  fetchNewJokes = () => {
    axios
      .get(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,racist,explicit&type=single&amount=10"
      )
      .then((res) => {
        console.log(res);
        let newJokes = [...this.state.jokes, ...res.data.jokes];
        this.setState({ jokes: newJokes });
      });
  };

  getJokes() {
    return this.state.jokes.map((eachJoke) => {
      // console.log(eachJoke);
      return <div>{eachJoke.joke}</div>;
    });
  }

  showNextJoke = () => {
    let i = this.state.i + 1;
    this.setState({ i });
    if (i % 10 === 0) {
      this.fetchNewJokes();
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {/* <div className="grid">{this.getJokes()}</div> */}
        <div className="joke_txt">{this.state.jokes[this.state.i]?.joke}</div>
        <button className="btn" onClick={this.showNextJoke}>
          Tell Me Another!
        </button>
      </div>
    );
  }
}
