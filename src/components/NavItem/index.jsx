import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './nav-item.scss';

function NavItem({ link, active, children }) {
  return (
    <li className={classnames('nav-item', active ? 'nav-item_active' : '')}>
      <Link to={link} className="nav-item__link" target="_self">
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
