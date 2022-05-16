import {
  LOGIN_SESSION,
  LOGOUT_SESSION,
  SET_END_DATE,
  SET_START_DATE,
  SessionActionTypes,
  VALIDATE_SESSION,
} from '../../actions/session/SessionActionTypes';
import { SessionState } from '../../models/SessionState';
import { getWeekStart } from 'app/shared/utils/formaters';

const initialState: SessionState = {
  session: {
    token: localStorage.getItem('jwtToken') || '',
    user: JSON.parse(localStorage.getItem('user') || '{}'),
  },
  startDate: getWeekStart(),
  endDate: new Date(),
};

export default function (
  state = initialState,
  action: SessionActionTypes
): SessionState {
  switch (action.type) {
    case LOGIN_SESSION: {
      const session = action.payload;
      return {
        ...state,
        session,
      };
    }

    case LOGOUT_SESSION: {
      const session = action.payload;
      return {
        ...state,
        session,
      };
    }

    case VALIDATE_SESSION: {
      const session = action.payload;
      return {
        ...state,
        session,
      };
    }

    case SET_START_DATE: {
      const startDate = action.payload;
      return {
        ...state,
        startDate,
      };
    }

    case SET_END_DATE: {
      const endDate = action.payload;
      return {
        ...state,
        endDate,
      };
    }

    default:
      return state;
  }
}
