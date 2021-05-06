import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// Services
import userService from "../../services/userService";
import tokenService from "../../services/tokenService";
// Utility Pages
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import ForgotPasswordPage from "../ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../ResetPasswordPage/ResetPasswordPage";
// Components
import NavBar from "../../components/NavBar/NavBar";
import Home from "../../components/Home/Home";
import SearchPage from "../../pages/SearchPage/SearchPage";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import ResultItemDetail from "../../components/ResultItemDetail/ResultItemDetail";
import Profile from "../../components/Profile/Profile";
import Users from "../../components/Users/Users";
import AnimeCollection from "../../components/AnimeCollection/AnimeCollection";
import MangaCollection from "../../components/MangaCollection/MangaCollection";
// CSS
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setUser(tokenService.getUserFromToken());
  }, []);

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  const determineError = (msg) => {
    if (msg.includes("Error")) return "red-text";
    return "green-text";
  };

  return (
    <>
      {/* Static Nav */}
      <NavBar user={user} handleLogout={handleLogout} />

      {/* ---- Home ---- */}
      <Route exact path="/" render={() => <Home />}></Route>

      {/* ---- Users ---- */}
      <Route
        exact
        path="/users"
        render={() => (user ? <Users user={user} /> : <Redirect to="/login" />)}
      ></Route>

      {/* ---- Profile Page ---- */}
      <Route
        exact
        path="/profile"
        render={() =>
          user ? <Profile user={user} /> : <Redirect to="/login" />
        }
      ></Route>

      {/* ---- Anime Collection ---- */}
      <Route
        exact
        path="/anime/collection"
        render={() =>
          user ? <AnimeCollection user={user} /> : <Redirect to="/login" />
        }
      ></Route>

      {/* ---- Search Page (Manga & Anime) ---- */}
      <Route
        exact
        path="/:category/search"
        render={() => (user ? <SearchPage /> : <Redirect to="/login" />)}
      ></Route>

      {/* ---- Results (Detail Page) ----  */}
      <Route
        exact
        path="/:category/details/:slug"
        render={() =>
          user ? <ResultItemDetail user={user} /> : <Redirect to="/login" />
        }
      ></Route>

      {/* ---- Manga Collection ---- */}
      <Route
        exact
        path="/manga/collection"
        render={() => (user ? <MangaCollection /> : <Redirect to="/login" />)}
      ></Route>

      {/* ---- Switch for Utility Pages ---- */}
      <Switch>
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <LoginPage
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
              determineError={determineError}
            />
          )}
        ></Route>

        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignupPage
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
              determineError={determineError}
            />
          )}
        ></Route>

        <Route
          exact
          path="/forgot"
          render={() => <ForgotPasswordPage determineError={determineError} />}
        ></Route>

        <Route
          path="/resetpassword/:token"
          render={() => <ResetPasswordPage determineError={determineError} />}
        ></Route>
        <Route path="*"></Route>
      </Switch>
    </>
  );
};

export default App;
