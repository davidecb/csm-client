import { PerformersState } from './PerformersState';
import { SessionState } from './SessionState';

export interface GeneralState {
  session: SessionState;
  performers: PerformersState;
}
