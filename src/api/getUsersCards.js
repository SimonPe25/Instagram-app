import axios from 'axios';

const getUsersCards = () => {
   return axios("https://dashboard.heroku.com/apps/warm-brushlands-96074")      
       
}

export default getUsersCards;

