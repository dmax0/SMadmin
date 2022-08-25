import axios from "axios";
import { Layout, Button, Space, Table, message, Tabs, PageHeader, Form, Input, Radio } from "antd";
import React, { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import {
  DeleteOutlined,
  EditOutlined,
  RestOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuthState } from "@context/context";
const { TabPane } = Tabs;
export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { userDetails } = useAuthState();
  useEffect(() => {
    // axios.defaults.baseURL = "http://localhost:3001";
    setIsLoading(true);
    axios
      .get("/admin")
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        message.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const datas = [];
  if (Array.isArray(data)) {
    data.forEach((item) => {
      datas.push({
        key: item.id,
        id: item.id,
        username: item.username,
        nickname: item.nickname,
        level: item.role === 1 ? "超级管理员" : "普通管理员",
        phone: item.phone,
      });
    });
  }
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "昵称",
      dataIndex: "nickname",
      key: "nickname",
    },
    {
      title: "等级",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "手机号",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) =>
        userDetails.role === 1 && record.id !== userDetails.id ? (
          <Space size="middle">
            <Button
              type="primary"
              shape="round"
              size="small"
              onClick={() => {
                console.log(record.id);
              }}
            >
              <EditOutlined />
              编辑
            </Button>
            <Button
              type="danger"
              shape="round"
              size="small"
              onClick={() => {
                console.log(record.id);
              }}
            >
              <DeleteOutlined />
              删除
            </Button>
            <Button
              size="small"
              shape="round"
              onClick={() => {
                console.log(record.id);
              }}
            >
              <SettingOutlined />
              分配权限
            </Button>
            <Button 
              size="small"
              shape="round"
              >
                <RestOutlined/>
                重置密码
              </Button>
          </Space>
        ) : null,
    },
  ];
  return (
    <Layout>
      <Space
        style={{
          marginBottom: 16,
        }}
      ></Space>
      <Tabs>
        <TabPane tab={
          <span>
            <UserOutlined />
            管理员列表
          </span>
        } key="admin">
          <Table columns={columns} dataSource={datas} loading={isLoading} />
        </TabPane>
        {
          userDetails.role === 1 && (
            <TabPane tab={
              <span>
                <UserAddOutlined/>
                添加管理员
              </span>
            } key="addAdmin">
              <AddAdmin />
            </TabPane>
          )
        }
      </Tabs>
    </Layout>
  );
};


const AddAdmin = () => {
  return (
    <div>
      <PageHeader
        title="添加管理员"
        // extra={[
        //   <Button key="1" type="primary">
        //     添加
        //   </Button>,
        // ]}
      />
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        initialValues={{ size: "large" }}
      >
        <Form.Item label="用户名">
          <Input />
        </Form.Item>
        <Form.Item label="密码">
          <Input />
        </Form.Item>
        <Form.Item label="昵称">
          <Input />
        </Form.Item>
        <Form.Item label="手机号">
          <Input />
        </Form.Item>
        <Form.Item label="权限等级">
          <Radio.Group defaultValue={'common'}>
            <Radio value={'common'} disabled >普通管理员</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}