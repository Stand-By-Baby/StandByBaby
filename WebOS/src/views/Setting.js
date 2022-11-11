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
import Switch from "@enact/sandstone/Switch";
import BodyText from "@enact/sandstone/BodyText";

import "../css/Setting.css";

import logo from "../../resources/lg-thinq-logo.png";

const Setting = () => {
  return (
    <div className="setting">
      <TabLayout orientation="horizontal">
        <Tab title="All-sleep">
          <div className="all-sleep-header">
            <div className="all-sleep-title">
              <img src={logo}></img>
              <span className="all-sleep-title-text">LG ThinQ</span>
              <Button>찾기 </Button>
            </div>
          </div>
          <div className="switch">
            <div className="switch-line">
              <div className="switch-block">
                <BodyText className="switch-text">세탁기</BodyText>
                <Switch className="switch-control"></Switch>
              </div>
              <div className="switch-block">
                <BodyText className="switch-text">스타일러</BodyText>
                <Switch className="switch-control"></Switch>
              </div>
            </div>
            <div className="switch-line">
              <div className="switch-block">
                <BodyText className="switch-text">건조기</BodyText>
                <Switch className="switch-control"></Switch>
              </div>
              <div className="switch-block">
                <BodyText className="switch-text">에어컨</BodyText>
                <Switch className="switch-control"></Switch>
              </div>
            </div>
            <div className="switch-line">
              <div className="switch-block">
                <BodyText className="switch-text">식기체척기</BodyText>
                <Switch className="switch-control"></Switch>
              </div>
              <div className="switch-block">
                <BodyText className="switch-text">TV</BodyText>
                <Switch className="switch-control"></Switch>
              </div>
            </div>
            <div className="switch-line">
              <div className="switch-block">
                <BodyText className="switch-text">로봇청소기</BodyText>
                <Switch className="switch-control"></Switch>
              </div>
              <div className="switch-block">
                <BodyText className="switch-text">PC</BodyText>
                <Switch className="switch-control"></Switch>
              </div>
            </div>
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
