import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Login from "./components/Login/Login";
import Private from "./components/Private/Private";
import Profile from "./components/Profile/Profile"

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
              <Route path="/" component={Login} exact/>
              <Route path="/private" component={Private}/>
              <Route path="/profile" component={Profile}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
