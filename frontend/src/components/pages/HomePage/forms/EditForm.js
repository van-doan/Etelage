import React from 'react'
import API from '../../../../config/API'

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
        API.getUser(this.props.match.params.id)
        .then(res=> this.setState({
            username: res.username, 
        })
    )}

    handleSubmit = event => {
        event.preventDefault();
        API.updateUser(
            {user: this.state}, this.props.user.id)
        .then(resp=> this.redirecToUpdatedUser(resp))
    }

    redirectToUpdatedUser = response => {
        this.props.userEditAccountParams(response)
        this.props.history.push(`/users/${response.id}`)
    }

    render(){
        return(
          <Container
        className="proform-container">
        <Row
          className="proform-row">
          <Col
            className="proform-col">
              <h1 className="proform-header">Edit your profile</h1> <button className="outline-dark" onClick={()=>this.props.history.goBack()}>Cancel</button>
              <button className="cancel-edit" onClick={()=> this.props.history.goBack()}>Cancel</button>
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
                  name="title"
                  value={this.state.username}
                  placeholder="Username" 
                  onChange={this.handleChange}/>
               </Form.Group>
               <Button variant="outline-dark" type="submit">
                  Update
              </Button>
             </Form> 
          </Col>
          </Row>
      </Container>
        )
    }
}

export default UserEditForm