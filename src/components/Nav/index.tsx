import React from 'react';
import { NavLink } from 'react-router-dom';
import routes, { NavItem } from './routes';
import './index.scss';

/**
 * This is a top-level component, though it doesn't qualify as a scene.
 * Stowing it in the 'components/' folder for now,
 * but at a later point, it might be good to revisit the folder structure
 * and separate 'components' from 'containers'
 */
const Nav = ({ items = routes }: { items?: NavItem[] }) => (
  <nav className="nav">
    <ul className="nav__list">
      {items.map(({ path, text }) => (
        <li key={`key__${path}`} className="nav__list-item">
          <NavLink
            to={path}
            activeClassName="nav__list-link--selected"
            className="nav__list-link"
            isActive={(match, location) => {
              if (!match) return false;
              return location.pathname === path;
            }}
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
