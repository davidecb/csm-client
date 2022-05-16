import * as PropTypes from 'prop-types';
import * as React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import { Note } from '../../models/Note';
import { Wrapper } from './styles';

interface SingleNoteProps {
  note: Note;
  index: number;
  deleteNote: (id: string) => void;
}

export const SingleNote: React.FC<SingleNoteProps> = ({
  note,
  index,
  deleteNote,
}) => {
  const date = new Date(note.date);
  const handleDelete = () => {
    deleteNote(note._id || '');
  };
  return (
    <Wrapper>
      <div>
        {index + 1} - {note.type} ({date.toISOString().split('T')[0]})
      </div>
      <div onClick={handleDelete}>
        <MdOutlineDelete className="icon" />
      </div>
    </Wrapper>
  );
};

SingleNote.propTypes = {
  note: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
