import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./login/login";
import Home from "./home/home";

// React component
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path= "/" component={Login}></Route>
        <Route path= "/home" component={Home}></Route>
      </Router>
    )
  }
}


export default App;
