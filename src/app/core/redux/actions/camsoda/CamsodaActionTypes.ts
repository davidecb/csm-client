export const POST_CAMSODA = 'POST_CAMSODA';

interface PostCamsodaAction {
  type: typeof POST_CAMSODA;
  payload: {};
}

export type CamsodaActionTypes =
  | PostCamsodaAction;
