import rootReducer from './rootReducer.jsx';
import { IS_CLOSE_FIRST_MODAL, IS_OPEN_FIRST_MODAL, LOADED, LOADING, MESSAGE, UPDATE_CARDS, VENDORCODE } from './types.jsx';

describe("Testing reducer UPDATE_CARDS", ()=>{

    const initialState = {
        cards: [],
        message: []
      };

    test("UPDATE_CARDS toggle cards", ()=>{  
        const testCards = [{id:1, name: "Cards1"}, {id:2, name: "Cards2"}]
        const action = {
            type: UPDATE_CARDS , 
            payload: {cards: testCards}
        }
        const newState = rootReducer(initialState, action)
        expect(newState.cards).toEqual(testCards)
    })
    test("UPDATE_MESSAGE toggle message", ()=>{
         const testMessage = [
            {urlComent:"url5Coment", message: "Привет как дела?"}, 
             {urlComent:"url2Coment", message: "Ты классно выглядишь"}
        ] 
        const action = {
            type: MESSAGE, 
            payload: testMessage
        }
        const newState = rootReducer(initialState, action)
        expect(newState.message).toBe(testMessage)
    })   
   
})
