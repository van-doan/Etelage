import React from 'react';
import { HAMContextProvider } from '../ExhibitDetails/api/HAMContext';
import HAMExhibit from "../ExhibitDetails/sections/HAMExhibit";

const Exhibit = () => {
  return (
      <HAMContextProvider>
        <HAMExhibit />
      </HAMContextProvider>
  );
}

export default Exhibit;