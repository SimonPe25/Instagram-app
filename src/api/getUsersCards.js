 import axios from 'axios';

 const getUsersCards = () => {
    const req_url = "https://warm-brushlands-96074.herokuapp.com/"
    return axios(req_url)
 }

 export default getUsersCards;

