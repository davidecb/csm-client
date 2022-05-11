import backImg from '../../../../../assets/img/logo.png';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  background: url(${backImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    background-position: center top;
    align-items: flex-end;
  }
`;
