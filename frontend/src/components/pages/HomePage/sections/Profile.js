import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'
import API from '../../../../config/API'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ProfileTabs from '../sections/ProfileTabs'
import ProfilePic from '../../../../assets/images/prof-pic.JPEG'

const Profile = () => {
  const [username, setUsername] = useState();
  const { user, isAuthenticated } = useAuth0();
  const getUserId = () => {
    return user.sub.replace('auth0|', '')
  }

  useEffect(() => {
      API.getUserById(getUserId())
      .then(res=> {
        setUsername(res.username)
      })
    })

  return (
    isAuthenticated && ( 
     <Container 
     fluid
     className="user-container">
       <Row
       className="user-row">
         <Col
         className="user-col"
         xs={5} sm={5} lg={5} xl={5}>
           <div className="user-pic-container">
            <img className="user-pic" src={ProfilePic} alt=""/>
           </div>
         </Col>
         <Col
         className="user-col"
         xs={7} sm={7} lg={7} xl={7}>
           <Row>
             <Col
              xs={12} sm={12} lg={12} xl={12}
              className="prof-details">
              <h2 className="prof-name">{username}</h2>
              <button className="edit-prof"><Link to={{pathname: `user/${getUserId()}/edit`}}>EDIT ACCOUNT</Link></button>
             </Col>
           </Row>
           <Row>
           <Col
              className="prof-statistics"
              xs={4} sm={4} lg={4} xl={4}>
             <h4 className="prof-stats">SHOWS</h4>             
              <h5 className="stat"><a href="">0</a></h5>
           </Col>
           <Col
              className="prof-statistics"
              xs={4} sm={4} lg={4} xl={4}>
              <h4 className="prof-stats">FOLLOWING</h4>
              <h5 className="stat"><a href="">0</a></h5>
             </Col>
           <Col
              className="prof-statistics"
              xs={4} sm={4} lg={4} xl={4}>
              <h4 className="prof-stats">FOLLOWERS</h4>
              <h5 className="stat"><a href="">0</a></h5>
             </Col>
           </Row>
         </Col>         
       </Row>
       <ProfileTabs />
      </Container>
    )
  )
}

export default Profile
