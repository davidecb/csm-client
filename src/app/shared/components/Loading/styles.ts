import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div`
  height: 150px;
  width: 150px;
  animation: ${spinner} 1.2s linear infinite;  
`;

export const LogoImg = styled.img`
  max-height: 150px;
  max-width: 150px;
`;
