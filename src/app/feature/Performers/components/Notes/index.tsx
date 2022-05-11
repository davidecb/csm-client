import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ImClipboard } from 'react-icons/im';
import { Wrapper } from './styles';

interface NotesProps {
  
}

export const Notes: React.FC<NotesProps> = () => {
  const notes: any = [];
  
  return (
    <Wrapper>
      <div className="earndReports__notes notes">
        <div className="notes__notesIcon iconContainer">
          <ImClipboard className='notesIcon' />
        </div>
        <div className="notes__notesListContainer notesListContainer">
          {   
            notes.length > 0 && <ul className="notesListContainer__notesList">
              {
                notes.map((note: { note: String }, index: any) => (
                  <li key={index}>{note.note}</li>    
                ))
              }
            </ul> 
          }
          {notes.length === 0 && <span className="notesListContainer__noNotes">Sin notas...</span>}  
        </div>
      </div> 
    </Wrapper>
  );
};

Notes.propTypes = {
  
};
