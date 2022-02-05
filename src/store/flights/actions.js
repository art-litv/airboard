export const FLIGHTS_DATA_RECEIVED = 'FLIGHTS/FLIGHTS_DATA_RECEIVED';

import FlightsAPI from '../../services/FlightsAPI';
import { parseFlightsData } from '../../utils/flights';

export const flightsDataReceived = flightsData => ({
  type: FLIGHTS_DATA_RECEIVED,
  payload: {
    flightsData,
  },
});

export const getFlights = date => async dispatch => {
  const rawFlightsData = await FlightsAPI.getFlights(date);
  const isError = rawFlightsData.error.code !== 200;
  if (!isError) {
    const flightsData = parseFlightsData(rawFlightsData.body);
    dispatch(flightsDataReceived(flightsData));
  } else {
    // TODO: Dispatch error action
  }
};
