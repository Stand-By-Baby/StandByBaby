import Button, { ButtonBase } from "@enact/ui/Button";
import React from "react";
import RadarChart from "../components/RadarChart";
import RadarData from "../Data/RadarData.js";

import BodyText from "@enact/sandstone/BodyText";
import TabLayout from "@enact/sandstone/TabLayout";
import { Tab } from "@enact/sandstone/TabLayout";
import Scroller from "@enact/sandstone/Scroller";

import "../css/SleepCycle.css";

const SleepCycle = () => {
  return (
    <div>
      <TabLayout orientation="horizontal">
        <Tab title="Sleep Status">
          <Scroller>
            <div className="wrapper">
              <div className="radarchart">
                <RadarChart />
              </div>
            </div>
          </Scroller>
        </Tab>
        <Tab title="Sleep Time">
          <h1>dsf</h1>
        </Tab>
      </TabLayout>
    </div>
  );
};

export default SleepCycle;
