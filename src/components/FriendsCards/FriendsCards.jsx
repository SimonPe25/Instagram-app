import React from 'react';
import FriendCard from '../FriendCard/FriendCard';
import "./style.scss"



const FriendsCards = (props) => {

    const { cards, toggleFavorite, toggleAdded } = props

    return (
        <div className="right-block">
            <ul className="friendContainer">
            <p className="recomended">Вы подписаны</p>
                
                    {cards
                        .filter(el => el.added)
                        .map(el => <FriendCard
                            toggleAdded={toggleAdded}
                            toggleFavorite={toggleFavorite}
                            added={el.added}
                            key={el._id}
                            name={el.name}
                            url={el.url}
                            _id={el._id}
                            isInfavorite={el.isInfavorite}
                        />)
                    }
                    <div className="foot-container">
                    <p className="foot">Информация Помощь Пресса API Вакансии</p>
                    <p className="foot" >Конфиденциальность Условия Места</p>
                    <p className="foot">Популярные аккаунты Хэштеги Язык</p>
                    </div>
            </ul>
        </div>
    )
}

export default FriendsCards;
