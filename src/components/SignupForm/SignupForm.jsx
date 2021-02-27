import React, { useState } from "react";
import { Link } from "react-router-dom";

import userService from "../../services/userService";

const SignupForm = ({ history, handleSignupOrLogin, updateMessage }) => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const handleChange = (e) => {
    updateMessage("");
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(signupInfo);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(
      signupInfo.name &&
      signupInfo.email &&
      signupInfo.password &&
      signupInfo.password === signupInfo.passwordConf
    );
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={signupInfo.name}
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="email"
            value={signupInfo.email}
            name="email"
            onChange={handleChange}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            className="form-control"
            id="password"
            value={signupInfo.password}
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordConf">Confirm Password</label>
          <input
            type="password"
            autoComplete="off"
            className="form-control"
            id="confirm"
            value={signupInfo.passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button className="btn gold" disabled={isFormInvalid()}>
            Sign Up <i class="bi bi-box-arrow-in-right"></i>
          </button>
          &nbsp;&nbsp;
          <Link className="btn violet" to="/">
            Cancel <i class="bi bi-x-circle-fill"></i>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
