import { colors } from '../Colors';
import styled from 'styled-components';

export const ChoosePanel = styled.div`
  background: none;
  text-transform: capitalize;
  display: flex;
  justify-content: space-evenly;

  .icon {
    width: 20px;
    height: 20px;
  }

  button {
    border-radius: 5px;
    border: 3px outset ${colors.golden_poppy};
    padding: 5px;
    margin: 10px;
    width: 90px;
    color: ${colors.basic_blue};
    background: ${colors.golden_poppy};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
`;
