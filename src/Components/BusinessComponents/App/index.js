import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Switch, BrowserRouter as Router } from 'react-router-dom';
import Settings from './../../BusinessComponents/Settings'
import GithubConfig from './../../BusinessComponents/GithubConfig'
import Home from './../../BusinessComponents/Home'
import Quiz from './../../BusinessComponents/Quiz';
import ExistingQuiz from './../../BusinessComponents/ExistingQuiz';
import Layout from './../Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => <Layout className="home"><Home /></Layout>} />
          <Route exact path="/configure" render={(props) => <Layout><Settings /></Layout>} />
          <Route exact path="/try" render={(props) => <Layout><ExistingQuiz /></Layout>} />
          <Route path="/configure/github" render={(props) => <Layout><GithubConfig /></Layout>} />
          <Route path="/quiz/:quizID" component={Quiz} />
        </div>
      </Router>
    );
  }
}

export default App;
