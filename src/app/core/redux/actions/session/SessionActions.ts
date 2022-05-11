import {
  LOGIN_SESSION,
  LOGOUT_SESSION,
  SET_END_DATE,
  SET_START_DATE,
  SessionActionTypes,
  VALIDATE_SESSION
} from './SessionActionTypes';
import { Login } from 'app/feature/Login/models/Login';
import { Session } from 'app/feature/Login/models/Session';
import { SessionRepository } from 'app/core/api/session.repository';

export function loginSession(
  session: Session,
): SessionActionTypes {
  return {
    type: LOGIN_SESSION,
    payload: session,
  };
}

export function logoutSession(
  session: Session,
): SessionActionTypes {
  return {
    type: LOGOUT_SESSION,
    payload: session,
  };
}

export function validateSession(
  session: Session,
): SessionActionTypes {
  return {
    type: VALIDATE_SESSION,
    payload: session,
  };
}

export function setStartDate(
  date: Date,
): SessionActionTypes {
  return {
    type: SET_START_DATE,
    payload: date,
  };
}

export function setEndDate(
  date: Date,
): SessionActionTypes {
  return {
    type: SET_END_DATE,
    payload: date,
  };
}

export function loginSessionAsync(login: Login) {
  return async function (dispacth: any) {
    return SessionRepository.login(login).then((session: Session) => {
        dispacth(
          loginSession(session)
        );
        return session;
      });
  };
}

export function logoutSessionAsync(session: Session) {
  return function (dispacth: any) {
    SessionRepository.logout(session).then((EmptySession: Session) =>
      dispacth(
        logoutSession(EmptySession)
      )
    );
  };
}

export function validateSessionAsync(session: Session){
  return async function (dispacth: any) {
    return SessionRepository.validate(session).then((validatedSession: Session) => {
      dispacth(
        validateSession(validatedSession)
      );
      return true;
    }).catch((err) => false);
  };
}

export function setStartDateAsync(date: Date){
  return function (dispacth: any) {
      dispacth(
        setStartDate(date)
      );
  };
}

export function setEndDateAsync(date: Date){
  return function (dispacth: any) {
      dispacth(
        setEndDate(date)
      );
  };
}
