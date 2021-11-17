import React from "react";
import { Link } from "react-router-dom";
import './heartPage.scss'


const HeartPage = (props) => {
 const{name, url, toggleAdded, _id} = props

 const urlUser = ["." + `${url}`];

  return (
    <div className="container-HeartPage">
    <Link to={name}>
      <div className="icon-container-HeartPage">
        <img src={urlUser} alt={name} className="iconUserHeartPage" />
        <h2 className="heart-name">{name}</h2>
      </div>
    </Link>
    <div>
      <p className="textUserHeartPage" onClick={() => toggleAdded(_id)}>
        Подписаться
      </p>
    </div>
  </div>
  );
};

export default HeartPage;
