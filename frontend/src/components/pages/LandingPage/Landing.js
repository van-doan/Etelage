import React from 'react';
import axios from 'axios';

function Landing () {
  const test = async () => {
    let res = await axios.get('/home') 
    console.log(res.data)
  }
  test();
  return (
    <div className="container-fluid px-0 landing-bg">
      <div className="intro-text">
        <h1 className="intro-header">THE PRINCIPLES OF TRUE ART IS NOT TO PORTRAY, BUT TO EVOKE</h1>
        <h3 className="second-header">WHAT DOES YOUR AESTHETIC SAY ABOUT YOU?</h3>
      </div>
    </div>
  )
}

export default Landing;