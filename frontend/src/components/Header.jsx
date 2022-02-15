import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src="/images/logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Rk Bajaj"
            />
            Rk Bajaj
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ml-auto"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <li className="nav-item">
                <NavLink className="nav-link" to="/support">
                  <i className="fa-solid fa-headset"></i> Support
                </NavLink>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">
                      <i class="fa-solid fa-user"></i> {user.name}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => dispatch(logout())}
                      className="btn btn-secondary btn-sm"
                    >
                      <i class="fa-solid fa-right-from-bracket"></i> Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      <i className="fa-solid fa-user-plus"></i> Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      <i className="fa-solid fa-right-to-bracket"></i> Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
