import React, { useState, useEffect } from "react";
import Clock from "../../components/Clock/Clock";
import "./Home.css";

const Home = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toDateString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toDateString());
    }, 1000);
  });
  return (
    <>
      <h1>Welcome to AniApp</h1>
      <Clock time={time} date={date} />
      <img
        src="https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif"
        className="welcomeImg"
        alt="pikachu"
      />
    </>
  );
};

export default Home;
