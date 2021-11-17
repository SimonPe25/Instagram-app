import React, { useEffect } from "react";
import "./style.scss";
import { fetchUsers, updateCardsStore } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../store/selectors";
import AppRoutes from "../routes/AppRoutes";




const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const cards = useSelector(getCards);

  const favoriteLocalStorage = (_id) => {
    let array = JSON.parse(localStorage.getItem("favorites")) || [];
    array = array.includes(_id)
      ? array.filter((el) => el !== _id)
      : array.concat(_id);
    const favorites = JSON.stringify(array);
    localStorage.setItem("favorites", favorites);
  };

  const toggleFavorite = (_id) => {
    const newArray = cards.map((el) => {
      if (el._id === _id) {
        el.isInfavorite = !el.isInfavorite;
      }
      return el;
    });
    favoriteLocalStorage(_id);
    dispatch(updateCardsStore(newArray));
  };

  const addedLocalStorage = (_id) => {
    let array = JSON.parse(localStorage.getItem("added")) || [];
    array = array.includes(_id)
      ? array.filter((el) => el !== _id)
      : array.concat(_id);
    const added = JSON.stringify(array);
    localStorage.setItem("added", added);
  };

  const toggleAdded = (_id) => {
    const newArray = cards.map((el) => {
      if (el._id === _id) {
        el.added = !el.added;
      }
      return el;
    });

    addedLocalStorage(_id);
    dispatch(updateCardsStore(newArray));
  };
  const toggleIsOpenModal = (_id, e) => {
    const newArray = cards.map((el) => {
      if (el._id === _id) {
        el.isOpenModal = !el.isOpenModal;
      }
      return el;
    });
    dispatch(updateCardsStore(newArray));
  };
  
  return (
    <>  
    <AppRoutes
      cards={cards}
      toggleAdded={toggleAdded}
      toggleFavorite={toggleFavorite}
      toggleIsOpenModal={toggleIsOpenModal} 
    />
    </>
  );
};

export default Main;
