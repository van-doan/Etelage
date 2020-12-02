import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-xhcivh2l.us.auth0.com"
    clientId="9ZGyZkkx49RKmrulA1wqLK2uRmq6mbwH"
    redirectUri='http://localhost:3000/callback'
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
