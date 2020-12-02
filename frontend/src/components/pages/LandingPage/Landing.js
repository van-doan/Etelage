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
    </div>
  )
}

export default Landing;