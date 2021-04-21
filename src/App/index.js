import React, { useState, useEffect } from 'react';
import './App.scss';
import getWeather from '../helpers/data/weatherData';

function App() {
  const [allWeather, setAllWeather] = useState({});
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getWeather()
      .then((response) => {
        setAllWeather(response);
      });
  }, []);

  return (
    <div className='App'>
      <h3><strong>{allWeather.name}</strong></h3>
      <form onClick={getWeather}>
        <input
          type="text"
          placeholder="Enter City"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      <button>Get Weather</button>
    </div>
  );
}

export default App;
