import {
  ADD_PLATFORM_NAME,
  GET_PERFORMERS,
  GET_TOTALS,
} from './../performers/PerformersActionTypes';
import { Performer } from 'app/feature/Performers/models/Performer';
import { PerformerTotals } from 'app/feature/Performers/models/PerformerTotals';
import { PerformersActionTypes } from './PerformersActionTypes';
import { PerformersRepository } from 'app/core/api/performers.repository';
import { Session } from 'app/feature/Login/models/Session';

export function getPerformers(performers: Performer[]): PerformersActionTypes {
  return {
    type: GET_PERFORMERS,
    payload: performers,
  };
}

export function getPerformersTotals(
  performersTotals: PerformerTotals[]
): PerformersActionTypes {
  return {
    type: GET_TOTALS,
    payload: performersTotals,
  };
}

export function addPlatformName(): PerformersActionTypes {
  return {
    type: ADD_PLATFORM_NAME,
    payload: {},
  };
}

export function getPerformersAsync(session: Session) {
  return function (dispacth: any) {
    PerformersRepository.getPerformers(session).then(
      (performers: Performer[]) => {
        dispacth(getPerformers(performers));
        return [];
      }
    );
  };
}

export function getPerformersTotalsAsync(
  session: Session,
  startDate: Date,
  endDate: Date
): any {
  return function (dispacth: any): any {
    return PerformersRepository.getPerformersTotals(
      session,
      startDate,
      endDate
    ).then((performersTotals: PerformerTotals[]) => {
      dispacth(getPerformersTotals(performersTotals));
      return performersTotals;
    });
  };
}

export function addPlatformNameAsync(
  session: Session,
  id: string,
  platformName: string
) {
  return function (dispacth: any) {
    PerformersRepository.addPlatformName(session, id, platformName).then(
      dispacth(addPlatformName())
    );
  };
}
