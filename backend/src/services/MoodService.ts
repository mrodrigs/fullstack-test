import { SpotifyApi } from '../config/SpotifyApi';

interface Request {
  accessToken: string;
  temp: number;
}

async function MoodService({ accessToken, temp }: Request): Promise<any> {
  let category: string;

  if (temp >= 30) category = 'party';
  else if (temp >= 15 && temp < 30) category = 'pop';
  else if (temp >= 10 && temp <= 14) category = 'rock';
  else category = 'classical';

  const playlists = await SpotifyApi.get(
    `/browse/categories/${category}/playlists`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  const { id } = playlists.data.playlists.items[0];

  const moodplaylist = await SpotifyApi.get(`/playlists/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return {
    playlist: moodplaylist.data,
  };
}

export default MoodService;
