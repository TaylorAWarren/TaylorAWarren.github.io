import React from 'react';
import './App.css';
import Jobs from './components/resume/Jobs';
import { withRouter, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home'
import Resume from './components/resume/Resume';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
