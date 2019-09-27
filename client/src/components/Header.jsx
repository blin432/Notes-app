import React, {Component} from 'react';
import {Container,Navbar} from 'react-bootstrap';

class Header extends Component{

    render(){ 

      return(
        <Navbar expand="lg" variant="light" bg="light"  >
          <p >BoomTown Assesment</p>
        </Navbar>
      
    )
  }
}

export default Header;