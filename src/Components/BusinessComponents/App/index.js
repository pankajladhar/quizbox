import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Switch, BrowserRouter as Router } from 'react-router-dom';
import Settings from './../../BusinessComponents/Settings'
import Home from './../../BusinessComponents/Home'
import Quiz from './../../BusinessComponents/Quiz';
import Layout from './../Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => <Layout className="home"><Home /></Layout>} />
          <Route path="/configure" render={(props) => <Layout className="configure"><Settings /></Layout>} />
          <Route path="/quiz/:quizID" component={Quiz} />
        </div>
      </Router>
    );
  }
}

export default App;
