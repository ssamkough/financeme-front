import React from "react";
import { Pie } from "@ant-design/charts";

const PieChart = ({ data }: { data: any }) => {
  const config = {
    appendPadding: 10,
    data: data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: function content(_ref: any) {
        var percent = _ref.percent * 100;
        return percent + "%";
      },
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [{ type: "element-active" }],
  };

  return <Pie {...config} />;
};

export default PieChart;
