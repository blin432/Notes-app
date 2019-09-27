import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,Container,Row,Col,Accordion,Card, InputGroup,FormControl} from 'react-bootstrap';
import Notes from './Notes.jsx';


class Inputfield extends Component {
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      notesArray:[],
      editValue:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
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


  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }

  // handleNoteInput(input){
  //   this.setState({inputValue:input})
  // }
  // handleNoteEdit(input){
  //   this.setState({inputValue:input})
  // }
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
    this.setState({
      notesArray:[...this.state.notesArray,this.state.inputValue]
    })
    let {inputValue,notesArray}= this.state
    console.log(notesArray.length);
    let idNumber = notesArray.length
    console.log(inputValue);
    console.log(notesArray)
    axios.post('/notes/add', {inputValue,idNumber})
      .then((data) =>{
        console.log(data)
      })
      .catch((error) => this.setState({errMsg:error}))
    e.preventDefault(); 
}
 
     
edit(e,i) {
  let {editValue,notesArray} = this.state
  console.log(i)
  
  let editArray =Object.assign([], this.state.notesArray, {[i]: editValue});
  console.log(editArray);
  this.setState({
    notesArray:editArray
  })
  console.log(notesArray.length);
  console.log(notesArray)
  axios.put(`/notes/edit/${i}`, {editValue})
    .then((data) =>{
      console.log(data)
    })
    .catch((error) => this.setState({errMsg:error}))
}



delete(valueToDelete,i){
  console.log(i)
  let changedArray = this.state.notesArray.filter((item,index)=>{
     return i !== index
  })
  console.log(changedArray);
  this.setState({
    notesArray:changedArray
  })
  axios.delete(`/notes/delete/${i}`)
  .then((data) =>{
    console.log(data)
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

