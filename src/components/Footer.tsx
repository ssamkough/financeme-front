import React from "react";
import { Layout, List } from "antd";
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const { Footer } = Layout;
  const fullYear = new Date().getFullYear();
  const fullYearElem = (
    <span>
      <span>{fullYear}</span> <span>Brains</span>
    </span>
  );

  const twitterUrl = "https://google.com";
  const instagramUrl = "https://google.com";
  const facebookUrl = "https://google.com";
  const socialsElem = (
    <span className="social-icons">
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <TwitterOutlined twoToneColor="#f4abba" />
      </a>{" "}
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <InstagramOutlined twoToneColor="#f4abba" />
      </a>{" "}
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <FacebookOutlined twoToneColor="#f4abba" />
      </a>
    </span>
  );

  const data = [fullYearElem, socialsElem];

  return (
    <Footer id="app-footer">
      <List
        grid={{ gutter: 0, column: 2 }}
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Footer>
  );
};

export default Footer;
