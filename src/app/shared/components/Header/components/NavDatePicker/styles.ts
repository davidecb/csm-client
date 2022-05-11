import { colors } from './../../../Colors/index';
import styled from 'styled-components';

export const NavDatePickerContainer = styled.div`
  width: 25%;
  max-width: 200px;
  @media (max-width: 600px) {
    width: 80%;
  }

  input {
    width: 100%;
    font-family: londrinaSolidLight;
    text-align: center;
    border: none;
    border-radius: 5px;
    padding: 5px;
    background: ${colors.background};
    color: ${colors.golden_dark};
    box-shadow: ${colors.golden_dark} 0 0 7px;

    &:focus {
      color: ${colors.golden_poppy};
      box-shadow: ${colors.golden_poppy} 0 0 10px;
    }

    &:focus-visible {
      outline: none;
    }
  }  
`;
