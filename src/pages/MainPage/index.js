import React from 'react';
import { Outlet } from 'react-router-dom';

import useEffectRedirect from '../../utils/hooks/useEffectRedirect';

import './main-page.scss';

import SearchForm from '../../components/SearchForm';

function MainPage() {
  useEffectRedirect('/departures', '/');

  return (
    <div className="main-page">
      <SearchForm className="main-page__search-form" />
      <Outlet />
    </div>
  );
}

export default MainPage;
