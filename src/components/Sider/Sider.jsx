import { Layout, Menu } from "antd";

import { Logo } from "../Logo/Logo";

const { Sider } = Layout;
export const AppSider = (props) => {
  const { items, collapsed } = props;
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
      background: "#fff"
    }}
    >
      <Logo />
      <Menu items={items} mode={"inline"} theme="lignt" 
      ></Menu>
    </Sider>
  );
};
