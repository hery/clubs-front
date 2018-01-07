import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } 	from 'react-router-dom'
import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from '../store/configureStore'
import Drawer from '../container/Drawer';
import '../App.css';


class App extends Component {	

	render() {
		return (
			<Provider store={store}>
				<PersistGate 
					persistor={persistor}
					loading={<div>Loading</div>}>
					<Router>
						<Route path='/' component={Drawer}/>
					</Router>
				</PersistGate>
			</Provider>
		);
	}
}


export default App;
