import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Search from '../components/pages/Explore/Search';
import Home from '../components/pages/HomePage/Home';
import Landing from '../components/pages/LandingPage/Landing';
import Exhibit from '../components/pages/ExhibitDetails/Exhibit';

const SocialRoutes = (props) => {
  return (          
            <Switch>
              <Route exact path="/user/:id" component={UserPage}/>
              <Route exact path="/user/following" component={Following}/>
              <Route exact path="/user/following" component={Followers}/>
            </Switch>
  )
}

export default Routes;