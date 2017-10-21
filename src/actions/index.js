
export const GET_USERS = 'GET_USERS'
export const SET_FILTER = 'SET_FILTER'


export function getUsers(users) {
	return {
		type: GET_USERS,
		users
	}
}

export function setFilter(filter) {
	return {
		type: SET_FILTER,
		filter
	}
}
