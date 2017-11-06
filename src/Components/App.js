import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Drawer from '../container/Drawer';
import store from '../store/configureStore'
import '../App.css';

import { Route, BrowserRouter as Router } 	from 'react-router-dom'


class App extends Component {	

	render() {
		return (
		    <Provider store={store}>
		    	<Router>
     	            <Route path='/' component={Drawer}/>
		        </Router>
		    </Provider>
		);
	}
}


export default App;
