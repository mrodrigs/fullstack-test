import Mood from '../models/Mood';
import Temperature from '../models/Temperature';

import WeatherApi from '../config/WeatherApi';

class MoodRepository {
  private moods: Mood[];

  constructor() {
    this.moods = [];
  }

  public all(): Mood[] {
    return this.moods;
  }
}

export default MoodRepository;
