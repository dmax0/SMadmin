import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { Col, Layout, Row } from "antd";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AppFooter } from "../../components/Footer/Footer";
import { AppHeader } from "../../components/Header/Header";
import { AppSider } from "../../components/Sider/Sider";
import { siderMenuItems } from "../../config/siderConfig";

const { Content } = Layout;
const useData = () => {
  const HeaderData = useMemo(
    () => [
      {
        icon: "home",
        key: "overview",
        url: "/admin",
        name: "首页",
      },
      {
        icon: "login",
        key: "login",
        url: "/admin/login",
        name: "登录",
      },
    ],
    []
  );
  return HeaderData;
};
export const MainLayout = ({ children }) => {
  const [items, setItems] = useState([]);
  const [sideMenuItems, setSideMenuItems] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [marginLeft, setMarginLeft] = useState(200);

  const HeaderData = useData();
  useMemo(() => {
    const menuItems = [];
    HeaderData.map((elem) => {
      menuItems.push(<Link to={elem.url}>{elem.name}</Link>);
      return menuItems;
    });
    setItems(menuItems);
  }, [HeaderData]);

  useMemo(() => {
    setSideMenuItems(siderMenuItems);
  }, []);

  return (
    <div>
      <Layout>
        <AppSider items={sideMenuItems} collapsed={collapsed} />
        <Layout
          style={{
            marginLeft: marginLeft,
          }}
          
        >
          <AppHeader
            items={items}
            style={{ flexDirection: "row-reverse" }}
            changeCollasped={() => setCollapsed(!collapsed)}
            collapsed={collapsed}
            setMarginLeft={(marginLeft) => setMarginLeft(marginLeft)}
          >
            {children}
          </AppHeader>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 570,
            }}
          >
            {children}
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    </div>
  );
};
