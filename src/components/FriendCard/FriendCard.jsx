import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const FriendCard = (props) => {
  const { name, toggleAdded, _id, url } = props;

  return (
    <div className="container">
      <Link to={name}>
        <div className="icon-comtainer">
          <img src={url} alt={name} className="icon" />
          <h2>{name}</h2>
        </div>
      </Link>
      <div>
        <p className="text" onClick={() => toggleAdded(_id)}>
          Отписаться
        </p>
      </div>
    </div>
  );
};

export default FriendCard;
