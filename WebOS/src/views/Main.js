import React, { useState } from "react";

import { Link } from "react-router-dom";

import TabLayout from "@enact/sandstone/TabLayout";
import { Tab } from "@enact/sandstone/TabLayout";
import { Header } from "@enact/sandstone/Panels";
import Button from "@enact/sandstone/Button";

import BabyMode from "./BabyMode";
import SleepCycle from "./SleepCycle";
import Setting from "./Setting";
import CCTV from "./CCTV";

import "../css/custom_skin.css";
import "../css/MainPanel.css";

import logo from "../../resources/sbb-logo.png";

const Main = () => {
  const [setting, setSetting] = useState({
    music: "",
    sleepTime: "",
    alarmTimes: "",
    saveRange: "",
  });

  function getSetting(params) {
    setSetting({
      music: params.music,
      sleepTime: params.sleepTime,
      alarmTimes: params.alarmTimes,
      saveRange: params.saveRange,
    });
  }

  return (
    <div className="sandstone-theme mainPanel">
      <div className="header-wrapper">
        <img src={logo}></img>
        <h1 className="header-title">Stand By Baby</h1>
        <Header className="header-prop"></Header>
      </div>

      <TabLayout>
        <Tab title="Baby Mode">
          <BabyMode setting={setting}></BabyMode>
          <Button>ddd</Button>
        </Tab>
        <Tab title="Sleep Cycle">
          <SleepCycle></SleepCycle>
        </Tab>
        <Tab title="Setting">
          <Setting setFunc={(setting) => getSetting(setting)}></Setting>
        </Tab>
        <Tab title="CCTV">
          <CCTV></CCTV>
        </Tab>
      </TabLayout>
    </div>
  );
};

export default Main;
