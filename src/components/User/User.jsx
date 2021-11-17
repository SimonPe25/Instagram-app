import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getCards } from "../../store/selectors";
import Icon from "../Icon/Icon";
import Modal from "../Modal/Modal";
import "./User.scss";

const User = (props) => {
  const [coment, setComent] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [nameArray, setNameArray] = useState('');
  const cards = useSelector(getCards);


  const {
    name,
    _id,
    age,
    url,
    country,
    city,
    lifeСredo,
    added,
    toggleAdded,
    url2,
    url3,
    url4,
    url5,
    url6,
    url7,
    url8,
    url9,
    url10,
    urllike,
    url2like,
    url3like,
    url4like,
    url5like,
    url6like,
    url7like,
    url8like,
    url9like,
    url10like,
    urlcoment,
    url2coment,
    url3coment,
    url4coment,
    url5coment,
    url6coment,
    url7coment,
    url8coment,
    url9coment,
    url10coment,
    isOpenModal,
    toggleIsOpenModal
  } = props;


  const toggle = (url) => {
    cards.map((el) => {
      if (el.url === url) {
        const coment = el.urlcoment;
        const nameArray = "urlcoment"
        const urlImage = el.url;
      
        setComent(coment);
        setUrlImage(urlImage);
        setNameArray(nameArray)
      
      }
      return el;
    });
  };

  const toggle2 = (url2) => {
    cards.map((el) => {
      if (el.url2 === url2) {
        
        const coment = el.url2coment;
        const urlImage = el.url2;
        const nameArray = "url2coment"
     
        setNameArray(nameArray)
        setComent(coment);
        setUrlImage(urlImage);
       
      }
      return el;
    });
  };
  const toggle3 = (url3) => {
    cards.map((el) => {
      if (el.url3 === url3) {
        
        const coment = el.url3coment;
        const urlImage = el.url3;
        const nameArray = "url3coment"
        
        setNameArray(nameArray)
        setComent(coment);
        setUrlImage(urlImage);
       
      }
      return el;
    });
  };
  const toggle4 = (url4) => {
    cards.map((el) => {
      if (el.url4 === url4) {
        
        const coment = el.url4coment;
        const urlImage = el.url4;
        const nameArray = "url4coment"
 
        setNameArray(nameArray)
        setComent(coment);
        setUrlImage(urlImage);
    
      }
      return el;
    });
  };
  const toggle5 = (url5) => {
    cards.map((el) => {
      if (el.url5 === url5) {
       
        const coment = el.url5coment;
        const urlImage = el.url5;
        const nameArray = "url5coment"
   
        setNameArray(nameArray)
        setComent(coment);
        setUrlImage(urlImage);
     
      }
      return el;
    });
  };
  const toggle6 = (url6) => {
    cards.map((el) => {
      if (el.url6 === url6) {
       
        const coment = el.url6coment;
        const urlImage = el.url6;
        const nameArray = "url6coment"
    
        setNameArray(nameArray)
        setComent(coment);
        setUrlImage(urlImage);
      }
      return el;
    });
  };

  const toggle7 = (url7) => {
    cards.map((el) => {
      if (el.url7 === url7) {
      
        const coment = el.url7coment;
        const urlImage = el.url7;
        const nameArray = "url7coment"
      
        setNameArray(nameArray)
        setComent(coment);
        setUrlImage(urlImage);
      }
      return el;
    });
  };

  const toggle8 = (url8) => {
    cards.map((el) => {
      if (el.url8 === url8) {
       
        const coment = el.url8coment;
        const urlImage = el.url8;
        const nameArray = "url8coment"
   
        setNameArray(nameArray)
        setComent(coment);
        setUrlImage(urlImage);
    
      }
      return el;
    });
  };
  const toggle9 = (url9) => {
    cards.map((el) => {
      if (el.url9 === url9) {
    
        const coment = el.url9coment;
        const urlImage = el.url9;
        const nameArray = "url9coment"
      
        setNameArray(nameArray)
        setComent(coment);
        setUrlImage(urlImage);
        
      }
      return el;
    });
  };
  const toggle10 = (url10) => {
    cards.map((el) => {
      if (el.url10 === url10) {
        
        const coment = el.url10coment;
        const urlImage = el.url10;
        const nameArray = "url10coment"
       
        setNameArray(nameArray)
        setComent(coment);
        setUrlImage(urlImage);
       
      }
      return el;
    });
  };

  return (
    <div className="containerUser">
      <div className="containerUser__header header-box">
        <div className="header-box__circle">
          <div className="header-box__photo">
            <img src={url} alt={name} />
          </div>
        </div>
        <div className="header-box__content box">
          <div className="box__button">
            <h2>{name}</h2>
            <button className="button15" onClick={() => toggleAdded(_id)}>{added ? "Подписан" : "Оформить подписку?"}</button>
          </div>
          <div className="box__viewer">
            <p className="box__text">125 публикаций</p>
            <p className="box__text">1.2 тыс. подписчиков</p>
            <p className="box__text">168 подписок</p>
          </div>
          <div className="box__content content">
            <h3 className="content__name">{name}</h3>
            <h3 className="content__text">Публичная личность</h3>

            <h3 className="cont">Возраст: {age}</h3>
            <h3 className="cont">Страна: {country}</h3>
            <h3 className="cont">Город: {city}</h3>
            <h3 className="cont">Девиз: {lifeСredo} </h3>
          </div>
        </div>
      </div>
      <div className="collection">
        <div
          onClick={() => toggleIsOpenModal(_id)}
          className="collection__container"
        >
          <div className="like">
            <div className="like__content">
              <Icon color="white" type="heart" />
              <span></span>
              {urllike}
            </div>
            <div className="like__content">
              <Icon color="white" type="coment" />
              <span>{urlcoment.length}</span>
            </div>
          </div>
          <img
            onClick={() => toggle(url)}
            className="collection__item"
            src={url}
            alt={name}
          />
        </div>
        <div
          onClick={() => toggleIsOpenModal(_id)}
          className="collection__container"
        >
          <div className="like">
            <div className="like__content">
              <Icon color="white" type="heart" />
              <span></span>
              {url2like}
            </div>
            <div className="like__content">
              <Icon color="white" type="coment" />
              <span>{url2coment.length}</span>
            </div>
          </div>
          <img
            onClick={() => toggle2(url2)}
            className="collection__item"
            src={url2}
            alt={name}
          />
        </div>
        <div
          onClick={() => toggleIsOpenModal(_id)}
          className="collection__container"
        >
          <div className="like">
            <div className="like__content">
              <Icon color="white" type="heart" />
              <span></span>
              {url3like}
            </div>
            <div className="like__content">
              <Icon color="white" type="coment" />
              <span>{url3coment.length}</span>
            </div>
          </div>
          <img
            onClick={() => toggle3(url3)}
            className="collection__item"
            src={url3}
            alt={name}
          />
        </div>
        <div
          onClick={() => toggleIsOpenModal(_id)}
          className="collection__container"
        >
          <div className="like">
            <div className="like__content">
              <Icon color="white" type="heart" />
              <span></span>
              {url4like}
            </div>
            <div className="like__content">
              <Icon color="white" type="coment" />
              <span>{url4coment.length}</span>
            </div>
          </div>
          <img
            onClick={() => toggle4(url4)}
            className="collection__item"
            src={url4}
            alt={name}
          />
        </div>
        <div
          onClick={() => toggleIsOpenModal(_id)}
          className="collection__container"
        >
          <div className="like">
            <div className="like__content">
              <Icon color="white" type="heart" />
              <span></span>
              {url5like}
            </div>
            <div className="like__content">
              <Icon color="white" type="coment" />
              <span>{url5coment.length}</span>
            </div>
          </div>
          <img
            onClick={() => toggle5(url5)}
            className="collection__item"
            src={url5}
            alt={name}
          />
        </div>
        <div
          onClick={() => toggleIsOpenModal(_id)}
          className="collection__container"
        >
          <div className="like">
            <div className="like__content">
              <Icon color="white" type="heart" />
              <span></span>
              {url6like}
            </div>
            <div className="like__content">
              <Icon color="white" type="coment" />
              <span>{url6coment.length}</span>
            </div>
          </div>
          <img
            onClick={() => toggle6(url6)}
            className="collection__item"
            src={url6}
            alt={name}
          />
        </div>
        <div
          onClick={() => toggleIsOpenModal(_id)}
          className="collection__container"
        >
          <div className="like">
            <div className="like__content">
              <Icon color="white" type="heart" />
              <span></span>
              {url7like}
            </div>
            <div className="like__content">
              <Icon color="white" type="coment" />
              <span>{url7coment.length}</span>
            </div>
          </div>
          <img
            onClick={() => toggle7(url7)}
            className="collection__item"
            src={url7}
            alt={name}
          />
        </div>
        <div
          onClick={() => toggleIsOpenModal(_id)}
          className="collection__container"
        >
          <div className="like">
            <div className="like__content">
              <Icon color="white" type="heart" />
              <span></span>
              {url8like}
            </div>
            <div className="like__content">
              <Icon color="white" type="coment" />
              <span>{url8coment.length}</span>
            </div>
          </div>
          <img
            onClick={() => toggle8(url8)}
            className="collection__item"
            src={url8}
            alt={name}
          />
        </div>
        <div
          onClick={() => toggleIsOpenModal(_id)}
          className="collection__container"
        >
          <div className="like">
            <div className="like__content">
              <Icon color="white" type="heart" />
              <span></span>
              {url9like}
            </div>
            <div className="like__content">
              <Icon color="white" type="coment" />
              <span>{url9coment.length}</span>
            </div>
          </div>
          <img
            onClick={() => toggle9(url9)}
            className="collection__item"
            src={url9}
            alt={name}
          />
        </div>
        <div
          onClick={() => toggleIsOpenModal(_id)}
          className="collection__container"
        >
          <div className="like">
            <div className="like__content">
              <Icon color="white" type="heart" />
              <span></span>
              {url10like}
            </div>
            <div className="like__content">
              <Icon color="white" type="coment" />
              <span>{url10coment.length}</span>
            </div>
          </div>
          <img
            onClick={() => toggle10(url10)}
            className="collection__item"
            src={url10}
            alt={name}
          />
        </div>
      </div>
      {isOpenModal && (
        <Modal
          key={_id}
          name={name}
          _id={_id}
          toggleIsOpenModal={toggleIsOpenModal}
          coment={coment}
          urlImage={urlImage}
          url={url}
          country={country}
          nameArray={nameArray}
        />
      )}
    </div>
  );
};

export default User;
