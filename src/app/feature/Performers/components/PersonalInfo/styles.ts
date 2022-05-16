import { colors } from 'app/shared/components/Colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
  width: 25%;
  background: none;
  color: ${colors.golden_poppy};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;

  .icon {
    width: 25px;
    height: 25px;
    margin: 5px;
    cursor: pointer;
  }
`;

export const PerformerConnect = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

export {};
