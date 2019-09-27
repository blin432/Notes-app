import React, { Component } from 'react';

import { Button,Form,Container,Row,Col } from 'react-bootstrap';

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
    <Container className="text-center">
        <div>
          <ul>
              {
                this.state.notesArray.map((item,i)=>{
                  return(
                    <li key={i}>
                      {item} 
                    </li>
                  )
                })
              }
          </ul>
        </div>
    </Container>
  );
}
}



export default Notes;

