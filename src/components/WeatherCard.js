import React from 'react';
import './WeatherCard.css';
import cloudy from "../images/cloudy.svg";
import rainy from "../images/rainy.svg";
import sunny from "../images/sunny.svg";


function WeatherCard({ city, temp, wind, time, condition, humidity, iconUrl }) {
  const getWeatherIcon = (condition) => {
    const lowerCondition = condition?.toLowerCase() || '';
    if (lowerCondition.includes('rain')) return rainy;
    if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) return sunny;
    if (lowerCondition.includes('cloud')) return cloudy;
    return cloudy; // default
  };

  return (
    <div className='card'>
      <div className='icons'>
        <img src={getWeatherIcon(condition)} alt={condition} />
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
