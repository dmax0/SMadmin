import { Layout, message } from "antd";

import { LoginForm } from "@components/LoginForm/LoginForm";
import "./login.css";
import { useAuthDispatch, useAuthState } from "@context/context";
import { loginUser } from "@context/actions";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

export const LoginPage = (props) => {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const { loading, errorMessage } = useAuthState();
  const handleSubmit = async (values) => {
    try {
      const response = await loginUser(dispatch, values);

      if (response && response.user) {
        message.success(response.message);
        setTimeout(() => {
          window.location.href = "/admin/user";
        }, 1000);
      } else message.error(errorMessage);
    } catch (error) {
      console.log(error);
      errorMessage && message.error(errorMessage);
    }
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
