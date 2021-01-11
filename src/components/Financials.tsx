import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Menu } from "antd";
import Loader from "react-loader-spinner";

import getFinancialData from "./../utilities/getFinancialData";

import LineChart from "./charts/LineChart";
import WaveChart from "./charts/WaveChart";
import PieChart from "./charts/PieChart";

const Financials = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [chart, setChart] = useState(0);
  const [data, setData] = useState([] as any);

  const chartComponents = [
    <LineChart data={data.line} />,
    <WaveChart data={data.wave} />,
    <PieChart data={data.pie} />,
  ];

  useEffect(() => {
    setIsLoading(false);
    setIsError(false);
    console.log("FINANCIAL", getFinancialData);
    setData(getFinancialData);
  }, []);

  const handleClick = (e: any) => {
    setChart(parseInt(e.key));
  };

  return (
    <Layout id="app-financials">
      {isError ? (
        <Row>
          <Col>
            <div>Oopsie, error doin' something. Fix coming soon!</div>
          </Col>
        </Row>
      ) : isLoading ? (
        <Row className="row justify-content-center">
          <Col className="col-4">
            <Loader type="TailSpin" color="#9999FF" height={100} width={100} />
          </Col>
        </Row>
      ) : (
        <Layout>
          <Menu
            className="chart-component-menu"
            onClick={(e) => handleClick(e)}
            mode="horizontal"
            defaultSelectedKeys={["0"]}
          >
            <Menu.Item key="0">Line</Menu.Item>
            <Menu.Item key="1">Wave</Menu.Item>
            <Menu.Item key="2">Pie</Menu.Item>
          </Menu>
          <br />
          {chartComponents[chart]}
        </Layout>
      )}
    </Layout>
  );
};

export default Financials;
