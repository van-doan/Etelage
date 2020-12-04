import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

const ProfileTabs = () => {
  return(
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row
        className="profile-row">
        <Col 
          sm={12} md={12} lg={12} xl={12}
          className="profile-col">
          <Nav className="profile-nav justify-content-center">
            <Nav.Item
              className="prof-nav-item">
              <Nav.Link 
                eventKey="first"
                className="prof-link">
                  MY SHOWS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="prof-nav-item">
              <Nav.Link 
                eventKey="second"
                className="prof-link">
                  LIKED
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col
          className="prof-content" 
          sm={12} md={12} lg={12} xl={12}>
          <Tab.Content>
            <Tab.Pane 
              eventKey="first"
              className="my-show-content">
                User Created Exhibits Show Here
            </Tab.Pane>
            <Tab.Pane 
              eventKey="second"
              className="likes-content">
                User Liked Content Shows Here
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default ProfileTabs;