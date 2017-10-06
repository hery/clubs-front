import React, { Component } from 'react';
import ResponsiveDrawer from './Components/Drawer';

import './App.css';

import axios from 'axios';


class App extends Component {
  render() {
    return (
        <div>
            <ResponsiveDrawer />
        </div>
    );
  }
}

export default App;

var instance = axios.create({
    baseURL: 'http://localhost:8000'

});

// Customize instance here if needed

instance.get('/users/1/?format=json')
    .then(function (response) {
        console.log(response)
    });
