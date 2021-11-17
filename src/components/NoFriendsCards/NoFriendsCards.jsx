import React from "react";
import NoFriendCard from "../NoFriendCard/NoFriendCard";
import "./style.scss";
import urlUser from "../../usersImages/katerinakhaidukova/01_katerinakhaidukova.jpg";

const NoFriendsCards = (props) => {
  const { cards, toggleFavorite, toggleAdded } = props;

  return (
    <ul className="NoFriendContainer">
      <div className="user-block">
        <div className="title">
          <img
            className="title-card__photo"
            src={urlUser.toString()}
            alt="yulia_akimenkooo"
          />
          <div className="title-card__title-container">
            <h2 className="title-card__name">"katerinakhaidukova"</h2>
            <p className="title-card__life-credo">
            Нельзя брать прошлое с собой...
            </p>
          </div>
        </div>
      </div>
      <p className="recomended">Рекомендации для вас</p>
      {cards
        .filter((el) => !el.added)
        .map((el) => (
          <NoFriendCard
            toggleAdded={toggleAdded}
            toggleFavorite={toggleFavorite}
            added={el.added}
            key={el._id}
            name={el.name}
            url={el.url}
            _id={el._id}
            isInfavorite={el.isInfavorite}
          />
        ))}
    </ul>
  );
};

export default NoFriendsCards;
