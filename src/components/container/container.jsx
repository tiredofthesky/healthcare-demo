import { useState } from "react";
import Aside from "../aside_panel/aside";
// import Chart from "../chart/chart";
import "./container.scss";
function Container() {
  return (
    <div className="container">
      <Aside />
      {/* <Chart/> */}
    </div>
  );
}

export default Container;
