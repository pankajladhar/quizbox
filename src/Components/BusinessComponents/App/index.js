import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Switch, BrowserRouter as Router } from 'react-router-dom';
import Settings from './../../BusinessComponents/Settings'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Online Quiz Builder</h1>
          </header>
          <main className="container">
            <Route exact path="/" component={Settings} />
            <Route path="/settings" component={Settings} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
