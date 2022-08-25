import { Layout, Menu, Spin } from "antd";
import { useState } from "react";

import { Logo } from "../Logo/Logo";

const { Sider } = Layout;
export const AppSider = (props) => {
  const { items, collapsed, theme, loading } = props;
  return (
    <Sider
    trigger={null}
    collapsed={collapsed}
    style={{
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      background: "#ffffff"
    }}
    >
      <Logo />
      {loading ? <Spin style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh"
      }}/> : <Menu items={items} mode={"inline"} theme={theme} />
    }
    </Sider>
  );
};
