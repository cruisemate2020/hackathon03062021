import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Jokes from "./components/Jokes.js";
import Gifs from "./components/Gifs.js";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/gifs">Animated Gifs</Link>
          <Link to="/jokes">Jokes</Link>
        </nav>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/gifs" render={(props) => <Gifs {...props} />} />
          <Route exact path="/jokes" render={(props) => <Jokes {...props} />} />
        </Switch>{" "}
      </div>
    );
  }
}
