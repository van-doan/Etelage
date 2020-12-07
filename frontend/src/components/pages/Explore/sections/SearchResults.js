import React, { useState, useEffect } from 'react';
import API from '../../../../config/API';
import { useAuth0 } from "@auth0/auth0-react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
// import moment from 'moment';

const SearchResults = ({data}) => {
  const [showModal, setShow] = useState(false);
  const [user, setUserId] = useState();
  const [addExhibit, setNewExhibit] = useState({
    exhibition_id: null,
    title: '',
    description: '',
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setNewExhibit({...addExhibit, [event.target.name]: event.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (addExhibit.exhibition_id === null) {
      API.addArtToExhibit({user_id: user, title: addExhibit.title, description: addExhibit.description})
    } else {
      API.editExhibit({user_id: user, title: addExhibit.title, description: addExhibit.description})
    }
  }

  if(!data) return null
  const getLargeImage = () =>  {
    let url = data._links.thumbnail.href
    return url.replace("square", "large")
  }
  return (
    <div className="explore-div">
      <input type="image" className="explore-img" alt="" onClick={handleShow} src={getLargeImage()} />
    <div className="explore-overlay">
      <div className="explore-desc">
        <h3 className="explore-title">{data.title}</h3>
        <p className="explore-dates">{data.description}</p>
      </div>
    </div>
    <Modal show={showModal} onSubmit={handleSubmit} onHide={handleClose}>
        <Modal.Header closeButton>
          New Art For Your Latest Exhibit?
        </Modal.Header>
        <Modal.Body>
          <h3 className="modal-art-title">{data.title}</h3>
          <p className="modal-art-desc">{data.description}</p>
          <Form
            className="modal-art-form">
            <Form.Group controlId="newExhibitDescription">
              <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text" 
                  name="title"
                  value={addExhibit.title}
                  onChange={handleChange}
                  placeholder="Exhibit Title"
                  required>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="newExhibitDesc">
              <Form.Label>Description</Form.Label>
                <Form.Control 
                  type="text" 
                  name="description"
                  value={addExhibit.description}
                  onChange={handleChange}
                  placeholder="Description of Your Exhibit"
                  required>
                </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer> 
          <Button variant="outline-info" type="submit" formMethod="POST">SUBMIT</Button>
          <Button variant="outline-dark" onClick={handleClose}>CANCEL</Button>
        </Modal.Footer>
    </Modal>
  </div>
  );
}

export default SearchResults;