import axios from 'axios';

const getUsersCards = () => {
return axios("../users.json")
   // return axios("https://backend-for-instagram.herokuapp.com/")      
       
}

export default getUsersCards;

