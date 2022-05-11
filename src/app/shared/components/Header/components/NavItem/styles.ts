import { colors } from 'app/shared/components/Colors';
import styled from 'styled-components';

export const NavItemDiv = styled.div`
  margin: 5px;        
  background: ${colors.background};
  cursor: pointer;
  min-width: 25px;
  min-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {};
