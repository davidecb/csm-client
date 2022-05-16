import { colors } from 'app/shared/components/Colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 5px;
  width: 100%;
  background: none;
  color: ${colors.golden_poppy};
  text-transform: capitalize;
  letter-spacing: 1px;
  border: 2px outset ${colors.golden_poppy};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    width: 25px;
    height: 25px;
    color: ${colors.basic_red};
    cursor: pointer;
  }
`;
