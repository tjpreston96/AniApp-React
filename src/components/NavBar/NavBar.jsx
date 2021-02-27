import React from "react";

import "./NavBar.css";

const NavBar = ({ user, handleLogout }) => {
  let nav = user ? (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="/">
          <b>AniApp</b>
        </a>
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
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Anime
              </a>
              <div
                class="dropdown-menu bg-dark "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="/anime">
                  Anime List
                </a>
                <a class="dropdown-item" href="#">
                  Add Anime
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Manga
              </a>
              <div
                class="dropdown-menu bg-dark"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="/anime">
                  Manga List
                </a>
                <a class="dropdown-item" href="#">
                  Add Manga
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Users
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={handleLogout}>
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  ) : (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="/">
          <b>AniApp</b>
        </a>
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
              <a class="nav-link" href="/login">
                Log In
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );

  return nav;
};

export default NavBar;
