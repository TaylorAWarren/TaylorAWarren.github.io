import React from 'react';
import './App.css';
import Jobs from './components/resume/Jobs';
import { withRouter, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home'
import Resume from './components/resume/Resume';
import About from './components/about/About'

function App() {
  return (
    <div className='appContainer'>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
