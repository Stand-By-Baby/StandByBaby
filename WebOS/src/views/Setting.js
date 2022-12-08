import React, { useState } from "react";

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
import ThinQData from "../Data/ThinQData";
import CircularProgress from "@mui/material/CircularProgress";

const Setting = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [music, setMusic] = useState({
    data: "",
    selected: "",
  });
  const [sleepTime, setSleepTime] = useState({
    data: "",
    selected: "",
  });
  const [alarmTimes, setAlarmTimes] = useState({
    data: "",
    selected: "",
  });
  const [saveRange, setSaveRange] = useState({
    data: "",
    selected: "",
  });
  const [sel1, setSel1] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleClick = async (event) => {
    console.log("start");

    setIsLoading(true);
    setMessage("정보를 읽어오고 있습니다.");
    await sleep(3000);
    setIsLoading(false);
    setSel1(true);

    setMessage("가전이 연결되었습니다.");

    console.log("end");
  };

  const handleSleepTime = (data) => {
    setSleepTime({
      data: data.data,
      selected: data.selected,
    });
  };

  const handleAlarmTimes = (data) => {
    setAlarmTimes({
      data: data.data,
      selected: data.selected,
    });
  };

  const handleSaveRange = (data) => {
    setSaveRange({
      data: data.data,
      selected: data.selected,
    });
  };

  const handleMusic = (data) => {
    setMusic({
      data: data.data,
      selected: data.selected,
    });
  };

  const handleSaveClick = () => {
    props.setFunc({
      music: music.data,
      sleepTime: sleepTime.data,
      alarmTimes: alarmTimes.data,
      saveRange: saveRange.data,
    });
  };

  return (
    <div className="setting">
      <TabLayout orientation="horizontal">
        <Tab title="All-sleep">
          <div className="all-sleep-header">
            <div className="all-sleep-title">
              <img src={logo}></img>
              <span className="all-sleep-title-text">LG ThinQ</span>
              <Button onClick={handleClick}>찾기 </Button>
              <span>{message}</span>
              {isLoading ? <CircularProgress sx={{ width: 1000 }} /> : ""}
            </div>
          </div>
          <div className="switch">
            <div className="switch-line">
              <div className="switch-block">
                <BodyText className="switch-text">{ThinQData[0].fir}</BodyText>
                <Switch selected={sel1} className="switch-control"></Switch>
              </div>
              <div className="switch-block">
                <BodyText className="switch-text">{ThinQData[0].sec}</BodyText>
                <Switch selected={false} className="switch-control"></Switch>
              </div>
            </div>
            <div className="switch-line">
              <div className="switch-block">
                <BodyText className="switch-text">{ThinQData[1].fir}</BodyText>
                <Switch selected={false} className="switch-control"></Switch>
              </div>
              <div className="switch-block">
                <BodyText className="switch-text">{ThinQData[1].sec}</BodyText>
                <Switch selected={sel1} className="switch-control"></Switch>
              </div>
            </div>
            <div className="switch-line">
              <div className="switch-block">
                <BodyText className="switch-text">{ThinQData[2].fir}</BodyText>
                <Switch selected={false} className="switch-control"></Switch>
              </div>
              <div className="switch-block">
                <BodyText className="switch-text">{ThinQData[2].sec}</BodyText>
                <Switch selected={sel1} className="switch-control"></Switch>
              </div>
            </div>
            <div className="switch-line">
              <div className="switch-block">
                <BodyText className="switch-text">{ThinQData[3].fir}</BodyText>
                <Switch selected={false} className="switch-control"></Switch>
              </div>
              <div className="switch-block">
                <BodyText className="switch-text">{ThinQData[3].sec}</BodyText>
                <Switch selected={false} className="switch-control"></Switch>
              </div>
            </div>
          </div>
        </Tab>

        <Tab title="Video">
          <TabLayout orientation="horizontal">
            <Tab title="동요">
              <div className="alarm">
                <div className="alarm-header">
                  <Dropdown
                    selected={Number(music.selected)}
                    onSelect={(data) => handleMusic(data)}
                    title="동요"
                  >
                    {["곰 세 마리", "산토끼", "나비야 나비야"]}
                  </Dropdown>
                </div>
                <div className="alarm-btn">
                  <Button onClick={handleSaveClick}>저장</Button>
                </div>
              </div>
            </Tab>
            <Tab title="클래식">
              <div className="alarm">
                <div className="alarm-header">
                  <Dropdown
                    selected={Number(music.selected)}
                    onSelect={(data) => handleMusic(data)}
                    title="클래식"
                  >
                    {["Prelude", "PianoSonata", "WaltzOfTheFlowers"]}
                  </Dropdown>
                </div>
                <div className="alarm-btn">
                  <Button onClick={handleSaveClick}>저장</Button>
                </div>
              </div>
            </Tab>
          </TabLayout>
        </Tab>

        <Tab title="Alarm">
          <div className="alarm">
            <div className="alarm-header">
              <Dropdown
                selected={Number(sleepTime.selected)}
                onSelect={(data) => handleSleepTime(data)}
                title="수면 시간"
              >
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
              <Dropdown
                selected={Number(alarmTimes.selected)}
                onSelect={(data) => handleAlarmTimes(data)}
                title="알람 횟수"
              >
                {["1회", "2회", "4회"]}
              </Dropdown>
            </div>
            <div className="alarm-btn">
              <Button onClick={handleSaveClick}>저장</Button>
            </div>
          </div>
        </Tab>

        <Tab title="CCTV">
          <div className="cctv">
            <div className="cctv-header">
              <Dropdown
                selected={Number(saveRange.selected)}
                onSelect={(data) => handleSaveRange(data)}
                title="저장 기간"
              >
                {["3days(720p)", "1week(480p)", "3weeks(360p)"]}
              </Dropdown>
            </div>
            <div className="cctv-live">
              <Button onClick={handleSaveClick}>저장</Button>
            </div>
          </div>
        </Tab>
      </TabLayout>
    </div>
  );
};

export default Setting;
