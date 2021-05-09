import React from "react";

const Clock = ({ time, date }) => {
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
