import { stringify } from 'querystring';
import { SpotifyAccessApi } from '../config/SpotifyApi';
import AUTHORIZATION_TOKEN from '../constants/spotify';

async function SpotifyTokenService(): Promise<string> {
  const requestBody = {
    grant_type: 'client_credentials',
  };

  const response = await SpotifyAccessApi.post(
    '/token',
    stringify(requestBody),
    {
      headers: {
        Authorization: `Basic ${AUTHORIZATION_TOKEN}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  if (response.status !== 200) {
    throw new Error('Spotify Token service failed.');
  }

  const accessToken = response.data.access_token;

  return accessToken;
}

export default SpotifyTokenService;
