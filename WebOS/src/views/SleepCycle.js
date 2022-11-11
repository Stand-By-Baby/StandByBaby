import Button, { ButtonBase } from "@enact/ui/Button";
import React from "react";
import RadarChart from "../components/RadarChart";
import RadarData from "../Data/RadarData.js";
import RadarTheme from "../Data/RadarTheme.js";

import BodyText from "@enact/sandstone/BodyText";
import TabLayout from "@enact/sandstone/TabLayout";
import { Tab } from "@enact/sandstone/TabLayout";

const SleepCycle = () => {
  return (
    <div>
      <TabLayout orientation="horizontal">
        <Tab title="Sleep Status">
          <RadarChart data={RadarData} theme={RadarTheme} />
        </Tab>
        <Tab title="Sleep Time">
          <h1>dsf</h1>
        </Tab>
      </TabLayout>
    </div>
  );
};

export default SleepCycle;
