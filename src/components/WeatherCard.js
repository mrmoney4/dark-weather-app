import React from 'react';
import './WeatherCard.css';

function WeatherCard({ city, temp, wind, time, condition, humidity, iconUrl }) {
  return (
    <div className='card'>
      <div className='icon'>
        {iconUrl ? <img src={iconUrl} alt={condition || city} /> : null}
      </div>
      <h3>
        {city} <span>{temp}</span>
      </h3>
      {time && <p>Time : {time}</p>}
      <p>Wind Speed : {wind}</p>
      <p>Condition : {condition}</p>
      {humidity && <p>Humidity : {humidity}</p>}
    </div>
  );
}

export default WeatherCard;
