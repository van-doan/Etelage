import React from 'react';
import { Switch, Route } from 'react-router-dom';

const SocialRoutes = (props) => {
  return (          
            <Switch>
              <Route exact path="/user/:id" component={UserPage}/>
              <Route exact path="/user/following" component={Following}/>
              <Route exact path="/user/following" component={Followers}/>
            </Switch>
  )
}

export default SocialRoutes;