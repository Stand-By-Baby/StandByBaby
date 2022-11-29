import React from "react";

import "../css/CountDown.css";

const CountDown = () => {
  const countdown = () => {
    const countDate = new Date("May 17, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor(gap % day);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
  };
  return (
    <div>
      <div class="countdown">
        <div className="container-day">
          <h3 className="day">Time</h3>
          <h3>Day</h3>
        </div>
        <div className="container-hour">
          <h3 className="hour">Time</h3>
          <h3>Hour</h3>
        </div>
        <div className="container-minute">
          <h3 className="minute">Time</h3>
          <h3>Minute</h3>
        </div>
        <div className="container-second">
          <h3 className="day">Time</h3>
          <h3>Second</h3>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
