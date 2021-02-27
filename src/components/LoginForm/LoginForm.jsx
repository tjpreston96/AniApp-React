import React, { useState } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/userService";

const LoginForm = ({ history, handleSignupOrLogin, updateMessage }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    updateMessage("");
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(loginInfo);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
          <div className="form-group">

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={loginInfo.email}
          name="email"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
        <small id="emailHelp" class="form-text text-muted">
          Please <em>DON'T</em> share your email or password with others.
        </small>
          </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            className="form-control"
            id="password"
            value={loginInfo.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="btn gold" type="submit">
          Log In
          <i class="bi bi-box-arrow-in-right"></i>
        </button>
        &nbsp;&nbsp;&nbsp;
        <Link className="btn violet" to="/">
          Cancel <i class="bi bi-x-circle-fill"></i>
        </Link>
      </form>

      <Link to="/forgot" style={{ color: "#DFDFDF" }}>
        Forgot Password <i class="bi bi-question-circle"></i>
      </Link>
    </div>
  );
};

export default LoginForm;
