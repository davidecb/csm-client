import { colors } from '../Colors';
import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px;
  width: 500px;
  background: ${colors.background};
  color: ${colors.golden_poppy};
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  border: 2px groove ${colors.golden_dark};
  box-shadow: ${colors.golden_dark} 0 0 15px;
  transition: all 0.2s ease-in;

  &:hover {
    border: 3px groove ${colors.golden_poppy};
    box-shadow: ${colors.golden_poppy} 0 0 30px;
  }
`;
