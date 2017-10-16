
import { connect } from 'react-redux'
import { getUsers } from '../actions'
import Cards from '../components/Cards'


const mapStateToProps = state => {
  return {
    users: state.users
  }
}

// const mapDispatchToProps = dispatch => {
// 	return {
//         // ?  		
// 	}
// }

const UsersList = connect(
	mapStateToProps
)(Cards)

export default UsersList