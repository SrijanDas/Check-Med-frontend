import Button from "@material-ui/core/Button";
import React from "react";
import "./chartBtnGroup.css";

function ChartBtnGroup() {
  return (
    <div className="chartBtnGroup">
      <Button color="primary" size="small">
        1d
      </Button>
      <Button color="primary" size="small">
        1w
      </Button>
      <Button color="primary" size="small">
        1m
      </Button>
      <Button color="primary" size="small">
        6m
      </Button>
      <Button color="primary" size="small">
        1y
      </Button>
    </div>
  );
}

export default ChartBtnGroup;
