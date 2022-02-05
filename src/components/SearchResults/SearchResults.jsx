import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import classnames from 'classnames';

import './search-results.scss';

import NavTabs from '../NavTabs';
import Table from '../Table';

import { getColumns } from '../../utils/flightTableUtils';
import { searchFlights, sortByTime } from '../../utils/flights';
import { getCurrentDateString } from '../../utils/dateUtils';

function SearchResults({ flights, getFlights, className }) {
  const [params] = useSearchParams();
  const searchParam = params.get('search')?.toLowerCase();

  useEffect(() => {
    getFlights(getCurrentDateString());
  }, []);

  const filteredFlights = sortByTime(searchFlights(flights, searchParam || ''));

  return (
    <div className={classnames('search-results', className)}>
      <NavTabs />
      {filteredFlights.length ? (
        <Table
          className="search-results__results-table"
          data={filteredFlights}
          columns={getColumns()}
        />
      ) : (
        searchParam && <p className="search-results__not-found">No flights</p>
      )}
    </div>
  );
}

export default SearchResults;
