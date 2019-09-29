import React, { Component } from 'react';
import { Button,Accordion,Card, InputGroup,FormControl} from 'react-bootstrap';
import {createStore } from 'redux';
import {mainReducer} from '../reducer.js'

let store = createStore(mainReducer);

class Notes extends Component {
  constructor(props){
    super(props)
    this.state={
      ...store.getState(),
      notesArray:this.props.notes,
      editValue: this.props.editValue
    }
  }

render(){
  let {item,i}= this.props
  return (
    <Accordion className="m-2" defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          {item}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i}>
          <Card.Body className='mb-2 pb-2'>
            <InputGroup>
              <FormControl
                 placeholder="Edit Value"
                 aria-label="Edit Value"
                 aria-describedby="basic-addon2"
                 value={this.state.editValue}  onChange={this.props.handleEditChange}
              />
              <InputGroup.Append>
                  <Button variant="outline-secondary" onClick={() => {this.props.edit(item,i)}}>EDIT</Button>
                  <Button variant="outline-secondary" onClick={() =>{this.props.delete(item,i)}}>DELETE</Button>
              </InputGroup.Append>
            </InputGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
  </Accordion>
  );
}
}



export default Notes;

