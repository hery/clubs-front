
import { connect } from 'react-redux'
import Cards from '../components/Cards'

export const FILTER_FEATURED = "featured"

const getUsersFromCityFilter = (users, cityFilter) => {
    return users.filter(user => user.city === cityFilter)
}

const getUsersFromTeacherFilter = (users, teacherFilter) => {
    return users.filter(user => user.user.first_name === teacherFilter ||
        user.user.last_name === teacherFilter ||
        user.user.first_name + ' ' + user.user.last_name === teacherFilter
    )
}

const getUsersFromFilter = (users, 
                            cityFilter,
                            teacherFilter) => {
    if (!cityFilter && !teacherFilter) {
        return users
    }
    // TODO: Check if this is slow
    let resultArray = getUsersFromCityFilter(users, cityFilter)
        .concat(getUsersFromTeacherFilter(users, teacherFilter))
    let resultSet = new Set(resultArray)
    return Array.from(resultSet)
}

const mapStateToProps = state => {
  return {
    users: getUsersFromFilter(
        state.users,
        state.cityFilter,
        state.teacherFilter)
  }
}

const UsersList = connect(
    mapStateToProps,
)(Cards)

export default UsersList
