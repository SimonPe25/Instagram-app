import React from "react";
import Icon from "../Icon/Icon";
import "./style.scss";
import { Link } from "react-router-dom";
import ComentBox from "../ComentBox/ComentBox";
import Form from "../Forma/Form";

const UserCard = (props) => {

  const { name, url, isInfavorite, _id, toggleFavorite, LifeСredo } =
    props;
    const link = `${name}`

  return (
    <li className="container-card">
      <Link to={link}>
        <div className="title-cards">
          <img className="title-cards__photo-small" src={url} alt={name} />
          <div className="title-cards__title-container">
            <h2 className="title-cards__name">{name}</h2>
            <p className="title-cards__life-credo">{LifeСredo}</p>
          </div>
        </div>
      </Link>
      <div className="container-img">
        <img
          className="album__image"
          src={url}
          alt={name}
          onDoubleClick={() => toggleFavorite(_id)}
        />
      </div>
      <div className="icons-box">
        <div className="icons-container">
          <Icon
            color={isInfavorite ? "red" : "white"}
            type="heart"
            className="star-class"
            onClick={() => toggleFavorite(_id)}
          />
          <Icon color="#333333" type="coment" className="coment-class" />
          <Icon color="#333333" type="arrow" className="arrow-class" />
        </div>
        <div>
          <Icon color="#333333" type="save" className="save-class" />
        </div>
      </div>
      <ComentBox _id={_id}/>
      <Form 
      formButton="form-button"
      inputEnter="input-enterCards" 
      _id={_id} 
      nameArray="urlcoment" />
    </li>
  );
};

export default UserCard;
