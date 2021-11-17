import React from "react";
import "./directUser.scss";
import { Link } from "react-router-dom";

const DirectUser = (props) => {
  const { name, url} = props;
  const urlUser = ["." + url];
  const uriy = urlUser.toString()
  
  return (
    <div className="userList-container">
      <Link to={name} id="testLinkDirectUser">
        <div className="icon-comtainer">
          <img src={uriy} alt={name} className="icon-direct" />
          <h2 id="testH2DirectUser">{name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default DirectUser;
