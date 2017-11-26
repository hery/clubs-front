
import { connect } from 'react-redux'
import SignInForm from '../components/SignIn'
import { 
    setUsername,
    setPassword } from '../actions'


const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password,
    loggedIn: state.token != null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleUsernameChange: event => {
        dispatch(setUsername(event.target.value))
    },
    handlePasswordChange: event => {
        dispatch(setPassword(event.target.value))
    },
    dispatch: dispatch,
  }
}

const SignIn = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignInForm)

export default SignIn
