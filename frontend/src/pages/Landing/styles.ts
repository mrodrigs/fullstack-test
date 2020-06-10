import styled from 'styled-components';

interface ButtonProps {
  error?: boolean;
}

export const Button = styled.button<ButtonProps>`
  animation: slide-left 2s ease;
  background: ${props => (props.error ? '#e64a19' : '#212121')};
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-family: Nunito;
  font-weight: 700;
  height: 40px;
  transition: 0.5s ease;
  width: 300px;

  :hover {
    background: ${props => (props.error ? '#ff4d4f' : '#484848')};
  }

  @keyframes slide-left {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Container = styled.div`
  align-items: center;
  background: #f5f5f5;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  padding: 100px 200px;
  width: 100vw;
`;

export const LoadingContainer = styled.div`
  margin-right: 115px;
`;

export const Text = styled.span`
  color: #212121;
  font-family: Montserrat;
  font-size: 14px;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const TextContainer = styled.div`
  animation: slide-right 2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes slide-right {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Title = styled.span`
  color: #212121;
  font-family: Nunito;
  font-size: 64px;
`;
