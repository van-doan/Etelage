import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserEditForm from '../components/pages/HomePage/forms/EditForm';

const UserRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/edit">
            <UserEditForm />
        </Route>
        <Route path="/exhibit/new">
           <ExhibitForm user={this.props.user} />
        </Route>
      </Switch>
    </Router>
  )
}

export default UserRoutes;