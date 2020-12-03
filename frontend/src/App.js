import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './scss/app.scss';
import NavBar from './components/pages/Navbar/Navbar';
import Landing from './components/pages/LandingPage/Landing';
// import Home from './components/pages/HomePage/Home';
import Exhibit from './components/pages/ExhibitDetails/Exhibit';
// import Search from './components/pages/Explore/Search';
import Profile from './components/pages/Profile/Profile';

// import axios from 'axios';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Landing />
            <Switch>
              {/* <Route exact path="/home" component={Home}/> */}
              <Route exact path="/exhibit" component={Exhibit}/>
              {/* <Route exact path="/search" component={Search}/> */}
              <Route exact path="/user" component={Profile}/>
            </Switch>
        </Router>
      </div>
  );
  }
}
