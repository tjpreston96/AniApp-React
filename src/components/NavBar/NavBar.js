import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = ({ user, handleLogout }) => {
  let nav = user ? (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
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
                class="dropdown-menu"
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
          </ul>
        </div>
      </nav>
      <nav className="nav-bar">
        <div className="nav-wrapper">
          <ul className="right">
            <li>
              <Link to={`/user/${user._id}`}>Welcome, {user.name}</Link>
            </li>
            <li>
              <Link to=" " onClick={handleLogout}>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  ) : (
    <>
      <nav className="nav-bar">
        <div className="nav-wrapper">
          <ul className="right">
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );

  return nav;
};

export default NavBar;
