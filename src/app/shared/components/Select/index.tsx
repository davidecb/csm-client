import { colors } from '../Colors';
import styled from 'styled-components';

export const Select = styled.select`
  margin: 5px;
  padding: 5px;
  font-family: londrinaSolidRegular;
  font-size: 14px; 
  width: 70%;
  background: ${colors.basic_blue};
  color: ${colors.golden_dark};
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px ${colors.golden_dark} ;

  &:hover {
      box-shadow: 2px 2px 9px ${colors.golden_poppy} ;
      color: ${colors.golden_poppy};
      transition: all 0.1s ease;
  }
`;
