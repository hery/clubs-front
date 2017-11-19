
import fetch from 'isomorphic-fetch'

export const SET_USERNAME = 'SET_USERNAME'
export const SET_PASSWORD = 'SET_PASSWORD'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
// export const ERROR_LOGIN = 'ERROR_LOGIN'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const FETCH_USERS = 'FETCH_USERS'

export const SET_FILTER = 'SET_FILTER'



// Auth

export function requestLogin() {
	return {
		type: REQUEST_LOGIN,
	}
}

export function receiveLogin(json) {
	return {
		type: RECEIVE_LOGIN,
		token: json,
		receivedAt: Date.now()
	}
}

// export function errorLogin() {
// 	return {
// 		type: ERROR_LOGIN,
// 	}
// }

export function login(username, password) {
	return function (dispatch) {
		dispatch(requestLogin())
		return fetch('http://localhost:8000/api/auth/token')
		.then(
			response => response.json(),
			error => console.log("An error occured. ", error)
		)
		.then(
			json => dispatch(receiveLogin(json))
		)
	}
}

export function setUsername(username) {
	console.log("Dispatching action setUsername")
	return {
		type: SET_USERNAME,
		username,
	}
}

export function setPassword(password) {
	return {
		type: SET_PASSWORD,
		password,
	}
}


// Users - should be teachers

export function requestUsers() {
	return {
		type: REQUEST_USERS,
	}
}

export function receiveUsers(json) {
	return {
		type: RECEIVE_USERS,
		users: json,
		receivedAt: Date.now()
	}
}

export function fetchUsers() {
	return function (dispatch) {
		dispatch(requestUsers())
		return fetch('http://localhost:8000/api/teachers/?format=json')
			.then(
				response => response.json(),
				error => console.log("An error occured. ", error)
			)
			.then(
				json => dispatch(receiveUsers(json))
			)

	}
}


// Filters

export function setFilter(filter) {
	return {
		type: SET_FILTER,
		filter
	}
}
