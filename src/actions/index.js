
import fetch from 'isomorphic-fetch'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const FETCH_USERS = 'FETCH_USERS'
export const SET_FILTER = 'SET_FILTER'


export function requestUsers() {
	return {
		type: REQUEST_USERS,
		// filters
	}
}


export function receiveUsers(json) {
	return {
		type: RECEIVE_USERS,
		// users: json.data.children.map(child => child.data),
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


export function setFilter(filter) {
	return {
		type: SET_FILTER,
		filter
	}
}
