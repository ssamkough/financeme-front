import React from "react";
import { Layout, List } from "antd";

const Footer = () => {
  const { Footer } = Layout;

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
