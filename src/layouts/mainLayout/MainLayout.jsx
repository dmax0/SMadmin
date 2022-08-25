import { AppContext } from "@/AuthenticatedApp";
import { Icons } from "@/config/icon";



import { AppFooter } from "@components/Footer/Footer";
import { AppHeader } from "@components/Header/Header";
import { AppSider } from "@components/Sider/Sider";
import { Layout, message } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useContext,  useState } from "react";
import { Link, Outlet } from "react-router-dom";

const { Content } = Layout;
const isExistChild = (id, array) => {
  return array.some((item) => item.parent_id === id);
};

const getMenuItem = async () => {
  const list = await axios.get("/menu");
  const children = list.filter((item) => item.parent_id !== 0);

  const menuItems = list.map((item) => {
    if (item.parent_id === 0 && isExistChild(item.id, children)) {
      const itemChildren = children.filter(
        (child) => child.parent_id === item.id
      );
      return {
        label: item.name,
        key: item.id,
        icon: Icons[item.icon],
        children: itemChildren.map((child) => ({
          label: <Link to={child.url}>{child.name}</Link>,
          key: child.id,
          path: child.url,
        })),
      };
    } else if (item.parent_id === 0 && !isExistChild(item.id, children)) {
      return {
        label: <Link to={item.url}>{item.name}</Link>,
        key: item.id,
        path: item.url,
        icon: Icons[item.icon],
      };
    }
  }).filter((item) => item !== undefined);
  return menuItems;
};
export const MainLayout = ({ children }) => {
  const [items, setItems] = useState([]);
  const [sideMenuItems, setSideMenuItems] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [marginLeft, setMarginLeft] = useState(200);
  const [siderLoading, setSiderLoading] = useState(false);
  const theme = useContext(AppContext).theme;

  useEffect(() => {
    const getMenu = async () => {
      setSiderLoading(true);
      try {
        const menuItems = await getMenuItem();
        setSideMenuItems(menuItems);
      } catch (error) {
        message.error(error.message);
        console.log(error);
      } finally {
        setSiderLoading(false);
      }
    };
    getMenu();
  }, []);

  return (
    <div>
      <Layout>
        <AppSider items={sideMenuItems} collapsed={collapsed} theme={theme} loading={siderLoading}/>
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
