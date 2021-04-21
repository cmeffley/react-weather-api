import axios from 'axios';
import firebaseConfig from '../apiKeys';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const api = firebaseConfig.apiKey;

const getWeather = () => new Promise((resolve, reject) => {
  axios.get(`${url}?q=Boise&appid=${api}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getWeather;
