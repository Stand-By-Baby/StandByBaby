import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import TabLayout from "@enact/sandstone/TabLayout";
import { Tab } from "@enact/sandstone/TabLayout";
import Switch from "@enact/sandstone/Switch";
import Popup from "@enact/sandstone/Popup";
import MediaOverlay from "@enact/sandstone/MediaOverlay";
import Scroller from "@enact/sandstone/Scroller";

import babymode from "../../resources/baby-mode.png";
import tempvideo from "../../resources/고열.mp4";
import cryvideo from "../../resources/울음.mp4";
import movevideo from "../../resources/움직임.mp4";

import "../css/BabyMode.css";
import { fireStore } from "../Firebase";

const BabyMode = (props) => {
  const [countDown, setCountDown] = useState(true);

  const [move, setMove] = useState(false);
  const [temp, setTemp] = useState(false);
  const [cry, setCry] = useState(false);
  const [mute, setMute] = useState(false);

  useEffect(() => {
    console.log(fireStore);
  });

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("ddd");
    }
  };

  return (
    <TabLayout orientation="horizontal">
      <Tab title="BabyMode">
        <div className="baby-mode">
          {countDown ? (
            <div className="baby-mode-count">
              <CountdownCircleTimer
                isPlaying
                duration={2}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
                onComplete={() => setCountDown(false)}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
            </div>
          ) : (
            <div className="baby-mode-wrapper">
              <div className="baby-mode-side">
                <button className="btn" onClick={() => setMove(true)}>
                  ddd
                </button>
                <button className="btn" onClick={() => setTemp(true)}>
                  ddd
                </button>
                <button className="btn" onClick={() => setCry(true)}>
                  ddd
                </button>
                <button className="btn" onClick={() => setMute(true)}>
                  ddd
                </button>
              </div>
              <div className="baby-mode-live">
                <Scroller>
                  <MediaOverlay
                    style={{
                      width: 600,
                      height: 600,
                    }}
                  >
                    <source type="" src={cryvideo} />
                  </MediaOverlay>
                </Scroller>

                <Popup
                  onClose={() => setMove(false)}
                  open={move}
                  position="center"
                >
                  움직임이 감지 되었습니다.
                </Popup>
                <Popup
                  onClose={() => setTemp(false)}
                  open={temp}
                  position="center"
                >
                  고온이 감지 되었습니다.
                </Popup>
                <Popup
                  onClose={() => setCry(false)}
                  open={cry}
                  position="center"
                >
                  울음소리가 감지 되었습니다.
                </Popup>
                <Popup
                  onClose={() => setMute(false)}
                  open={mute}
                  position="center"
                >
                  음소거 되었습니다.
                </Popup>
              </div>
              <div className="baby-mode-side">
                <button className="btn" onClick={() => setCry(true)}>
                  ddd
                </button>
                <button className="btn" onClick={() => setMute(true)}>
                  ddd
                </button>
              </div>
            </div>
          )}
        </div>
      </Tab>
    </TabLayout>
  );
};

export default BabyMode;
