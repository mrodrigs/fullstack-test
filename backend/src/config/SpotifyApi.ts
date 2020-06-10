import axios from 'axios';

export const SpotifyAccessApi = axios.create({
  baseURL: 'https://accounts.spotify.com/api',
});

export const SpotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});
