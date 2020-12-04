import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import './scss/app.scss';
import NavBar from './components/pages/Navbar/Navbar';
import Routes from './config/Routes';

// import axios from 'axios';

export default class App extends React.Component {
  render() {
    return (
      <div>
          <Router>
            <NavBar />
            <Routes />
          </Router>
      </div>
  );
  }
}
