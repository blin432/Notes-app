import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';



import {createStore } from 'redux';
import {mainReducer} from './reducer.js'
import {Provider} from 'react-redux';

let store = createStore(mainReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


