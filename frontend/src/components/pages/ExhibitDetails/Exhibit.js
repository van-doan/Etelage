import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { HAMContextProvider } from '../ExhibitDetails/api/HAMContext';
import HAMExhibit from "../ExhibitDetails/sections/HAMExhibit";
import FeaturedExhibit from "../ExhibitDetails/sections/FeaturedExhibit";

const Exhibit = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <>
      <FeaturedExhibit/>
      <HAMContextProvider>
        <HAMExhibit />
      </HAMContextProvider>
    </>  
    )
  );
}

export default Exhibit;