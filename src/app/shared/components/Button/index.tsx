import { colors } from '../Colors';
import styled from 'styled-components';


export const Button = styled.button`
  font-family: londrinaSolidRegular;
  font-size: medium;
  color: ${colors.basic_black};
  background: ${colors.golden_dark};
  border-radius: 5px;
  height: 32px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  &[disabled] {
    opacity: 0.3;
  }
`;
