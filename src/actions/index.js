
import fetch from 'isomorphic-fetch'

export const SET_USERNAME = 'SET_USERNAME'
export const SET_PASSWORD = 'SET_PASSWORD'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const FETCH_USERS = 'FETCH_USERS'

export const SET_CITY_FILTER = 'SET_CITY_FILTER'
export const SET_TEACHER_FILTER = 'SET_TEACHER_FILTER'
export const SET_STYLE_FILTER = 'SET_STYLE_FILTER'

export const FILTER_TYPE_CITY = 'CITY'
export const FILTER_TYPE_TEACHER = 'TEACHER'
export const FILTER_TYPE_STYLE = 'STYLE'

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

export function login(username, password) {
    console.log("`login` username %s password %s", username, password)
    var body = {           
        username: username,
        password: password
    };
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(body),
    }
    return function (dispatch) {
        dispatch(requestLogin())
        return fetch('http://localhost:8000/api/auth/token', options)
        .then(
            response => response.json(),
            error => console.log("An error occured requesting token... %s", error)
        )
        .then(
            json => dispatch(receiveLogin(json)),
            error => console.log("An error occured handling token... %s", error)
        )
        .then(
            json => dispatch(requestUser(username)),
            error => console.log("Error dispatching receiveLogin")
        )
    }
}

export function requestUser(username) {
    // TODO: Dispatch appropriate state update actions
    var url = "http://localhost:8000/api/user/" + username + "/?format=json"
    return function(dispatch) {
        return fetch(url)
        .then(
            response => response.json(),
            error => console.log("An error occured fetching user %s", username)
        )
        .then(
            json => console.log(json),
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

export function setCityFilter(filter) {
    return {
        type: SET_CITY_FILTER,
        filter_type: FILTER_TYPE_CITY,
        filter
    }
}

export function setTeacherFilter(filter) {
    return {
        type: SET_TEACHER_FILTER,
        filter_type: FILTER_TYPE_TEACHER,
        filter
    }
}

export function setStyleFilter(filter) {
    return {
        type: SET_STYLE_FILTER,
        filter_type: FILTER_TYPE_STYLE,
        filter
    }
}
