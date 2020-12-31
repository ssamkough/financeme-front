import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";

const LineChart = () => {
  const [data, setData] = useState([]);
  let ref: any;

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("Data failed FETCH", error);
      });
  };

  var config = {
    data: data,
    xField: "Date",
    yField: "scales",
    xAxis: {
      type: "timeCat",
      tickCount: 5,
    },
  };

  useEffect(() => {
    var cnt = 0;
    var smooth = false;
    var interval = setInterval(function () {
      if (cnt < 5) {
        smooth = !smooth;
        cnt += 1;
        ref.update({ smooth: smooth });
      } else {
        clearInterval(interval);
      }
    }, 1000);
  });

  return <Line {...config} chartRef={(chartRef) => (ref = chartRef)} />;
};

export default LineChart;
