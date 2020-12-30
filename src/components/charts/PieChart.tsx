import React from "react";
import { Pie } from "@ant-design/charts";

const PieChart = () => {
  var data = [
    {
      type: "Classification One",
      value: 27,
    },
    {
      type: "Class 2",
      value: 25,
    },
    {
      type: "Classification Three",
      value: 18,
    },
    {
      type: "Classification Four",
      value: 15,
    },
    {
      type: "Classification Five",
      value: 10,
    },
    {
      type: "Other",
      value: 5,
    },
  ];
  var config = {
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
