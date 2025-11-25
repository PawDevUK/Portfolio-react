import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Navbar() {
  let { url } = useRouteMatch();

  return (
    <nav
      className='navbar navbar-dark navbar-expand-md'
      style={{ backgroundColor: '#E67E22' }}
    >
      <Link to={url} className='navbar-brand d-none d-md-block'>
        Fitness App
      </Link>
      <div className='collapse navbar-collapse' />
      <ul className='navbar-nav mr-auto'>
        <li className='navbar-item'>
          <Link to={url} className='nav-link'>
            Exercises
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to={`${url}/create`} className='nav-link'>
            Create Exercise Log
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to={`${url}/user`} className='nav-link'>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}
