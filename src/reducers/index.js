
import GET_USERS from '../actions'

// Fake Data Source 

const users = [
	{
		id: 0,
	    name: "Tara Stiles",
	    city: "New York City, NY",
	    rating: 5,
	    ratingsNumber: 432,
	    description: "well meaning and kindly."
    },
	{
		id: 1,
	    name: "Melinda Abbott",
	    city: "New York City, NY",
	    rating: 5,
	    ratingsNumber: 4123,
   },
]


const initialState = {
	users: users,
}

// Root Reducer! Wat?

function clubsApp(state = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			console.log("Got action of type GET_USERS")
			return Object.assign({}, state, {
				users: users,
			})
		default:
			return state
	}
}

export default clubsApp