import React, { Component } from 'react';
import ResponsiveDrawer from './components/Drawer';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './store/configureStore'

import './App.css';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <ResponsiveDrawer />
        </Provider>
    );
  }
}


export default App;
