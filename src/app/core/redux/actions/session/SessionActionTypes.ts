import { Session } from 'app/feature/Login/models/Session';

export const LOGIN_SESSION = 'LOGIN_SESSION';
export const LOGOUT_SESSION = 'LOGOUT_SESSION';
export const VALIDATE_SESSION = 'VALIDATE_SESSION';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';

interface LoginSessionAction {
  type: typeof LOGIN_SESSION;
  payload: Session;
}

interface LogoutSessionAction {
  type: typeof LOGOUT_SESSION;
  payload: Session
}

interface ValidateSessionAction {
  type: typeof VALIDATE_SESSION;
  payload: Session
}

interface SetStartDateAction {
  type: typeof SET_START_DATE;
  payload: Date
}

interface SetEndDateAction {
  type: typeof SET_END_DATE;
  payload: Date
}

export type SessionActionTypes =
  | LoginSessionAction
  | ValidateSessionAction
  | LogoutSessionAction
  | SetStartDateAction
  | SetEndDateAction;
