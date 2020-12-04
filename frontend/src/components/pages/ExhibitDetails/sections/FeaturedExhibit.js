import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import exampleImage from '../../../../assets/images/example-exhibit.jpg'

const FeaturedExhibit = () => {
  return (
    <Container 
    fluid 
    className="featured-container my-5">
      <h1 className="feat-header">FEATURED EXHIBITS</h1>
      <Row>
        <Col>
        <div className="featured-div">
           <a className="featured-link" href="#">
            <img className="featured-img" alt="" src={exampleImage} />
           </a>
          <div className="featured-overlay">
            <div className="featured-desc">
              <h3 className="featured-title">A Collection of Abloh</h3>
              <p className="featured-author">Curated by doan.andy</p>
              <p className="featured-author">Dec 4th, 2020</p>
            </div>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FeaturedExhibit;