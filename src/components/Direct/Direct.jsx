import React from "react";
import "./direct.scss";
import Icon from "../Icon/Icon";
import DirectList from "../DirectList/DirectList";
import noMessage from "../../usersImages/other/directNoImages.jpg";
import Button from '../Button/ButtonUser';


const Direct = (props) => {
  const { cards } = props;
  return (
    <div className="background">
      <div className="direct-container">
        <div className="direct-container__left">
          <div className="header-boxes">
            <div className="header-boxes__box-1">
              <h3>katerinakhaidukova</h3>
            </div>
            <div className="header-boxes__box-2">
              <Icon type="arrowLow" />
            </div>
            <div className="header-boxes__box-3">
              <Icon type="newMessage" />
            </div>
          </div>
          <div>
            <DirectList id='directList' cards={cards} />
          </div>
        </div>
        <div className="direct-container__right">
          <img src={noMessage} className="images-noMessage" alt="directImg"/>
          <h3>Ваши сообщения</h3>
          <p className="textDirect">Отправляйте личные фото и сообщения другу или группе.</p>
          <Button className="btn btn-primary" text="Отправить сообщение"/>
        </div>
      </div>
    </div>
  );
};

export default Direct;
