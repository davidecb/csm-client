import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BrandDiv = styled.div`
  margin: 5px;
`; 

export const LogoImg = styled.img`
  max-height: 50px;
  max-width: 120px;
`;

export const LogoSpan = styled.span`
  color: green;
  font-size: calc(18px + 2vmin);
`;

export const BrandLink = styled(Link)`
  text-decoration: none;
`;

export default {};
