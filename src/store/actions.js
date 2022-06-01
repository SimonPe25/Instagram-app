import getUsersCards from "../api/getUsersCards.js";
import { LOADING, UPDATE_CARDS, LOADED, NAME, MESSAGE } from "./types"


export const fetchUsers = () => (dispatch) => {

    dispatch({ type: LOADING })
        getUsersCards()
        .then(res => {
            const normalizeArray = normalizeData(res.data);
            dispatch({ type: UPDATE_CARDS, payload: { cards: normalizeArray } })
        })
        .catch((error) => {
            console.error(error)
        })

    const normalizeData = (data) => {
        return data.map(cardPlus => {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || []
            const added = JSON.parse(localStorage.getItem('added')) || []

            cardPlus.isInfavorite = favorites.includes(cardPlus._id)
            cardPlus.added = added.includes(cardPlus._id)
            return cardPlus
        })
    }
    dispatch({ type: LOADED })
}
export const updateCardsStore = cards => {
    return { type: UPDATE_CARDS, payload: { cards } }
}
export const dataName = (data) => {
    return { type: NAME, payload: data }
}
export const udateComent = (data) => {
    return { type: MESSAGE, payload: data }
}
