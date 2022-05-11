import { colors } from 'app/shared/components/Colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
  width: 30%;
  background: ${colors.golden_dark2};
  color: ${colors.basic_blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 3px inset ${colors.golden_poppy};
  border-radius: 5px;
`;

export {};
