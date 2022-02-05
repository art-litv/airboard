import { FLIGHTS_DATA_RECEIVED } from './actions';

const initialState = {
  flightsList: { departure: [], arrival: [] },
};

export default function flightsReducer(state = initialState, action) {
  switch (action.type) {
    case FLIGHTS_DATA_RECEIVED:
      return {
        ...state,
        flightsList: action.payload.flightsData,
      };
    default:
      return state;
  }
}
