import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// Services
import userService from "../../services/userService";
import tokenService from "../../services/tokenService";
// Utility Components
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import ForgotPasswordPage from "../ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../ResetPasswordPage/ResetPasswordPage";
// Components
import NavBar from "../../components/NavBar/NavBar";
import Home from "../../components/Home/Home";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import ResultItemDetail from "../../components/ResultItemDetail/ResultItemDetail";
import Profile from "../../components/Profile/Profile";
import Users from "../../components/Users/Users";
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
      <NavBar user={user} handleLogout={handleLogout} />
      <Route
        exact
        path="/"
        render={({ history }) => (
          <>
            <Home />
          </>
        )}
      ></Route>
      <Route
        exact
        path="/users"
        render={({ history }) => (
          <>
            <Users user={user} />
          </>
        )}
      ></Route>
      <Route
        exact
        path="/profile"
        render={({ history }) => (
          <>
            <Profile user={user} />
          </>
        )}
      ></Route>

      <Route
        exact
        path="/anime/collection"
        render={({ history }) => (
          <>
            <Home />
          </>
        )}
      ></Route>
      <Route
        exact
        path="/:category/search"
        render={({ history }) => (
          <>
            <SearchBar setResults={setResults} />
            <ResultsList results={results} setResults={setResults} />
          </>
        )}
      ></Route>
      <Route
        exact
        path="/:category/details/:slug"
        render={({ history }) => (
          <>
            <ResultItemDetail history={history} user={user} />
          </>
        )}
      ></Route>
      <Route
        exact
        path="/manga/collection"
        render={({ history }) => (
          <>
            <Home />
          </>
        )}
      ></Route>

      <Switch>
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <>
              <LoginPage
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
                determineError={determineError}
              />
            </>
          )}
        ></Route>

        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <>
              <SignupPage
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
                determineError={determineError}
              />
            </>
          )}
        ></Route>

        <Route
          exact
          path="/forgot"
          render={() => (
            <>
              <ForgotPasswordPage determineError={determineError} />
            </>
          )}
        ></Route>

        <Route
          path="/resetpassword/:token"
          render={() => (
            <>
              <ResetPasswordPage determineError={determineError} />
            </>
          )}
        ></Route>
        <Route path="*"></Route>
      </Switch>
    </>
  );
};

export default App;
