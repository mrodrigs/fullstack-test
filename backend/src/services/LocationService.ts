import WeatherApi from '../config/WeatherApi';
import API_KEY from '../constants/weather';

interface Request {
  lat: number;
  lon: number;
}

interface Location {
  name: string;
  country: string;
  temp: number;
  weather: string;
}

async function LocationService({ lat, lon }: Request): Promise<Location> {
  const response = await WeatherApi.get('/weather', {
    params: { appid: API_KEY, lat, lon },
  });

  if (response.status !== 200) {
    throw new Error('Location service failed.');
  }

  const { name } = response.data;
  const { country } = response.data.sys;
  const { temp } = response.data.main;
  const weather = response.data.weather[0].main;

  const location: Location = {
    name,
    country,
    temp: temp - 273.15,
    weather,
  };

  return location;
}

export default LocationService;
