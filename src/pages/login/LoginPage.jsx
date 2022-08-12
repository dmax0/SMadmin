import { Avatar, Image, Layout } from "antd";

import { LoginForm } from "@components/LoginForm/LoginForm";
import "./login.css";
import { useState } from "react";
import axios from "axios";
const { Header, Content } = Layout;

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (values) => {
    const { username, password } = values;
    setLoading(true);
    axios
      .post("auth/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="main">
      <Layout className="left">
        <Content></Content>
      </Layout>
      <Layout className="right">
        <h1>登录</h1>
        <LoginForm
          handleSubmit={handleSubmit}
          className="loginForm"
          loading={loading}
        />
        <h1>@Copyright ©2020-2021 All rights reserved.</h1>
      </Layout>
    </div>
  );
};
