import React from "react";
import { Line } from "@ant-design/charts";

const LineChart = ({ data }: { data: any }) => {
  const config = {
    data: data,
    xField: "Date",
    yField: "Money",
    xAxis: {
      tickCount: 5,
    },
  };

  return <Line {...config} />;
};

export default LineChart;
