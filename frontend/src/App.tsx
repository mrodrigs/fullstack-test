import React, { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import WebFont from 'webfontloader';

import AppRoutes from './routes';

import GlobalStyles from './styles/global';

import { Container } from './styles';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  function loadResources(): void {
    WebFont.load({
      google: {
        families: [
          'Montserrat:300,400,500,600,700,800,900',
          'Nunito:300,400,500,600,700,800,900',
        ],
      },
    });
  }

  useEffect(() => {
    loadResources();

    setLoading(false);
  }, []);

  return (
    <Container>
      {loading ? <BounceLoader color="#212121" size={60} /> : <AppRoutes />}
      <GlobalStyles />
    </Container>
  );
};

export default App;
