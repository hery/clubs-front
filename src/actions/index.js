// import axios from 'axios';

// Action Creators

// export function fetchUsers(users) {
// 	return dispatch => {
// 		return axios.get('/users/1/?format=json')
// 		    .then(function (response) {
// 	    });
// 	}
// }

// Action

export const GET_USERS = 'GET_USERS'

// Don't need that yet
export function getUsers(users) {
	return {
		type: GET_USERS,
		users
	}
}

export default GET_USERS;

