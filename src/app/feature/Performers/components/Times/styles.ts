import { colors } from 'app/shared/components/Colors';
import styled from 'styled-components';

export const Wrapper = styled.div.attrs((props) => {})`
  padding: 8px;
  width: 20%;
  background: none;
  color: ${({ isGoalReached }) => {
    if (isGoalReached) {
      return colors.golden_poppy;
    } else {
      return colors.basic_red;
    }
  }};
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .goalIcon {
    width: 25px;
    height: 25px;
  }

  .goalContainer {
    width: 90px;
    display: flex;
    justify-content: space-evenly;
  }
`;
