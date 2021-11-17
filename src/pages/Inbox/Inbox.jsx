import React from 'react';
import Direct from '../../components/Direct/Direct';
import Header from '../../components/Header/Header';
import './inbox.scss';

const Inbox = (props) => {
    const {cards, toggleAdded} = props
    return (
        <div className="box-direct">
        <Header cards={cards} toggleAdded={toggleAdded} />
        <Direct cards={cards} />
        </div>
    )
}

export default Inbox
