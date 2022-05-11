import { Session } from 'app/feature/Login/models/Session';

export interface SessionState {
  session: Session;
  startDate: Date;
  endDate: Date;
}
