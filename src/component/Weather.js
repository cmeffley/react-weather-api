import React, { useState } from 'react';
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
    <div>
      {data ? <h3>{data.name} {data.main.temp}</h3> : null}
    </div>
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
