import { Layout } from "antd";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AppHeader } from "../../components/Header/Header";

const useData = () => {
    const HeaderData = useMemo(() => [{
        "icon": "home",
        "key": "overview",
        "url": "/",
        "name": "首页"
    }, {
        "icon": "login",
        "key": "login",
        "url": "/login",
        "name": "登录"
    }], [])
    return HeaderData;
}
export const MainLayout = ({ children }) => {
  const [items, setItems] = useState([]);
  
  const HeaderData = useData();
  useMemo(() => {
    const menuItems = [];
    HeaderData.map(elem => {
        menuItems.push(<Link to={elem.url}>{elem.name}</Link>)
        return menuItems;
      })
    setItems(menuItems);
  }, [HeaderData])
  return (
    <div>
      <Layout>
        <AppHeader items={items} />
        {children}
      </Layout>
    </div>
  );
};
