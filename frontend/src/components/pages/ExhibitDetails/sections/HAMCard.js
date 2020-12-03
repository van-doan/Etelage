import React from 'react';
// import moment from 'moment';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HAMExhibit = ({data}) => {
  // const formattedBeginDate = moment(new Date(data.records.begindate)).format("ll")
  // const formattedEndDate = moment(new Date(data.records.enddate)).format("ll")
  return (
      <Row>
        <Col>
         <div className="exhibit-div">
           <a href={`https://www.harvardartmuseums.org/exhibitions/${data.exhibitionid}`}>
            <img className="exhibit-img" alt="" src={data.primaryimageurl} />
           </a>
          <div className="exhibit-overlay">
            <div className="exhibit-desc">
              <h2 className="exhibit-title">{data.title}</h2>
              <p className="card-body news__desc">{data.begindate}–{data.enddate}</p>
            </div>
          </div>
        </div>
        </Col>
      </Row>
  );
}

export default HAMExhibit;