import { Avatar, Image, Layout } from "antd";

import { LoginForm } from "../../components/LoginForm/LoginForm";
import "./login.css";

const handleSubmit = (values) => {
  
}
export const LoginPage = () => {
    const {Header, Content} = Layout
  return (
    <div className="main">
      <Layout className="left">
        <Content>

        </Content>
      </Layout>
      <Layout className="right">
        <h1>登录</h1>
        <LoginForm handleSubmit={handleSubmit} className="loginForm"/>
        <h1>@Copyright ©2020-2021 All rights reserved.</h1>
      </Layout>
    </div>
  );
};
