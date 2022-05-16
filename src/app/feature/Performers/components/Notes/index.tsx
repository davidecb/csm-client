import * as PropTypes from 'prop-types';
import * as React from 'react';
import { NotesContainer, Wrapper } from './styles';
import { ImClipboard } from 'react-icons/im';
import { NewNoteSingle } from '../NewNoteSingle';
import { Note } from '../../models/Note';
import { SingleNote } from '../SingleNote';
import { useState } from 'react';

interface NotesProps {
  performerName: string;
  performerId: string;
  role: string;
  blocked: boolean;
  notes: Note[];
  addNote: (newNote: Note) => void;
  deleteNote: (id: string) => void;
}

export const Notes: React.FC<NotesProps> = ({
  performerName,
  performerId,
  role,
  blocked,
  notes,
  addNote,
  deleteNote,
}) => {
  const [newNoteClicked, setNewNoteClicked] = useState(false);
  const newNoteHandler = () => {
    setNewNoteClicked(true);
  };

  return (
    <Wrapper blocked={blocked}>
      <div onClick={newNoteHandler}>
        <ImClipboard className="notesIcon" />
      </div>
      <NotesContainer>
        {notes.length > 0 &&
          notes.map((note, index: any) => (
            <SingleNote
              key={index}
              index={index}
              note={note}
              deleteNote={deleteNote}
            />
          ))}
        {notes.length === 0 && <span>Sin notas...</span>}
      </NotesContainer>
      {newNoteClicked && (
        <NewNoteSingle
          role={role}
          performerName={performerName}
          performerId={performerId}
          onSubmit={addNote}
          closeNote={() => setNewNoteClicked(false)}
        />
      )}
    </Wrapper>
  );
};

Notes.propTypes = {
  performerName: PropTypes.string.isRequired,
  performerId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  blocked: PropTypes.bool.isRequired,
  notes: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
