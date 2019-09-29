import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,Container,Row,Col,Accordion,Card, InputGroup,FormControl} from 'react-bootstrap';
import Notes from './Notes.jsx';
import {createStore } from 'redux';
import {mainReducer} from '../reducer.js'

let store = createStore(mainReducer);

class Inputfield extends Component {
  constructor(props){
    super(props)
    this.state={
      ...store.getState(),
      inputValue:'',
      editValue:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }


  componentDidMount(e){
    axios.get('/notes')
    .then( resp => {
      this.setState({
        notesArray:[...resp.data],
      })
    })
    .catch(err => console.log(err))
  }

  handleChange(event){
    this.setState({
      inputValue:event.target.value
    });
  }

  handleEditChange(event){
    this.setState({
      editValue:event.target.value
    });
  }
  handleSubmit(e) {
    let input = this.state.inputValue
    let data = this.state.notesArray
      store.dispatch({type:"ADD",input, data})
      this.setState({...store.getState()}) 
    let {inputValue,notesArray}= this.state
    let idNumber = notesArray.length

      axios.post('/notes/add', {inputValue,idNumber})
        .then((data) =>{
        })
        .catch((error) => this.setState({errMsg:error}))
    e.preventDefault(); 
}
 
     
edit(e,i) {
  let {editValue,notesArray} = this.state
    store.dispatch({type:"EDIT",editValue,i,notesArray})
    this.setState({...store.getState()}) 
    
    axios.put(`/notes/edit/${i}`, {editValue})
      .then((data) =>{
      })
      .catch((error) => this.setState({errMsg:error}))
}



delete(valuetoDelete,iDeleted){
  let deleteArray = this.state.notesArray;
    store.dispatch({type:"DELETE",iDeleted,deleteArray})
    this.setState({...store.getState()}) 
  
  axios.delete(`/notes/delete/${iDeleted}`)
    .then((data) =>{
    })
    .catch((error) => this.setState({errMsg:error}))
}
  

render(){
  return (
    <Container className="text-center">
      <Row>
        <Col md={{ span: 7, offset: 3 }}>
          <h3 className="mt-5">NOTES</h3>
          <Form  className="d-flex flex-row justify-content-center align-items-center" onSubmit={this.handleSubmit}>
            <Form.Group className="m-0"  as={Col}>
                  <Form.Control type="text" value={this.state.inputValue}  onChange={this.handleChange}/>
            </Form.Group>
              <Button  style={{display:"block"}} className = "m-0" variant="primary" type="submit"> ADD</Button>
          </Form>
          <div>
          <ul>
              {
                this.state.notesArray.map((item,i)=>{
                  return(

                    <Accordion className="m-2" defaultActiveKey="0">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey={i}>
                        {item}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={i}>
                        <Card.Body>
                        <InputGroup>
                          <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.editValue}  onChange={this.handleEditChange}
                          />
                          <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={() => {this.edit(item,i)}}>EDIT</Button>
                            <Button variant="outline-secondary" onClick={() =>{this.delete(item,i)}}>DELETE</Button>
                          </InputGroup.Append>
                        </InputGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  )
                })
              }
          </ul>
        </div>
        </Col>
      </Row>
    </Container>
  );
}
}



export default Inputfield;

