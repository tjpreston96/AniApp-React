import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = ({ user, handleLogout }) => {
  let nav = user ? (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link class="navbar-brand" to="/">
          <b>AniApp</b>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
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
                class="dropdown-menu bg-dark "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link class="dropdown-item" to="/anime">
                  Anime List
                </Link>
                <Link class="dropdown-item" to="/anime/search">
                  Add Anime
                </Link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
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
                class="dropdown-menu bg-dark"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link class="dropdown-item" to="/Linknime">
                  Manga List
                </Link>
                <Link class="dropdown-item" to="/manga/search">
                  Add Manga
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">
                Profile
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="#">
                Users
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#" onClick={handleLogout}>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  ) : (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link class="navbar-brand" to="/">
          <b>AniApp</b>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Log In
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signup">
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
