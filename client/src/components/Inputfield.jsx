import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,Container,Row,Col } from 'react-bootstrap';
import Notes from './Notes.jsx';


class Inputfield extends Component {
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      notesArray:[]
    }
  }





 

  componentDidMount(e){
    axios.get('/notes')
    .then( resp => {
      console.log(resp);
      console.log(resp.data);
      console.log(resp.data[1]);
     
      this.setState({
        notesArray:[...this.state.notesArray,...resp.data]
      })
    
    })
    .catch(err => console.log(err))
  }

  // this.setState({scores: resp.data.filter( score => 
    // score.level === this.state.level)}))


  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleNoteInput(input){
    this.setState({inputValue:input})
  }

  add(e) {
    e.preventDefault()
    let inputValue  = this.state;
      axios.post('/notes/add', {inputValue})
      .then((data) =>{
        console.log(data)
      this.setState({
        notesArray:[...this.state.notesArray]
      })
      })
      .catch((error) => this.setState({errMsg:error}))
    
}
  

render(){
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h3 className="mt-5">NOTES</h3>
          <Form onSubmit={(e) => this.add(e)}>
            <Form.Group >
                  <Form.Label>NOTES</Form.Label>
                  <Form.Control type="text" value={this.state.inputValue}  onChange={(e) => this.handleNoteInput(e.target.value)}/>
            </Form.Group>
            <div className="d-flex flex-row" >
              <Button style={{display:"block"}} className = "m-2" variant="primary" type="submit"> ADD</Button>
              <Button style={{display:"block"}} className = "m-2" variant="primary" onClick={this.handleClick}> Edit</Button>
            </div>

          </Form>
          <div>
          <ul>
              {
                this.state.notesArray.map((item,i)=>{
                  return(
                    <li key={i}>{item} </li>
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

