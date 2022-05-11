import { ADD_PLATFORM_NAME, GET_PERFORMERS, GET_TOTALS, PerformersActionTypes } from '../../actions/performers/PerformersActionTypes';
import { PerformersState } from '../../models/PerformersState';

const initialState: PerformersState = {
  performers: undefined,
  performersTotals: undefined,
};

export default function (
  state = initialState,
  action: PerformersActionTypes
): PerformersState {
  switch (action.type) {
    case GET_PERFORMERS: {
      const performers = action.payload;      
      return {
        ...state,
        performers,
      };
    }

    case GET_TOTALS: {
      const performersTotals = action.payload;      
      return {
        ...state,
        performersTotals,
      };
    }

    case ADD_PLATFORM_NAME: {           
      return state;
    }

    default:
      return state;
  }
}
