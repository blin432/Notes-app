import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,Container,Row,Col,Accordion,Card, InputGroup,FormControl} from 'react-bootstrap';
import Notes from './Notes.jsx';
import {createStore } from 'redux';
import {mainReducer} from '../reducer.js'
import { Switch, Route,Redirect, withRouter} from 'react-router-dom';

let store = createStore(mainReducer);

class Inputfield extends Component {
  constructor(props){
    super(props)
    this.state={
      specificNote:'',
     
    }
  }

 
  componentDidMount(e,i){
    const { id } = this.props.match.params
    axios.get(`/notes/${id}`)
    .then( resp => {
      this.setState({
        specificNote:resp.data
      })
    })
    .catch(err => console.log(err))
  }


render(){
    let note= this.state.specificNote
  return (
    <Container className="text-center">
      <Row>
        <Col md={{ span: 7, offset: 3 }}>
            <h3>The note at this URL is {note} !</h3>
        </Col>
      </Row>
    </Container>
  );
}
}



export default  withRouter(Inputfield);
