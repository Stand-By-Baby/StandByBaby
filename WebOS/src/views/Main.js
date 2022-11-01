import React from "react";

import { Link } from "react-router-dom";

import { Header } from "@enact/sandstone/Panels";
import Button from "@enact/sandstone/Button";

const Main = () => {
  return (
    <div>
      <Header title="Stand BY ME" />
      <Link to="/babymode">
        <Button>Baby Mode</Button>
      </Link>
      <Link to="/sleepcycle">
        <Button>Sleep Cycle</Button>
      </Link>
      <Link to="/setting">
        <Button>Setting</Button>
      </Link>
      <Link to="/cctv">
        <Button>CCTV</Button>
      </Link>
    </div>
  );
};

export default Main;
