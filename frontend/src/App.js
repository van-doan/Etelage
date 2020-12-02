import React from 'react';
import './scss/app.scss';
import NavBar from './components/pages/Navbar/Navbar';
import Landing from './components/pages/LandingPage/Landing';

// import axios from 'axios';

function App() {
  return (
    <div>
      <NavBar />
      <Landing />
    </div>
  );
}

export default App;
