import { uuid } from 'uuidv4';

class Mood {
  id: string;

  temp: number;

  constructor({ temp }: Omit<Mood, 'id'>) {
    this.id = uuid();
    this.temp = temp;
  }
}

export default Mood;
