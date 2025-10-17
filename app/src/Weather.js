import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  
  const getWeather = (e) => {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea2ab483fbf724745887ffe600f47a66&units=metric`)
      .then(res => res.json())
      .then(data => {
        if (data.main) {
          setTemp(`Temp in ${city}: ${data.main.temp} °C`);
        } else {
          setTemp(`City not found`);
        }
      })
      .catch(err => {
        setTemp('Error fetching data');
      });
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Weather Report</h2>
      <form onSubmit={getWeather}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          required
        />
        <button type="submit">Get Weather</button>
      </form>
      <p>{temp}</p>
    </div>
  );
}

export default WeatherApp;
