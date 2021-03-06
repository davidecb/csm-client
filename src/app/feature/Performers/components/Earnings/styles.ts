import { colors } from 'app/shared/components/Colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
  width: 20%;
  background: none;
  color: ${colors.golden_poppy};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 22px;

  .iconContainer {
    margin-bottom: 10px;

    .moneyIcon {
      width: 25px;
      height: 25px;
    }
  }
`;

export {};
