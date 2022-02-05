import { connect } from 'react-redux';

import SearchResults from './SearchResults.jsx';

import { arrivalsSelector } from '../../store/flights/selectors';
import { flightsActions } from '../../store/flights';

const mapState = state => ({
  flights: arrivalsSelector(state),
});

const mapDispatch = {
  getFlights: flightsActions.getFlights,
};

export default connect(mapState, mapDispatch)(SearchResults);
