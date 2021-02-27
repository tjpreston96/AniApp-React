import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";

import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import ForgotPasswordPage from "../ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../ResetPasswordPage/ResetPasswordPage";

import userService from "../../services/userService";
import tokenService from "../../services/tokenService";
import Clock from "../../components/Clock/Clock";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");
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
            <h1>Welcome to AniApp</h1>
            <Clock />
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
      </Switch>
    </>
  );
};

export default App;
