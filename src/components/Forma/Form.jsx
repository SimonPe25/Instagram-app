import axios from "axios";
import React from "react";
import { useState } from "react";
import LogoUser from "../../usersImages/katerinakhaidukova/01_katerinakhaidukova.jpg";
import Icon from "../Icon/Icon";
import "./form.scss";

const Form = (props) => {
  const { _id, nameArray, formButton, inputEnter } = props;

  const [values, setValues] = useState({
    _id: _id,
    photo: nameArray,
    autor: "katerinakhaidukova",
    message: "",
    urlUser: LogoUser,
  });

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put("https://backend-for-instagram.herokuapp.com/users", values)
      .then((res) => {})
      .catch((e) => {
        console.log("Error in Message!");
      });

    setValues({ ...values, message: "" });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="container-coment">
      <Icon type="smile" className="smile-icon" />
      <form onSubmit={submitForm} className="form-box">
        <div>
          <label className="input-enter" placeholder="Оставьте сообщение...">
            <input
            id="testinputFofm"
              className={inputEnter}
              placeholder="Добавьте комментарий..."
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <button 
          id="testButtonForm"
          type="submit" className={formButton}>
            Опубликовать
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
