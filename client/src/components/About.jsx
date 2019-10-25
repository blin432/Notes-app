import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

class About extends Component{

    render(){ 
      return(
        <Navbar expand="lg" variant="light" bg="light"  >
          <p >Notes-app</p>
          <p className="navbar-titles"> Home</p>
          <p className="navbar-titles">About</p>
          <p className="navbar-titles">Contact</p>
        </Navbar>
      
    )
  }
}

export default About;