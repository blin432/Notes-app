import React, { Component } from 'react';
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';


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
    <Container className="text-center project">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
            <h3 className='m-5'>The note at this URL is {note} !</h3>
        </Col>
      </Row>
    </Container>
  );
}
}

export default  withRouter(Inputfield);
