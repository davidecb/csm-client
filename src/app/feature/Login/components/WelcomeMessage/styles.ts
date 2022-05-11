import { colors } from 'app/shared/components/Colors';
import styled from 'styled-components';

export const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.span`
  font-family:  londrinaSolidBlack;
  text-align: center;
  font-size: 94px;
  color: ${colors.golden_poppy};
  text-shadow: 3px 3px 10px ${colors.basic_black};
  
  @media (max-width: 700px) {
    font-size: 17vw;
  }
`;
