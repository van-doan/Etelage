import React from 'react';
import { HAMContextProvider } from '../ExhibitDetails/api/HAMContext';
import HAMExhibit from "../ExhibitDetails/sections/HAMExhibit";
import FeaturedExhibit from "../ExhibitDetails/sections/FeaturedExhibit";

const Exhibit = () => {
  return (
    <>
      <FeaturedExhibit/>
      <HAMContextProvider>
        <HAMExhibit />
      </HAMContextProvider>
    </>  
  );
}

export default Exhibit;