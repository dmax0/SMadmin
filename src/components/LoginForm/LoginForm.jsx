import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import PropTypes from "prop-types";
import { useState } from "react";


export const LoginForm = (props) => {
  const { handleSubmit, className, size, loading } = props;
  
  return (
    <Form
      name="LoginForm"
      initialValues={{
        username: "admin1",
        password: "12345",
        // rememberMe: true
      }}
      style={{
        padding: "auto",
      }}
      onFinish={handleSubmit}
      className={className}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "请输入用户名",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} size={size} disabled={loading}/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "请输入密码",
          },
        ]}
      >
        <Input prefix={<LockOutlined />} size={size} disabled={loading} />
      </Form.Item>

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          size={size}
          loading={loading}
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

LoginForm.defaultProps = {
  size: "large",
};
