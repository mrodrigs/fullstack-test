import { Router } from 'express';

import MoodRepository from '../repositories/MoodRepository';
import LocationService from '../services/LocationService';
import MoodService from '../services/MoodService';
import SpotifyTokenService from '../services/SpotifyTokenService';

const moodRouter = Router();
const moodRepository = new MoodRepository();

moodRouter.get('/', (request, response) => {
  const moods = moodRepository.all();

  return response.json(moods);
});

moodRouter.post('/', async (request, response) => {
  try {
    const { lat, lon } = request.body;

    const { country, name, temp, weather } = await LocationService({
      lat,
      lon,
    });

    const accessToken = await SpotifyTokenService();

    const mood = await MoodService({ accessToken, temp });

    return response.status(200).json({ name, country, temp, weather, mood });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

export default moodRouter;
