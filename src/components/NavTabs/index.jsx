import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import './nav-tabs.scss';

import { getFlightsType } from '../../utils/urlUtils';

import NavItem from '../NavItem';

function NavTabs() {
  const [params] = useSearchParams();
  const url = useLocation().pathname;

  const flightsType = getFlightsType(url);

  return (
    <ul className="nav-tabs">
      <NavItem link={`/departures/?${params.toString()}`} active={flightsType === 'departure'}>
        <i className="nav-item__icon fas fa-plane-departure"></i>
        {'Departures'}
      </NavItem>
      <NavItem link={`/arrivals/?${params.toString()}`} active={flightsType === 'arrival'}>
        <i className="nav-item__icon fas fa-plane-departure"></i>
        {'Arrivals'}
      </NavItem>
    </ul>
  );
}

export default NavTabs;
