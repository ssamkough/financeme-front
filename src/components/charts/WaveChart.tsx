import React from "react";
import { Liquid } from "@ant-design/charts";

const WaveChart = ({ data }: { data: any }) => {
  const config = {
    percent: data,
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
