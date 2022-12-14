import kind from "@enact/core/kind";
import { Panel, Header } from "@enact/sandstone/Panels";

import Main from "./Main";

import "../css/MainPanel.css";

const MainPanel = kind({
  name: "MainPanel",

  render: (props) => (
    <Panel {...props}>
      <Main></Main>
    </Panel>
  ),
});

export default MainPanel;
