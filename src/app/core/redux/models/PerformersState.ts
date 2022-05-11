import { Performer } from 'app/feature/Performers/models/Performer';
import { PerformerTotals } from 'app/feature/Performers/models/PerformerTotals';

export interface PerformersState {
  performers: Performer[] | undefined;
  performersTotals: PerformerTotals[] | undefined;
}
