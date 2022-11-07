import imgHumidOn from "../../../resources/humidOn.png";
import imgHumidOff from "../../../resources/humidOff.png";
import "./HumidityPanel.style.css";

import Switch from "@enact/sandstone/Switch";
import Dropdown from "@enact/sandstone/Dropdown";
import { useState } from "react";
import Image from "@enact/sandstone/Image";
import BodyText from "@enact/sandstone/BodyText";
import Button from "@enact/sandstone/Button";
import LS2Request from "@enact/webos/LS2Request";
import ReactInterval from "react-interval";

const bridge = new LS2Request();
const serviceUrl = "luna://com.cosmos.project.service";

const lsSetTargetHum = (value) => {
  let request = {
    service: serviceUrl,
    method: "setTargetHum",
    parameters: { value: value },
    onSuccess: (msg) => {
      console.log(msg);
    },
    onFailure: (msg) => {
      console.log(msg);
    },
  };
  bridge.send(request);
};

const lsSetIsHumdOn = (value) => {
  let request = {
    service: serviceUrl,
    method: "setHumdOn",
    parameters: { value: value },
    onSuccess: (msg) => {
      console.log(msg);
    },
    onFailure: (msg) => {
      console.log(msg);
    },
  };
  bridge.send(request);
};

const startServer = () => {
  const onSocketOnSuccess = (msg) => {
    console.log(msg);
  };
  const onSocketOnFailure = (msg) => {
    console.log(msg);
  };
  let request = {
    service: serviceUrl,
    method: "startServer",
    parameters: {},
    onSuccess: onSocketOnSuccess,
    onFailure: onSocketOnFailure,
  };
  bridge.send(request);
};

const WhichText = function (props) {
  if (props.isSwitchOn) {
    if (props.isHumdOn) {
      return <span> [자동모드 On] 가습기 동작 중입니다.</span>;
    } else {
      return <span> [자동모드 On] 목표습도에 도달하였습니다.</span>;
    }
  } else {
    return <span> [자동모드 Off] 가습기가 꺼져있습니다. </span>;
  }
};

const getIndexFromHumdValue = (value) => {
  let index = 0;
  switch (value) {
    case 45:
      index = 0;
      break;
    case 50:
      index = 1;
      break;
    case 55:
      index = 2;
      break;
    case 60:
      index = 3;
      break;
  }
  return index;
};

const getHumdValueFromIndex = (index) => {
  let value = 0;
  switch (index) {
    case 0:
      value = 45;
      break;
    case 1:
      value = 50;
      break;
    case 2:
      value = 55;
      break;
    case 3:
      value = 60;
      break;
  }
  return value;
};

const HumidImage = (props) => {
  return (
    <>
      <Image
        src={props.isOnOff ? imgHumidOn : imgHumidOff}
        sizing={"fill"}
        onLoad={console.log("image onLoad")}
        style={{
          border: "#ffa500 dashed 0px",
        }}
      ></Image>
    </>
  );
};

const HumidityPanel = () => {
  // 현재 온도
  let [currentTemp, setCurrentTemp] = useState(18);

  // 현재 습도
  let [currentHum, setCurrentHum] = useState(45);

  // 가습기 동작 중인지 아닌지
  let [isHumdOn, setIsHumdOn] = useState(false);

  // 토글버튼 on인지 off인지
  let [isSwitchOn, setIsSwitchOn] = useState(false);

  // 목표 습도
  let [targetHum, setTargetHum] = useState(45);

  const handleHumdControlData = (data) => {
    setCurrentTemp(data.currentTemp);
    setCurrentHum(data.currentHum);
    setIsHumdOn(data.isHumdOn);
    setTargetHum(data.targetHum);
  };

  let request = {
    service: serviceUrl,
    method: "getHumdControlData",
    parameters: {},
    onSuccess: (msg) => {
      handleHumdControlData(msg.data);
    },
    onFailure: (msg) => {
      console.log("getHumdControlDataFailure", msg);
    },
  };
  bridge.send(request);

  return (
    <>
      <div className="my-container">
        <div className="imgtop">
          <HumidImage isOnOff={isHumdOn}></HumidImage>
        </div>
        <div className="drop">
          <Dropdown
            className="down"
            defaultSelected={getIndexFromHumdValue(targetHum)}
            onSelect={(e) => {
              targetHum = getHumdValueFromIndex(e.selected);
              lsSetTargetHum(targetHum);
            }}
            inline
            title="목표 습도를 선택하세요(Humidifier)"
          >
            {["45%(겨울)", "50%(봄, 가을)", "55%(여름)", "60%(기본 값)"]}
          </Dropdown>
        </div>
        <div className="texttop">
          <BodyText>------------------ 현재습도 ------------------</BodyText>
          <BodyText>
            현재 이 곳은 온도 {currentTemp}도, 습도는 {currentHum}%입니다.
          </BodyText>
        </div>
        <div className="textmid">
          <BodyText>--------------- 가습기 ON/OFF ---------------</BodyText>
          <div>
            <span>
              <Switch
                onToggle={(e) => {
                  setIsSwitchOn(e.selected);
                  setIsHumdOn(e.selected);
                  lsSetIsHumdOn(e.selected);
                }}
              />
            </span>
            <WhichText isHumdOn={isHumdOn} isSwitchOn={isSwitchOn}></WhichText>
          </div>
          <Button onClick={startServer}>server 켜기</Button>
        </div>
        <ReactInterval
          timeout={1000}
          enabled={true}
          callback={() => {
            bridge.send(request);
          }}
        />
      </div>
    </>
  );
};

export default HumidityPanel;
