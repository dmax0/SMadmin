
import { AppContext } from "@/AuthenticatedApp";
import { siderMenuItems } from "@/config/siderConfig";

import { AppFooter } from "@components/Footer/Footer";
import { AppHeader } from "@components/Header/Header";
import { AppSider } from "@components/Sider/Sider";
import { Layout } from "antd";
import { useContext, useMemo, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const { Content } = Layout;
export const MainLayout = ({ children }) => {
  const [items, setItems] = useState([]);
  const [sideMenuItems, setSideMenuItems] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [marginLeft, setMarginLeft] = useState(200);

  const theme = useContext(AppContext).theme;

  useMemo(() => {
    setSideMenuItems(siderMenuItems);
  }, []);

  return (
    <div>
      <Layout>
        <AppSider items={sideMenuItems} collapsed={collapsed} theme={theme} />
        <Layout
          style={{
            marginLeft: marginLeft,
          }}
        >
          <AppHeader
            theme={theme}
            items={items}
            style={{ flexDirection: "row-reverse" }}
            changeCollasped={() => setCollapsed(!collapsed)}
            collapsed={collapsed}
            setMarginLeft={(marginLeft) => setMarginLeft(marginLeft)}
          ></AppHeader>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 570,
            }}
          >
            <Outlet />
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    </div>
  );
};
