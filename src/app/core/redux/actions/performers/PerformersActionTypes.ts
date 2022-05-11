import { Performer } from 'app/feature/Performers/models/Performer';
import { PerformerTotals } from 'app/feature/Performers/models/PerformerTotals';

export const GET_PERFORMERS = 'GET_PERFORMERS';
export const GET_TOTALS = 'GET_TOTALS';
export const ADD_PLATFORM_NAME = 'ADD_PLATFORM_NAME';

interface GetPerformersAction {
  type: typeof GET_PERFORMERS;
  payload: Performer[];
}

interface GetPerformersTotalsAction {
  type: typeof GET_TOTALS;
  payload: PerformerTotals[];
}

interface AddPlatformNameAction {
  type: typeof ADD_PLATFORM_NAME;
  payload: {};
}

export type PerformersActionTypes =
  | GetPerformersAction
  | GetPerformersTotalsAction
  | AddPlatformNameAction;
