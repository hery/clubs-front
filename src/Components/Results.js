import React from 'react';

import Chips from './Chip';
import UsersList from '../container/UsersList'


class Results extends React.Component {

    componentDidMount() {
        console.log(this.props)
    }
    render () {
        return (
        	<div>
	            <Chips />
	            <UsersList />
            </div>
    	);
    }
}

export default Results;
