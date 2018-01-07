	
import {
	SET_USERNAME,
	SET_PASSWORD,

	REQUEST_LOGIN,
	RECEIVE_LOGIN,

	REQUEST_USERS,
	RECEIVE_USERS,
	FETCH_USERS,

	SET_CITY_FILTER,
	SET_TEACHER_FILTER,
	SET_STYLE_FILTER,
 } from '../actions'

import { FILTER_FEATURED } from '../container/UsersList'

import { REHYDRATE } from 'redux-persist'


// TODO: Does initialState need to cover every key?
// Assuming so for the REHYDRATE case
const initialState = {
	users: [],
	cityFilter: FILTER_FEATURED,
}

// Root Reducer
// state + action => state

function clubsApp(state = initialState, action) {
	switch (action.type) {
		// redux-persist
		// case REHYDRATE:
		// 	if (action.payload != null) {
		// 		return Object.assign({}, state, action.payload.clubsApp)				
		// 	}
		// 	return state
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
				token: action.token.token
			})
		case REQUEST_USERS:
			return state
		case RECEIVE_USERS:
			return Object.assign({}, state, {
				users: action.users,
			})
		case FETCH_USERS:
			return state
		case SET_CITY_FILTER:
			return Object.assign({}, state, {
				cityFilter: action.filter
			})	
		case SET_TEACHER_FILTER:
			return Object.assign({}, state, {
				teacherFilter: action.filter
			})		
		default:
			return state
	}
}

// export default clubsApp

export default clubsApp;
