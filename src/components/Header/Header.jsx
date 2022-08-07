import React, { useMemo, useState } from "react";
import {
  Menu,
  Row,
  Col,
  Breadcrumb,
  Layout,
  Badge,
  Avatar,
  Button,
  Input,
  Form,
} from "antd";
import "./Header.css";
import PropTypes from "prop-types";
import Search from "antd/lib/input/Search";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SubnodeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import { MyProfile } from "../MyProfile/MyProfile";

export const AppHeader = (props) => {
  const {
    theme,
    mode,
    items,
    style,
    collasped,
    changeCollasped,
    setMarginLeft,
  } = props;
  // const [isLogin, setIsLogin] = useState(false);
  const [headerCollapsed, setHeaderCollapsed] = useState(collasped);
  const [isMobile, setIsMobile] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 668) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 0,
        background: "#eeeeee"
      }}
    >
      <div style={{
        display: "flex",
      }}>
        {React.createElement(
          headerCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => {
              changeCollasped();
              setMarginLeft(headerCollapsed ? 200 : 60);
              setHeaderCollapsed(!headerCollapsed);
            },
          }
        )}
        <Breadcrumb style={{
          marginTop: 20
        }}>
          <Breadcrumb.Item href={"/"}>
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/admin/supplier">
            <SubnodeOutlined /> <span>供应商管理</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div style={{
            lineHeight: 3,
            display: "flex",
            marginRight: 30
          }}>
      <Input.Search
          allowClear
          placeholder="搜索"
          enterButton={<SearchOutlined />}
          onSearch={() => {
            console.log("搜索");
          }}
          style={
            isMobile
              ? { display: "none" }
              : {
                  width: 400,
                  marginTop: 14,
                }
          }
        />
        <a href="/admin/suplier" style={{
          marginTop: 12,
          marginLeft: 14,
        }}><QuestionCircleOutlined style={{
          fontSize: 18
        }}/></a>
        <MyProfile
          style={{
            display: "flex",
            marginLeft: 20,
            marginTop: 10
          }}
          count={9}
          username={"DragonMax"}
        />
      </div>
    </Header>
  );
};
AppHeader.propTypes = {
  theme: PropTypes.string,
  mode: PropTypes.string,
  items: PropTypes.array.isRequired,
  style: PropTypes.object,
  rest: PropTypes.object,
};
AppHeader.defaultProps = {
  theme: "light",
  mode: "horizontal",
};
