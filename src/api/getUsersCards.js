 import axios from 'axios';

 const getUsersCards = () => {
    const req_url = "https://dashboard.heroku.com/apps/warm-brushlands-96074"
    return axios(req_url)
 }

 export default getUsersCards;

