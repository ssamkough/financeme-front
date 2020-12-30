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
      <span>{fullYear}</span> <span>FinanceMe</span>
    </span>
  );

  const madeByMeElem = (
    <div className="made-by-me">
      Made by{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://sammysamkough.com/"
      >
        Sammy Samkough
      </a>
    </div>
  );

  const buyMeACoffeeElem = (
    <div className="buy-me-a-coffee">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.buymeacoffee.com/ssamkough"
      >
        <img alt="buy-me-a-coffee" width={200} src="./buy-me-a-coffee.png" />
      </a>
    </div>
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

  const footerData = [madeByMeElem, buyMeACoffeeElem];

  return (
    <Footer id="app-footer">
      <List
        grid={{ gutter: 0, column: 2 }}
        dataSource={footerData}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Footer>
  );
};

export default Footer;
