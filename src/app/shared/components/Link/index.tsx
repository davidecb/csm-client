import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../Colors';
import styled from 'styled-components';

export const Link = styled(RouterLink)`
  color: ${colors.golden_dark};
  text-decoration: none;
  &:hover {
    color: ${colors.golden_poppy};
  }

  .itemIcon {
    width: 25px;
    height: 25px;
    transform: scale(1);
    transition: transform 0.1s ease-in;

    &:hover {
      transform: scale(1.3);
      transition: transform 0.1s ease-in;
    }
  }
`;
