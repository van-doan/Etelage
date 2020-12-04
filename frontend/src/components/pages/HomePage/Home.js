import React from "react";
import Row from 'react-bootstrap/Row'
import { useAuth0 } from "@auth0/auth0-react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

// Component Imports //
import Profile from '../HomePage/sections/Profile'
// import TabContent from 'react-bootstrap/TabContent'
// import TabContainer from 'react-bootstrap/TabContainer'
// import TabPane from 'react-bootstrap/TabPane'
// import axios from 'axios';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  // const test = async () => {
  //   let res = await axios.get('/home') 
  //   console.log(res.data)
  // }
  // test();
  return (
    isAuthenticated && (
    <Container fluid
      className="home-parent">
    <Tab.Container
      id="left-tab" 
      className="home-container vh-100"
      defaultActiveKey="first">
      <Row
        className="home-row">
        <Col
        xs={12} sm={3} lg={3} xl={3}
        className="home-column">
          <Nav className="flex-column home-nav">
            <Nav.Item
              className="home-nav-item">
              <Nav.Link 
                eventKey="first">MY FEED</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="home-nav-item">
              <Nav.Link 
                eventKey="second">PROFILE</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="home-nav-item">
              <Nav.Link 
                eventKey="third">NOTIFICATIONS</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="home-nav-item">
              <Nav.Link 
                eventKey="fourth">RECOMMENDED</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col
        xs={12} sm={9} lg={9} xl={9}
        className="home-results">
          <Tab.Content>
            <Tab.Pane 
              eventKey="first"
              className="feed-content">
              Feed Component Will Go Here
            </Tab.Pane>
            <Tab.Pane 
              eventKey="second"
              className="profile-content">
              <Profile/>
            </Tab.Pane>
            <Tab.Pane 
              eventKey="third"
              className="notif-content">
              Notifications Component Will Go Here
            </Tab.Pane>
            <Tab.Pane 
              eventKey="fourth"
              className="rec-content">
              Recommended Component Will Go Here
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Container>
    )
  )
}

export default Home;