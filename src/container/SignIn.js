
import { connect } from 'react-redux'
import SignInForm from '../components/SignIn'
import { login, setUsername, setPassword } from '../actions'


const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
        dispatch(login(username, password))
    },
    handleUsernameChange: event => {
        dispatch(setUsername(event.target.value))
    },
    handlePasswordChange: event => {
        dispatch(setPassword(event.target.value))
    },
  }
}

const SignIn = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignInForm)

export default SignIn
