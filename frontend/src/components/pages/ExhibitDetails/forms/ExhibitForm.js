import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

class ExhibitForm extends React.Component {
  state = {
    exhibit_id: null,
    title: '',
    description: '',
    alert: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  redirectToExhibit = res => {
    if (!res.errors) {
      this.props.history.push(`/exhibit/${res.id}`, {})
    } else {
      this.props.history.push(`/exhibit/${res.id}/edit`, {...res})
    }
  }

  updateFrontEnd = resp => {
    this.props.userNewExhibit(resp)
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.exhibit_id) {
      API.newExhibition({
        user_id: this.props.user.id,
        title: this.state.title, 
        description: this.state.description
      })    
      .then(resp => this.updateFrontEnd(resp))
    } else {
      API.editExhibition({
        user_id: this.props.user.id,
        title: this.state.title, 
        description: this.state.description
      }, this.props.match.params.id)
      .then(resp => this.redirectToExhibit(resp))
    }
  }

  deleteExhibit = () => {
    API.deleteExhibit(this.state.exhibit_id)
    .then(resp=> this.deleteOnFrontEnd(resp))
  }

  deleteOnFrontEnd = resp => {
    this.props.removeExhibit(resp)
    this.props.history.push(`/user/${response.id}`)
  }

  componentDidMount() {
    if (this.props.match.path.match(/(edit)/)) {
      API.getExhibition(this.props.match.params.id)
      .then(res=> this.setState({
          exhihbit_id: this.props.match.params.id,
          user_id: res.user_id,
          title: res.title,
          description: res.description
        })
      )
    }
  }

  render() {
    return(
      <Container
        className="exform-container">
        <Row
          className="exform-row">
          <Col
            className="exform-col">
              <h1 className="exform-header">{this.props.match.path.match(/(edit)/) ? `Editing ${this.state.title}` : "Create your own exhibit!"}</h1>
              <button className="cancel-edit" onClick={()=> this.props.history.goBack()}>Cancel</button>
             <Form
              onSubmit={this.handleSubmit}>
               <Form.Group 
                controlId="formTitle"
                className="exform-group">
                 <Form.Label
                  className="exform-label">
                    Title
                 </Form.Label>
                 <Form.Control 
                  type="text" 
                  name="title"
                  value={this.state.title}
                  placeholder="Title" 
                  onChange={this.handleChange}/>
               </Form.Group>
               <Form.Group 
                controlId="formDesc"
                className="exform-group">
                 <Form.Label
                  className="exform-label">
                    Description
                 </Form.Label>
                 <Form.Control 
                  type="text" 
                  name="description"
                  value={this.state.description}
                  placeholder="Description of the Exhibit" 
                  onChange={this.handleChange}/>
               </Form.Group>
               <Button variant="outline-dark" type="submit">
                  Curate
              </Button>
             </Form> 
          </Col>
          {this.props.match.path.match(/(edit)/) ? <button className="outline-danger" onClick={() => this.deleteExhibit()}>Delete Exhibit</button> : null }
          </Row>
      </Container>
    )
  }
}

export default ExhibitForm