import React, { useState, useEffect } from 'react';
import './App.scss';
import getWeather from '../helpers/data/weatherData';

function App() {
  const [allWeather, setAllWeather] = useState({});

  useEffect(() => {
    getWeather()
      .then((response) => {
        setAllWeather(response);
      });
  }, []);

  return (
    <div className='App'>
      {allWeather.name}
    </div>
  );
}

export default App;
