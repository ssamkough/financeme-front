import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DollarOutlined,
  UploadOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Header = () => {
  const { Header } = Layout;
  const [current, setCurrent] = useState("");

  const handleClick = (e: any) => {
    console.log("clicked:", e.key);
    setCurrent(e.key);
  };

  return (
    <Header id="app-header">
      <Menu
        theme="dark"
        mode="horizontal"
        triggerSubMenuAction="hover"
        selectedKeys={[current]}
        onClick={(e) => handleClick(e)}
      >
        <Menu.Item key="home">
          <NavLink to="/">
            FinanceMe <DollarOutlined twoToneColor="#f4abba" />
          </NavLink>
        </Menu.Item>
        <>
          <Menu.Item key="settings" className="header-right">
            Settings <SettingOutlined twoToneColor="#f4abba" />
          </Menu.Item>
          <Menu.Item key="import" className="header-right">
            Import <UploadOutlined twoToneColor="#f4abba" />
          </Menu.Item>
        </>
      </Menu>
    </Header>
  );
};

export default Header;
