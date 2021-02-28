import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// Utility Components
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import ForgotPasswordPage from "../ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../ResetPasswordPage/ResetPasswordPage";
// Services
import userService from "../../services/userService";
import tokenService from "../../services/tokenService";
// Components
import NavBar from "../../components/NavBar/NavBar";
import Home from "../../components/Home/Home";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
// CSS
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");
  const [results, setResults] = useState([]);
  const [indResult, setIndResult] = useState([])
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
        path="/anime"
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
            <ResultsList results={results} setResults={setResults} setIndResult={setIndResult}/>
          </>
        )}
      ></Route>
      <Route
        exact
        path="/manga"
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
