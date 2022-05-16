import { DELETE_NOTE, NoteActionTypes, POST_NOTE } from './NoteActionTypes';
import { Note } from 'app/feature/Performers/models/Note';
import { NoteRepository } from 'app/core/api/note.repository';
import { Session } from 'app/feature/Login/models/Session';

export function postNote(): NoteActionTypes {
  return {
    type: POST_NOTE,
    payload: {},
  };
}

export function deleteNote(): NoteActionTypes {
  return {
    type: DELETE_NOTE,
    payload: {},
  };
}

export function postNoteAsync(note: Note, session: Session) {
  return function (dispacth: any) {
    return NoteRepository.postNote(note, session).then(dispacth(postNote()));
  };
}

export function deleteNoteAsync(id: string, session: Session) {
  return function (dispacth: any) {
    return NoteRepository.deleteNote(id, session).then(dispacth(deleteNote()));
  };
}
