import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

import api from '../../config/api';

import {
  Button,
  Container,
  LoadingContainer,
  Text,
  TextContainer,
  Title,
} from './styles';

const Landing: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<boolean>(false);

  const history = useHistory();

  async function handleSuccess(lat: number, lon: number): Promise<void> {
    try {
      setLocationError(false);
      setLoading(true);

      const response = await api.post('/mood', { lat, lon });

      if (response.status === 200) {
        history.push({ pathname: '/mood', state: { data: response.data } });
      }
    } catch (error) {
      // error
    }
  }

  function handleError(): void {
    setLocationError(true);
  }

  function handleGetGeoLocation(): void {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        handleSuccess(latitude, longitude);
      },
      () => {
        handleError();
      },
    );
  }

  return (
    <Container>
      <TextContainer>
        <Title>Meu Mood :)</Title>
        <Text>
          Meu Mood sugere uma playlist baseado no clima de onde você está.
        </Text>
      </TextContainer>
      {!loading ? (
        <Button error={locationError} onClick={handleGetGeoLocation}>
          {!locationError
            ? 'Encontrar Meu Mood'
            : 'Habilite a localização no navegador e tente novamente'}
        </Button>
      ) : (
        <LoadingContainer>
          <HashLoader color="#212121" size={60} />
        </LoadingContainer>
      )}
    </Container>
  );
};

export default Landing;
