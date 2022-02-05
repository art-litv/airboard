const ROUTES_FLIGHTS_TYPE = {
  arrivals: 'arrival',
  departures: 'departure',
};

export const getFlightsType = url => ROUTES_FLIGHTS_TYPE[url.replaceAll('/', '')];
