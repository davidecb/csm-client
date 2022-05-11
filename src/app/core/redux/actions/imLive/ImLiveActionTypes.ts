export const POST_IMLIVE = 'POST_IMLIVE';

interface PostImLiveAction {
  type: typeof POST_IMLIVE;
  payload: {};
}

export type ImLiveActionTypes =
  | PostImLiveAction;
