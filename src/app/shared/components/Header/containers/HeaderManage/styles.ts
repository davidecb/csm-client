import { colors } from 'app/shared/components/Colors';
import styled from 'styled-components';

export const HeaderNav = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-evenly;
  background-color: ${colors.background};

  @media (max-width: 600px) {
    padding-bottom: 10px;
  }
`;

export default {};
