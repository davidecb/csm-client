import { Note } from './Note';

interface PersonalInfo {
  performerName: string;
  location: string;
  performerShift: string;
  id: string;
}

interface Totals {
  total: number;
  camsoda?: number;
  imlive?: number;
  livejasmin?: number;
  streamate?: number;
  platfomrs?: object;
  locations?: object;
}

export interface PerformerTotals {
  personalInfo: PersonalInfo;
  time: Totals;
  earnings: Totals;
  notes: Note[];
}
