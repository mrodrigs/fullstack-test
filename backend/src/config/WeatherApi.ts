import axios from 'axios';

const WeatherApi = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

export default WeatherApi;
