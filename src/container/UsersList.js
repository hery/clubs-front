
import { connect } from 'react-redux'
import Cards from '../components/Cards'

const CITY_NEW_YORK_CITY = "New York City"
const CITY_PARIS = "Paris"

export const FILTER_CITY_NEW_YORK_CITY = CITY_NEW_YORK_CITY
export const FILTER_CITY_PARIS = CITY_PARIS


const getUsersFromCityFilter = (users, filter) => {
	switch (filter) {
		case FILTER_CITY_NEW_YORK_CITY:
			return users.filter(user => user.city === CITY_NEW_YORK_CITY)
		case FILTER_CITY_PARIS:
			return users.filter(user => user.city === CITY_PARIS)
		default:
			return users
	}
}

const mapStateToProps = state => {
  return {
    users: getUsersFromCityFilter(state.users, state.cityFilter)
  }
}


const UsersList = connect(
	mapStateToProps,
)(Cards)


export default UsersList
