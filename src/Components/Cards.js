import React from 'react';
import SimpleCard from './Card'


class Cards extends React.Component {
    render () {
        const users = this.props.users
        const elements = []
        for (var i=0; i<users.length; i++) {
            const user = users[i]
            elements.push(<SimpleCard key={i} user={user}/>)
        }
        return (elements);

    }
}

export default Cards;
