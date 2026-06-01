import React, { useCallback, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import Controls from './components/Controls';
import WeatherCard from './components/WeatherCard';
import { fetchWeatherByCity } from './api/weather';

const defaultCities = [
  { city: 'Tehran', temp: '35°C', wind: '11 km/h', time: '19:52', condition: 'Cloudy', humidity: '62%' },
  { city: 'Qom', temp: '41°C', wind: '5 km/h', time: '19:52', condition: 'Sunny', humidity: '28%' },
  { city: 'Gilan', temp: '23°C', wind: '28 km/h', time: '19:52', condition: 'Rainy', humidity: '87%' },
];

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = useCallback(
    async (event) => {
      event.preventDefault();

      if (!query.trim()) {
        setError('Please enter a city name.');
        setWeather(null);
        return;
      }

      setLoading(true);
      setError('');

      try {
        const data = await fetchWeatherByCity(query);
        setWeather(data);
      } catch (fetchError) {
        setError(fetchError.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    },
    [query]
  );

  const clearSearch = () => {
    setQuery('');
    setError('');
    setWeather(null);
  };

  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <Controls onClear={clearSearch}>
        <SearchForm query={query} onQueryChange={setQuery} onSearch={handleSearch} loading={loading} />
      </Controls>

      <div className='cards'>
        {loading && <p className='status'>Loading weather…</p>}
        {error && <p className='status error'>{error}</p>}

        {weather ? (
          <WeatherCard
            city={weather.name}
            temp={`${Math.round(weather.main.temp)}°C`}
            wind={`${weather.wind.speed} km/h`}
            time={new Date(weather.dt * 1000).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
            condition={weather.weather[0].main}
            humidity={`${weather.main.humidity}%`}
            iconUrl={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
        ) : (
          defaultCities.map((item) => <WeatherCard key={item.city} {...item} />)
        )}
      </div>
    </div>
  );
}

export default App;
