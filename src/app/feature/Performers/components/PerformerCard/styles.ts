import { colors } from 'app/shared/components/Colors';
import styled from 'styled-components';

export const PerformerCardDiv = styled.div`
  margin: 5px 10px;        
  padding: 5px;        
  background: none;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border: 2px outset ${colors.golden_poppy};
  border-radius: 5px;
`;

export {};
