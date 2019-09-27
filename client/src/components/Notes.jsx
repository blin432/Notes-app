import React, { Component } from 'react';

import { Button,Form,Container,Row,Col,Accordion,Card, InputGroup,FormControl} from 'react-bootstrap';

class Notes extends Component {
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      notesArray:[]
    }

  }

render(){
  return (
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
  );
}
}



export default Notes;

