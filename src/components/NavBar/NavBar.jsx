import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = ({ user, handleLogout }) => {
  let nav = user ? (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link className="navbar-brand" to="/">
          <b>AniApp</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Anime
              </Link>
              <div
                className="dropdown-menu bg-dark"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/anime/collection">
                  Collection
                </Link>
                <Link className="dropdown-item" to="/anime/search">
                  Add Anime
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Manga
              </Link>
              <div
                className="dropdown-menu bg-dark"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/manga/collection">
                  Collection
                </Link>
                <Link className="dropdown-item" to="/manga/search">
                  Add Manga
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={handleLogout}>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  ) : (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link className="navbar-brand" to="/">
          <b>AniApp</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );

  return nav;
};

export default NavBar;
