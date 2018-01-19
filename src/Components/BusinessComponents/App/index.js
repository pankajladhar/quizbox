import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Switch, BrowserRouter as Router } from 'react-router-dom';
import Settings from './../../BusinessComponents/Settings'
import Quiz from './../../BusinessComponents/Quiz'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Settings} />
          <Route path="/settings" component={Settings} />
          <Route path="/quiz/:quizID" component={Quiz} />
        </div>
      </Router>
    );
  }
}

export default App;
