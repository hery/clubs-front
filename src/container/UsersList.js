
import { connect } from 'react-redux'
import Cards from '../components/Cards'

const CITY_NEW_YORK_CITY = "New York City"
const CITY_PARIS = "Paris"
const CITY_REMIREMONT = "Remiremont"
const CITY_LONDON = "London"
const CITY_SEATTLE = "Seattle"

export const FILTER_CITY_NEW_YORK_CITY = CITY_NEW_YORK_CITY
export const FILTER_CITY_PARIS = CITY_PARIS
export const FILTER_CITY_REMIREMONT = CITY_REMIREMONT
export const FILTER_CITY_LONDON = CITY_LONDON
export const FILTER_CITY_SEATTLE = CITY_SEATTLE
export const FILTER_FEATURED = "Featured"


const getUsersFromCityFilter = (users, filter) => {
    switch (filter) {
        case FILTER_CITY_NEW_YORK_CITY:
            return users.filter(user => user.city === CITY_NEW_YORK_CITY)
        case FILTER_CITY_PARIS:
            return users.filter(user => user.city === CITY_PARIS)
        case FILTER_CITY_REMIREMONT:
            return users.filter(user => user.city === CITY_REMIREMONT)
        case FILTER_CITY_LONDON:
            return users.filter(user => user.city === CITY_LONDON)
        case FILTER_CITY_SEATTLE:
            return users.filter(user => user.city === CITY_SEATTLE)
        case FILTER_FEATURED:
            return users.filter(user => user.featured === true)
        default:
            return users.filter(user => user.featured === true)
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
