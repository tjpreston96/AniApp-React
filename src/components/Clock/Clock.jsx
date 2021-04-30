import React, { useState, useEffect } from "react";

const Clock = () => {
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
      <div className="time" style={{ textAlign: "center" }}>
        <h3>
          Today's Date: <br />
          {date} <br />
          {time}
        </h3>
      </div>
    </>
  );
};

export default Clock;
