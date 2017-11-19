	
import {
	SET_USERNAME,
	SET_PASSWORD,

	REQUEST_LOGIN,
	RECEIVE_LOGIN,

	REQUEST_USERS,
	RECEIVE_USERS,
	FETCH_USERS,

	SET_FILTER, } from '../actions'
import { FILTER_FEATURED } from '../container/UsersList'


const initialState = {
	users: [],
	cityFilter: FILTER_FEATURED,
}


// Root Reducer
// state + action => state

function clubsApp(state = initialState, action) {
	switch (action.type) {
		case SET_USERNAME:
			return Object.assign({}, state, {
				username: action.username,
			})
		case SET_PASSWORD:
			return Object.assign({}, state, {
				password: action.password,
			})	
		case REQUEST_LOGIN:
			return state
		case RECEIVE_LOGIN:
			return Object.assign({}, state, {
				users: state.users,
				cityFilter: state.cityFilter,
				token: action.token
			})
		case REQUEST_USERS:
			return state
		case RECEIVE_USERS:
			return Object.assign({}, state, {
				users: action.users,
			})
		case FETCH_USERS:
			return state
		case SET_FILTER:
			return Object.assign({}, state, {
				users: state.users,
				cityFilter: action.filter
			})
		default:
			return state
	}
}

export default clubsApp
