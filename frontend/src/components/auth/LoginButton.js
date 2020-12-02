import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    !isAuthenticated && (
      <a className="nav-item nav-item-auth" onClick={() => loginWithRedirect()}>
        LOG IN
      </a>
    )
  )
}

export default LoginButton;