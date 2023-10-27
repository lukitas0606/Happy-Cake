import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook, faCakeCandles } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className='link'>
          <FontAwesomeIcon icon={faHouse} />
          Home
          </Link>
        </li>
        <li>
          <Link to="/contacto" className='link'>
          <FontAwesomeIcon icon={faBook} />
          Contacto
          </Link>
        </li>
        <li>
          <Link to="/" className='link2'>
          <FontAwesomeIcon icon={faCakeCandles} />
          Happy Cake
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;