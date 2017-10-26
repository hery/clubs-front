
import { GET_USERS, SET_FILTER } from '../actions'
import { FILTER_FEATURED } from '../container/UsersList'


const initialUsers = [
	{
		id: 0,
	    name: "Tara Stiles",
	    city: "New York City",
	    style: "Vinyasa",
	    rating: 5,
	    ratingsNumber: 432,
	    description: "well meaning and kindly",
	    featured: false,
    },
	{
		id: 1,
	    name: "Paola Costa",
	    city: "Paris",
	    style: "Vinyasa",
	    rating: 5,
	    ratingsNumber: 4123,
	    description: "all levels welcome",
	    featured: true,
   },
	{
		id: 2,
	    name: "Melinda Abbott",
	    city: "New York City",
	    style: "Vinyasa",
	    rating: 5,
	    ratingsNumber: 4123,
	    description: "athletic work out",
	    featured: true,
   },
]

const initialState = {
	users: initialUsers,
	cityFilter: FILTER_FEATURED,
}


// Root Reducer
// state + action => state


function clubsApp(state = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			console.log("Got action of type GET_USERS")
			return Object.assign({}, state, {
				users: action.users,
				cityFilter: state.cityFilter
			})
		case SET_FILTER:
			console.log("Got action of type SET_FILTER")
			return Object.assign({}, state, {
				users: state.users,
				cityFilter: action.filter
			})
		default:
			return state
	}
}

export default clubsApp
