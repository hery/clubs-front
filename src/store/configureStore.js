import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import clubsApp from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { fetchUsers } from '../actions'


const loggerMiddleware = createLogger()

const store = createStore(
	clubsApp,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
)

store.dispatch(fetchUsers())

export default store;