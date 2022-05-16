export const POST_NOTE = 'POST_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

interface PostNoteAction {
  type: typeof POST_NOTE;
  payload: {};
}

interface DeleteNoteAction {
  type: typeof DELETE_NOTE;
  payload: {};
}

export type NoteActionTypes = DeleteNoteAction | PostNoteAction;
