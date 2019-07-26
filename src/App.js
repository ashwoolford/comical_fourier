import React, { Component } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home"
//import About from "./components/About"
import Projects from "./components/Projects"
import FFTSimulator from './components/FFTSimulator'
import { HashRouter, Route, Link} from "react-router-dom";
export class App extends Component {

  
  render() {
    return (
      <HashRouter basename='/'>
      <div>
        <MyNavbar />
        <Route exact path="/" component={home} />
        <Route path="/simulate" component={FFTSimulator}></Route>
        <Route path="/about" component={about}/>
        <Route path="/projects" component={Projects}></Route>
      </div>
    </HashRouter>
    );
  }
}

const home = () => <Home />
const about = () => <div><h2>about</h2></div>

export default App;
