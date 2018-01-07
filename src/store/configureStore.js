import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import clubsApp from '../reducers'
import { fetchUsers } from '../actions'

const config = {
	key: 'root',
	storage,
}

const reducer = persistReducer(config, clubsApp)
const loggerMiddleware = createLogger()

let store = createStore(
	reducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
)
let persistor = persistStore(store)
store.dispatch(fetchUsers())

export { store, persistor };
// export default store;
