import React from "react";

import TabLayout from "@enact/sandstone/TabLayout";
import { Tab } from "@enact/sandstone/TabLayout";
import Item from "@enact/sandstone/Item";
import { Header } from "@enact/sandstone/Panels";
import Icon from "@enact/sandstone/Icon";
import Button from "@enact/sandstone/Button";
import CheckBoxItem from "@enact/sandstone/CheckboxItem";
import Heading from "@enact/sandstone/Heading";
import Dropdown from "@enact/sandstone/Dropdown";

const Setting = () => {
  return (
    <div>
      <TabLayout orientation="horizontal">
        <Tab title="All Sleep">
          <Icon size={"large"}>plus</Icon>
          <Button>찾기 </Button>
          <div>
            <CheckBoxItem>세탁기</CheckBoxItem>
            <CheckBoxItem>스타일러</CheckBoxItem>
            <CheckBoxItem>건조기</CheckBoxItem>
            <CheckBoxItem>에어컨</CheckBoxItem>
          </div>
        </Tab>
        <Tab title="Video"></Tab>
        <Tab title="Alarm">
          <Heading spacing="large">Alarm</Heading>
          <Dropdown inline title="수면 시간">
            {[
              "30M",
              "1H",
              "1H 30M",
              "2H",
              "2H 30M",
              "3H",
              "3H 30M",
              "4H",
              "4H 30M",
              "5H",
              "5H 30M",
              "6H",
              "6H 30M",
              "7H",
              "7H 30M",
              "8H",
              "8H 30M",
              "9H",
              "9H 30M",
              "10H",
              "10H 30M",
              "11H",
              "11H 30M",
              "12H",
            ]}
          </Dropdown>
          <Dropdown inline title="알람 횟수">
            {["1회", "2회", "4회"]}
          </Dropdown>
          <div>
            <Button>저장</Button>
          </div>
        </Tab>
        <Tab title="CCTV">
          <div>
            <Dropdown inline title="저장 기간">
              {["3days(720p)", "1week(480p)", "3weeks(360p)"]}
            </Dropdown>
            <div>
              <Heading spacing="large">"Live CCTV"</Heading>
              <Button>Video</Button>
            </div>
          </div>
        </Tab>
      </TabLayout>
    </div>
  );
};

export default Setting;
