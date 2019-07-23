import React, { Component } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import FFTSimulator from './components/FFTSimulator'
import { BrowserRouter as Router, Route } from "react-router-dom";
export class App extends Component {
  
  render() {
    return (
      <Router>
      <div>
        <MyNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/simulate" component={FFTSimulator}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/projects" component={Projects}></Route>
      </div>
    </Router>
    );
  }
}

export default App;
