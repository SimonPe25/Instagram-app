import React from 'react';
import Header from '../../components/Header/Header';
import PhotoGalery from '../../components/PhotoGalery/PhotoGalery';
import './explore.scss';

const Explore = (props) => {
    const { cards, toggleAdded } = props
    return (
        <div>
        <Header cards={cards} toggleAdded={toggleAdded} />
        <PhotoGalery/>
        </div>
    )
}

export default Explore
