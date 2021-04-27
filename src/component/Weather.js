import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText
} from 'reactstrap';
import getWeather from '../helpers/data/weatherData';

const Weather = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);

  async function forecastRequest() {
    await getWeather(city)
      .then((response) => setData(response));
  }

  return (
    <>
    <Card id="weatherCard">
      {data
        ? <><CardTitle tag="h3">{data.name}</CardTitle>
        <CardImg top width="50%" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
        <CardText>{data.weather[0].main}</CardText>
        <CardText>Temperature: {data.main.temp}</CardText>
        <CardText>Wind Speed: {data.wind.speed}</CardText>
        <CardText>Description: {data.weather[0].description}</CardText>
       </> : null}
    </Card>
      <form
      id="searchWeather"
      onSubmit={(e) => {
        e.preventDefault();
        forecastRequest();
      }}>
        <input
          name="city"
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
    </>
  );
};

export default Weather;
