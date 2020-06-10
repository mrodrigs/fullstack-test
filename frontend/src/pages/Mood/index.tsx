import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Play from '../../assets/play.png';

import {
  Container,
  InfoWrapper,
  LocationContainer,
  LocationInfo,
  PlayButton,
  PlayButtonContainer,
  Playlist,
  PlaylistContainer,
  PlaylistDescription,
  PlaylistInfo,
  PlaylistThumbnail,
  PlaylistTitle,
  Sidebar,
  Temperature,
  Text,
  Title,
  Track,
  Weather,
  WeatherContainer,
} from './styles';

const Mood: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const [mood, setMood] = useState();

  useEffect(() => {
    if (location.state) {
      setMood(location.state);
    } else {
      history.push('/');
    }
  }, [history, location.state]);

  return (
    <Container>
      {mood ? (
        <>
          <WeatherContainer>
            <Temperature>{parseInt(mood.data.temp, 10)}</Temperature>
            <Temperature>º</Temperature>
            <LocationContainer>
              <InfoWrapper>
                <LocationInfo>{mood.data.name}</LocationInfo>
                <LocationInfo>,</LocationInfo>
                <LocationInfo>{mood.data.country}</LocationInfo>
              </InfoWrapper>
              <Weather>{mood.data.weather}</Weather>
            </LocationContainer>
          </WeatherContainer>
          <Sidebar>
            <PlaylistContainer>
              <PlaylistThumbnail src={mood.data.mood.playlist.images[0].url} />
              <PlaylistInfo>
                <PlaylistTitle>{mood.data.mood.playlist.name}</PlaylistTitle>
                <PlaylistDescription>
                  {mood.data.mood.playlist.description}
                </PlaylistDescription>
              </PlaylistInfo>
              <PlayButtonContainer>
                <a
                  href={mood.data.mood.playlist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlayButton src={Play} />
                </a>
              </PlayButtonContainer>
            </PlaylistContainer>
            <Playlist>
              <Track>
                <Title>TÍTULO</Title>
                <Title>ARTISTA</Title>
              </Track>
              {mood.data.mood.playlist.tracks.items.map((track: any) => (
                <Track key={track.track.id}>
                  <Text>{track.track.name}</Text>
                  <Text>{track.track.artists[0].name}</Text>
                </Track>
              ))}
            </Playlist>
          </Sidebar>
        </>
      ) : null}
    </Container>
  );
};

export default Mood;
