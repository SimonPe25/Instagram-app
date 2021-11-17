import React from "react";
import "./directList.scss";
import DirectUser from "../DirectUser/DirectUser";

const DirectList = (props) => {
  const { cards } = props;

  return (
    <div>
      <div className="directList">
        {cards.map((el) => 
          <DirectUser key={el._id} name={el.name}
           url={el.url} _id={el._id} />
        )}
      </div>
    </div>
  );
};

export default DirectList;
