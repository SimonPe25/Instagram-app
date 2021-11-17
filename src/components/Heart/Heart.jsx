import React from "react";
import HeartPage from "../HeartPage/HeartPage";
import "./heart.scss";

const Heart = (props) => {
  const {cards, toggleAdded} = props

  return (
    <>
    <div className="shadow">
    <div className="heart">
      <h1 className="heart-text">Страницы которые вам понравились</h1>
      {cards
        .filter((el) => el.isInfavorite)
        .map((el) => 
      <HeartPage 
        name = {el.name}
        url={el.url}
        toggleAdded={toggleAdded}
         _id={el._id}
      />
        )}
     
    </div>
    </div>
    </>
  );
};

export default Heart;
