export const POST_STREAMATE = 'POST_STREAMATE';

interface PostStreamateAction {
  type: typeof POST_STREAMATE;
  payload: {};
}

export type StreamateActionTypes =
  | PostStreamateAction;
