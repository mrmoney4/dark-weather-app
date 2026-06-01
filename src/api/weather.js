export async function fetchWeatherByCity(city) {
  if (!city?.trim()) {
    throw new Error('City name is required');
  }

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  if (!apiKey?.trim()) {
    throw new Error('Missing REACT_APP_WEATHER_API_KEY in .env');
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    const message = data?.message || 'Weather API request failed';
    throw new Error(`${response.status} ${message}`);
  }

  return data;
}
