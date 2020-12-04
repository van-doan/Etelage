import React from 'react'
import API from '../../../../config/API'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UserEditForm extends React.Component {
    state ={
        username: "",
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        API.getUserById(this.props.match.params.id)
        .then(res=> {
            console.log(res)
            this.setState({
                username: res.username, 
            })
        }
    )}

    handleSubmit = event => {
        event.preventDefault();
        API.updateUser(
            {user: this.state}, this.props.match.params.id)
        .then(resp=> this.redirectToUpdatedUser(resp))
    }

    redirectToUpdatedUser = response => {
        console.log(response)
        this.props.history.push(`/home`)
    }

    render(){
        return(
          <Container
        className="proform-container">
        <Row
          className="proform-row">
          <Col
            className="proform-col">
              <h1 className="proform-header">EDIT YOUR PROFILE</h1> 
             <Form
              onSubmit={this.handleSubmit}>
               <Form.Group 
                controlId="formTitle"
                className="proform-group">
                 <Form.Label
                  className="proform-label">
                    Username
                 </Form.Label>
                 <Form.Control 
                  type="text" 
                  name="username"
                  value={this.state.username}
                  placeholder="Username" 
                  onChange={this.handleChange}/>
               </Form.Group>
               <Button variant="outline-dark" type="submit">
                  Update
              </Button>
              <Button variant="outline-danger" onClick={()=>this.props.history.goBack()}>Cancel</Button>
             </Form> 
          </Col>
          </Row>
      </Container>
        )
    }
}

export default UserEditForm