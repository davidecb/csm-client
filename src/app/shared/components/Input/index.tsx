import { colors } from '../Colors';
import styled from 'styled-components';

export const Input = styled.input`
  font-family: londrinaSolidLight;
  text-decoration: none;
  position: relative;
  width: 80%;
  display: block;
  margin: 9px auto;
  font-size: 18px;
  color: ${colors.basic_white};
  padding: 8px;
  border-radius: 6px;
  border: none;
  background: ${colors.basic_black};
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 3px 3px 10px ${colors.golden_poppy};
    background: ${colors.basic_blue};
  }
`;
