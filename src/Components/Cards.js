import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import GradeIcon from 'material-ui-icons/Grade'

import SimpleCard from './Card'

function Cards(props) {
	const users = props.users
	const elements = []
	for (var i=0; i<users.length; i++) {
		const user = users[i]
		elements.push(<SimpleCard key={i} user={user}/>)
	}
	return (elements);
}

export default Cards;
