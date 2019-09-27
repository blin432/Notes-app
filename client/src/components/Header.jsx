import React, {Component} from 'react';
import {Container,Navbar} from 'react-bootstrap';

class Header extends Component{

    render(){ 

      return(
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Navbar>
      </Container>
    )
  }
}

export default Header;