import React from "react";
import Clock from "../Clock/Clock";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>Welcome to AniApp</h1>
      <Clock />
      <img
        src="https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif"
        className="welcomeImg"
        alt="pikachu"
      />
    </>
  );
};

export default Home;
