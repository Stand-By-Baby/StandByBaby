import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import TabLayout from "@enact/sandstone/TabLayout";
import { Tab } from "@enact/sandstone/TabLayout";
import Switch from "@enact/sandstone/Switch";

import babymode from "../../resources/baby-mode.png";

import "../css/BabyMode.css";
import CountDown from "../components/CountDown";

const BabyMode = (props) => {
  return (
    <TabLayout orientation="horizontal">
      <Tab title="BabyMode">
        <div className="baby-mode">
          {console.log(props.setting)}
          <CountdownCircleTimer
            isPlaying
            duration={7}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
          <CountDown />
          <div className="baby-mode-toggle">{/* <Switch></Switch> */}</div>
        </div>
      </Tab>
    </TabLayout>
  );
};

export default BabyMode;
