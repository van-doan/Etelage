import React, { useContext } from "react";
import Container from 'react-bootstrap/Container'
import { HAMContext } from "../api/HAMContext";
import HAMCard from "../sections/HAMCard";

function HAMExhibit(props) {
  const { data } = useContext(HAMContext);
  console.log(data);

  return (
    <Container 
    fluid 
    className="wexh-container my-5">
        {data
          ? data.records.map((wexhibits) => (
              <HAMCard data={wexhibits} />
            ))
          : "There are no exhibits at this time."}
    </Container>
  );
}

export default HAMExhibit;