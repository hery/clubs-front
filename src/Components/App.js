import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Drawer from '../container/Drawer';
import store from '../store/configureStore'

import '../App.css';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Drawer />
        </Provider>
    );
  }
}


export default App;
