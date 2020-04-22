import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from './components/Navbar.js';
import './App.css';
import HomePage from './container/HomePage.js';
import Project from './container/Project.js';
import About from './components/About.js';
import Contact from './components/Contact.js';


class App extends Component {
  
  render(){
  
  return (
    <div className="App">
      <Router>
      <NavigationBar />
     
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
