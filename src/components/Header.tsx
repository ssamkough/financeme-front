import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DollarOutlined,
  UploadOutlined,
  SettingOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import PaymentsModal from "./header/PaymentsModal";
import ImportModal from "./header/ImportModal";
import SettingsModal from "./header/SettingsModal";

const Header = () => {
  const { Header } = Layout;

  const [current, setCurrent] = useState("");
  const [paymentsModalVisibility, setPaymentsModalVisibility] = useState(false);
  const [importModalVisibility, setImportModalVisibility] = useState(false);
  const [settingsModalVisibility, setSettingsModalVisibility] = useState(false);

  const handleClick = (e: any) => {
    const menuKey = e.key;
    setCurrent(menuKey);
    if (menuKey === "payments") {
      setPaymentsModalVisibility(true);
    } else if (menuKey === "import") {
      setImportModalVisibility(true);
    } else if (menuKey === "settings") {
      setSettingsModalVisibility(true);
    }
  };

  return (
    <>
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
            <Menu.Item key="payments" className="header-right">
              Payments <PlusCircleOutlined twoToneColor="#f4abba" />
            </Menu.Item>
          </>
        </Menu>
      </Header>
      <PaymentsModal
        isModalVisible={paymentsModalVisibility}
        setIsModalVisible={setPaymentsModalVisibility}
      />
      <ImportModal
        isModalVisible={importModalVisibility}
        setIsModalVisible={setImportModalVisibility}
      />
      <SettingsModal
        isModalVisible={settingsModalVisibility}
        setIsModalVisible={setSettingsModalVisibility}
      />
    </>
  );
};

export default Header;
