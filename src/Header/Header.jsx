import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import ProfilImg from '../asset/117.png';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [userRole, setUserRole] = useState('guide'); // 'guest', 'guide', 'client'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the token is present
    const token = localStorage.getItem('token'); // Example method to check token
    if (token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <header className='header'>
      <nav className="nav container">
        <Link to="/" className='nav__logo'>TripBuddy</Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            <li className="nav__item">
              <Link to="/" className='nav__link'>
                <i className="uil uil-estate nav__icon"></i>Home
              </Link>
            </li>
            {userRole === 'guide' && (
              <>
                <li className="nav__item">
                  <Link to="/my-trips" className='nav__link'>
                    <i className="uil uil-estate nav__icon"></i>My Trips
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/create-trip" className='nav__link'>
                    <i className="uil uil-estate nav__icon"></i>Create Trip
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/manage-bookings" className='nav__link'>
                    <i className="uil uil-estate nav__icon"></i>Manage Bookings
                  </Link>
                </li>
              </>
            )}
            {userRole === 'client' && (
              <>
                <li className="nav__item">
                  <Link to="/available-trips" className='nav__link'>
                    <i className="uil uil-estate nav__icon"></i>Available Trips
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/my-bookings" className='nav__link'>
                    <i className="uil uil-estate nav__icon"></i>My Bookings
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/find-buddy" className='nav__link'>
                    <i className="uil uil-estate nav__icon"></i>Find Travel Buddy
                  </Link>
                </li>
              </>
            )}
          </ul>
          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        {isLoggedIn ? (
          <div className="nav__profile">
            <input type="text" placeholder='Search' className='nav__search' />
            <img src={ProfilImg} alt="Profile" className='nav__profileImg'/>
          </div>
        ) : (
          <div className="nav__profile">
            <ul>
            <li className="nav__item">
              <Link to="/login" className='nav__link navLogin'>
                <i className="uil uil-estate nav__icon"></i>Login
              </Link>
            </li>
            </ul>
            <button className='Button Button--flex signButton'>Sign up</button>
          </div>
        )}

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;