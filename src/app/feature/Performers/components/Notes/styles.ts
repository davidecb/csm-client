import { colors } from 'app/shared/components/Colors';
import styled from 'styled-components';

export const Wrapper = styled.div.attrs((props) => {})`
  padding: 8px;
  width: 30%;
  background: none;
  color: ${colors.golden_poppy};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  pointer-events: ${({ blocked }) => (blocked ? 'none' : 'all')};

  .notesIcon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

export const NotesContainer = styled.div`
  width: 100%;
  max-height: 70px;
  background: none;
  overflow: auto;
  color: ${colors.golden_poppy};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
