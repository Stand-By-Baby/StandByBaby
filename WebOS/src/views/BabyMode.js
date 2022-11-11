import React from "react";

import TabLayout from "@enact/sandstone/TabLayout";
import { Tab } from "@enact/sandstone/TabLayout";
import Switch from "@enact/sandstone/Switch";

import babymode from "../../resources/baby-mode.png";

import "../css/BabyMode.css";

const BabyMode = () => {
  return (
    <TabLayout orientation="horizontal">
      <Tab title="BabyMode">
        <div className="baby-mode">
          <div className="baby-mode-img">
            <img src={babymode} />
          </div>
          <div className="baby-mode-toggle">
            <Switch></Switch>
          </div>
        </div>
      </Tab>
    </TabLayout>
  );
};

export default BabyMode;
