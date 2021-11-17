import React from 'react'
import UserCard from '../UserCard/UserCard';


const UserList = (props) => {

    const {toggleAdded, toggleFavorite, cards} = props
    
    
    return (
         <div>  
        <ul className="albums__title-container">
        {cards.map( userCards =>
            <UserCard
                cards={cards}   
                name={userCards.name}
                age={userCards.age}
                country={userCards.country}
                city={userCards.city}
                LifeСredo={userCards.LifeСredo}
                added={userCards.added}
                toggleAdded={toggleAdded}
                toggleFavorite={toggleFavorite}
                className="album__content"
                key={userCards._id}
                _id={userCards._id}
                isInfavorite={userCards.isInfavorite}
                url={userCards.url}
               
            >
            </UserCard>)}
    </ul>
    </div>        
    )
}

export default UserList;
