import React, { Component } from 'react';
import './App.css';
import Inputfield from './components/Inputfield.jsx';
import SpecificNotes from './components/SpecificNote.jsx';
import { Switch, Route, withRouter} from 'react-router-dom';



class App extends Component {
  render(){
      return(
        <div className="App">
        <Switch>
          <Route  path="/" exact component={Inputfield}/>
          <Route  path="/notes/:id" component={SpecificNotes}/>  {/* URL path to get specific note, Try  "http://localhost:3000/notes/1"!  */}
        </Switch>
      </div>
      );
    }
}
  


export default withRouter(App);
