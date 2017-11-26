import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Send from 'material-ui-icons/Send';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

import { login } from '../actions'

const styles = theme => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
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


class NewTeacherForm extends React.Component {

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
    	const loggedIn = this.props.loggedIn;

    	if (loggedIn) {
    		return (
		        <Button
		        	className={classes.button}
		        	raised color="primary">
					Sign out
					<Send className={classes.rightIcon} />
		        </Button>
			)
    	} else {
	        return (
				<form className={classes.container} noValidate autoComplete="off">
					<TextField
						id="name"
						value="Melinda Abbott"
						label="name"
						className={classes.textField}
						margin="normal"
					/><br />
					<TextField
						id="city"
						label="City"
						className={classes.textField}
						placeholder="City"
						margin="normal"
					/><br />
					<TextField
						id="style"
						label="Style"
						className={classes.textField}
						placeholder="Style"
						onChange={this.props.handlePasswordChange}
						margin="normal"
					/><br />
					<TextField
						id="description"
						label="description"
						className={classes.textField}
						placeholder="description"
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
}

NewTeacherForm.propTypes = {
	classes: PropTypes.object.isRequired,
    // dispatch: PropTypes.func.isRequired,
}

export default withStyles(styles)(NewTeacherForm);
