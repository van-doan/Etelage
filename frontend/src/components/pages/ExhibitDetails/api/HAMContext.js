import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { HARVARD_API_KEY } from '../../../../config/key.js';

export const HAMContext = createContext()

export const HAMContextProvider = (props) => {
  const [data, setData] = useState()
  const beginDate = 'begindate:2010-01-01'
  const imgTrue = 'hasimage=1'
  const resource = 'exhibition'
  // const location_around = '10mi'
  // &location_around.offset=${location_around} within get query

  useEffect(() => {
    axios
    .get(
      `https://api.harvardartmuseums.org/${resource}?${beginDate}&${imgTrue}&apikey=${HARVARD_API_KEY}&size=10` 
    )
    .then((response) => {
      setData(response.data);
      console.log(response.data);
    })
    .catch((error) => console.log(error));
  }, []);

  return (
    <HAMContext.Provider 
      value = {{ data }}>
      {props.children}
    </HAMContext.Provider>
  )
}