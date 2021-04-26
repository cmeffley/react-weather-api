import axios from 'axios';
import firebaseConfig from '../apiKeys';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const api = firebaseConfig.apiKey;

const getWeather = (city) => new Promise((resolve, reject) => {
  axios.get(`${url}?q=${city}&appid=${api}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getWeather;
