import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-end;
  background: #f5f5f5;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  width: 100vw;
`;

export const LocationInfo = styled.div`
  color: #212121;
  font-family: Montserrat;
  font-size: 56px;
`;

export const LocationContainer = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PlayButton = styled.img`
  cursor: pointer;
  height: 40px;
  width: 40px;
`;

export const PlayButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100px;
`;

export const Playlist = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 100px);
  overflow-y: scroll;
  transition: 0.5s;
  width: 100%;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #fafafa;
  }

  ::-webkit-scrollbar-thumb {
    background: #757575;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #494949;
  }
`;

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100%;
`;

export const PlaylistDescription = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
`;

export const PlaylistInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px;
`;

export const PlaylistThumbnail = styled.img`
  height: 100%;
  width: 100px;
`;

export const PlaylistTitle = styled.span`
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
`;

export const Sidebar = styled.div`
  background: #212121;
  box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.04);
  height: 100%;
  width: 40%;
`;

export const Temperature = styled.span`
  color: #212121;
  font-family: Montserrat;
  font-size: 112px;
`;

export const Text = styled.span`
  align-items: center;
  color: #fff;
  display: flex;
  font-family: Nunito;
  font-size: 14px;
  height: 40px;
  padding: 0px 10px;
`;

export const Title = styled.span`
  align-items: center;
  color: #a4a4a4;
  display: flex;
  font-family: Nunito;
  font-size: 12px;
  height: 30px;
  padding: 0px 10px;
`;

export const Track = styled.div`
  border: solid 1px #424242;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Weather = styled.span`
  color: #484848;
  font-family: Montserrat;
  font-size: 36px;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 100px;
  padding-bottom: 100px;
`;
