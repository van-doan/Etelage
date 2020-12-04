import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Searching from '../components/pages/Explore/sections/Searching';
import Home from '../components/pages/HomePage/Home';
import Landing from '../components/pages/LandingPage/Landing';
import Exhibit from '../components/pages/ExhibitDetails/Exhibit';
import UserRoutes from '../config/UserRoutes';

const Routes = (props) => {
  return (          
            <Switch>
              <Route path="/user/:id" component={UserRoutes}/>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/exhibit" component={Exhibit}/>
              <Route exact path="/search" component={Searching}/> 
            </Switch>
  )
}

export default Routes;