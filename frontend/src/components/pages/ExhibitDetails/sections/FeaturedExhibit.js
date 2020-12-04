import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FeaturedExhibit = () => {
  return (
    <Container 
    fluid 
    className="featured-container my-5">
      <Row>
        <Col>
        <div className="featured-div">
           <a className="featured-link" href="#">
            {/* <img className="exhibit-img" alt="" src={data.primaryimageurl} /> */}
            <h1>User's Exhibit Image will go here</h1>
           </a>
          <div className="featured-overlay">
            <div className="featured-desc">
              <h3 className="featured-title">User's Exhibit Title</h3>
              <p className="featured-author">User's Name</p>
            </div>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FeaturedExhibit;