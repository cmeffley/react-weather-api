import React, { useState } from 'react';
import {
  Form,
  Card,
  CardImg,
  CardText,
  Button
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
        ? <><CardImg id="image" top src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
        <CardText tag="h4">{data.name}</CardText>
        <CardText>{data.weather[0].main}</CardText>
        <CardText>{data.main.temp} Degrees | {data.weather[0].description}</CardText>
        <CardText>Wind Speed: {data.wind.speed}</CardText>
       </> : null}
    </Card>
      <Form
      id="searchWeather"
      onSubmit={(e) => {
        e.preventDefault();
        forecastRequest();
      }}>
        <h4>{'Search the Weather'}</h4><hr />
        <input
          name="city"
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        /><br /><br />
        <Button color="info" type="submit">Get Weather</Button>
      </Form>
    </>
  );
};

export default Weather;
