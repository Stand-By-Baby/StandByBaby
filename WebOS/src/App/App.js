import kind from "@enact/core/kind";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import Panels from "@enact/sandstone/Panels";

import MainPanel from "../views/MainPanel";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./attachErrorHandler";

import css from "./App.module.less";

import BabyMode from "../views/BabyMode";
import SleepCycle from "../views/SleepCycle";
import Setting from "../views/Setting";
import CCTV from "../views/CCTV";

const App = kind({
  name: "App",

  styles: {
    css,
    className: "app",
  },

  render: (props) => (
    <Panels {...props}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPanel />} />
          <Route path="/babymode" element={<BabyMode />} />
          <Route path="/sleepcycle" element={<SleepCycle />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/cctv" element={<CCTV />} />
        </Routes>
      </BrowserRouter>
    </Panels>
  ),
});

export default ThemeDecorator(App);
