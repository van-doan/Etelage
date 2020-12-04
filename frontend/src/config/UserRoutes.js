import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EditForm from '../components/pages/HomePage/forms/EditForm';

const UserRoutes = (props) => {
  return (
      <Switch>
        <Route path="/user/:id/edit" component={EditForm} />
        {/* <Route path="/exhibit/new">
           <ExhibitForm user={this.props.user} />
        </Route> */}
      </Switch>
  )
}

export default UserRoutes;