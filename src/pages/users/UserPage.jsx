import axios from "axios";
import { Layout, Button, Space, Table, message } from "antd";
import React, { useEffect, useState } from "react";

import {
  DeleteOutlined,
  EditOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export const UserPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:3001";
    setIsLoading(true);
    axios
      .get("/admin")
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        setError(error);
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
        level: item.level === 1 ? "超级管理员" : "普通管理员",
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
      render: (text, record) => (
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
            size="small"
            shape="round"
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
        </Space>
      ),
    },
  ];
  return (
    <Layout>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="primary" >
          新增管理员
        </Button>
      </Space>
      <Table columns={columns} dataSource={datas} loading={isLoading} />
    </Layout>
  );
};
