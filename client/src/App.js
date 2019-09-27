import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Inputfield from './components/Inputfield.jsx';
import {Container,Navbar} from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Header/>
      <Inputfield/>
    </div>
  );
}

export default App;
