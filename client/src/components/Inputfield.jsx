import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,Container,Row,Col} from 'react-bootstrap';
import Notes from './Notes.jsx';
import Header from './Header.jsx';
import {createStore } from 'redux';
import {mainReducer} from '../reducer.js';
import {withRouter} from 'react-router-dom';
import '../App.css';


let store = createStore(mainReducer);

class Inputfield extends Component {
  constructor(props){
    super(props)
    this.state={
      ...store.getState(),
      inputValue:'',
      editValue:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.edit = this.edit.bind(this);
    this.delete=this.delete.bind(this);
  }

  //lifecycle to retrieve all persisted Data
  componentDidMount(e){
    axios.get('/notes')
    .then( resp => {
      this.setState({
        notesArray:[...resp.data],
      })
    })
    .catch(err => console.log(err))
  }
//Handler event for main input field 
  handleChange(event){
    this.setState({
      inputValue:event.target.value
    });
  }
//Handler event for edit input field
  handleEditChange(event){
    this.setState({
      editValue:event.target.value
    });
  }
  //Submit form to add notes to database
  handleSubmit(e) {
    e.preventDefault(); 
    let input = this.state.inputValue
    let data = this.state.notesArray
    if(input< 1){
      return //must enter field to submit form
    }else{
      store.dispatch({type:"ADD",input, data})
      this.setState({...store.getState()}) 
    let {inputValue,notesArray}= this.state
    let idNumber = notesArray.length
      axios.post('/notes/add', {inputValue,idNumber})
        .then((data) =>{
        })
        .catch((error) => this.setState({errMsg:error}))
      this.setState({inputValue:''}) //used to clear input field after submit
    }
}

//click event to edit note
edit(e,i) {
  let {editValue,notesArray} = this.state
  if (editValue<1){
    return //must enter field to submit form
  }else{
    store.dispatch({type:"EDIT",editValue,i,notesArray})
    this.setState({...store.getState()}) 
    axios.put(`/notes/edit/${i}`, {editValue})
      .then((data) =>{
      })
      .catch((error) => this.setState({errMsg:error}))
      this.setState({editValue:''})
  }
}

//click event to delete note
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
    <div className ="project">
      <Header/>
      <Container className="text-center">
        <Row>
          <Col md={{span: 8, offset: 2}} lg={{span: 8, offset: 2}}>
            <h2 className="mt-5">NOTES!</h2>
            <h4 className="">Click On The Note Tiles To Edit!</h4>
            <Form  className="d-flex flex-row justify-content-center align-items-center" onSubmit={this.handleSubmit}>
              <Form.Group className="m-0 pl-2"  as={Col}>
                    <Form.Control type="text" value={this.state.inputValue}  onChange={this.handleChange}/>
              </Form.Group>
              <Button  style={{display:"block"}} className = "m-0 mr-2" variant="primary" type="submit"> ADD</Button>
            </Form>
            <div>
              <ul className="pl-0">
                  {
                    this.state.notesArray.map((item,i)=>{
                      return(
                        <Notes key={i} //passing down props to Notes component  
                        delete ={this.delete}
                        edit={this.edit}
                        editValue={this.editValue}
                        handleEditChange={this.handleEditChange}
                        item={item} 
                        i ={i}/>
                      )
                    })
                  }
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
}

export default  withRouter(Inputfield);

