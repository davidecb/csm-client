import { combineReducers } from 'redux';
import performers from './performers/performersReductor';
import session from './session/sessionReductor';

export default combineReducers({ session, performers });
