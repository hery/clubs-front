import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Send from 'material-ui-icons/Send';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

import { login } from '../actions'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
  	height:50,
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});


class SignInForm extends React.Component {

    constructor(props) {
	    super(props)
	    this.logIn = this.logIn.bind(this);
    }

	logIn() {
		const { dispatch, username, password } = this.props
		dispatch(login(username, password))
	}

    render () {
    	const { classes } = this.props;

        return(
			<form className={classes.container} noValidate autoComplete="off">

				<TextField
					id="username"
					label="Username"
					className={classes.textField}
					placeholder="Username"
					onChange={this.props.handleUsernameChange}
					margin="normal"
				/>

				<TextField
					id="password"
					label="Password"
					className={classes.textField}
					placeholder="Password"
					onChange={this.props.handlePasswordChange}
					margin="normal"
				/>

		        <Button
		        	className={classes.button}
		        	raised color="primary"
		        	onClick={this.logIn}>
					Send
					<Send className={classes.rightIcon} />
		        </Button>
		   </form>
	   );
    }
}

SignInForm.propTypes = {
	classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
}

export default withStyles(styles)(SignInForm);
