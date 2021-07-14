import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import "./chartBtnGroup.css";

function ChartBtnGroup() {
  const [active, setActive] = useState(4);
  const btnList = [
    { id: 0, name: "1d" },
    { id: 1, name: "1w" },
    { id: 2, name: "1m" },
    { id: 3, name: "6m" },
    { id: 4, name: "1y" },
  ];
  return (
    <div className="chartBtnGroup">
      {btnList.map((btn) => (
        <Button
          className={active === btn.id ? "active" : ""}
          onClick={() => setActive(btn.id)}
          color="primary"
          size="small"
          key={btn.id}
        >
          {btn.name}
        </Button>
      ))}
    </div>
  );
}

export default ChartBtnGroup;
