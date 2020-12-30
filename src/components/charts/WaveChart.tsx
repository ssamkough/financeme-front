import React from "react";
import { Liquid } from "@ant-design/charts";

const WaveChart = () => {
  var config = {
    percent: 0.25,
    statistic: {
      content: {
        style: {
          fill: "black",
        },
      },
    },
  };
  return <Liquid {...config} />;
};

export default WaveChart;
