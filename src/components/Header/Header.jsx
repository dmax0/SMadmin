import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined, QuestionCircleOutlined,
  SearchOutlined,
  SubnodeOutlined
} from "@ant-design/icons";

import {
  Breadcrumb, Input
} from "antd";
import { Header } from "antd/lib/layout/layout";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { MyProfile } from "../MyProfile/MyProfile";
import "./Header.css";

export const AppHeader = (props) => {
  const {
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
        background: "#eeeeee",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
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
        <Breadcrumb
          style={{
            marginTop: 20,
          }}
        >
          <Breadcrumb.Item href={"/"}>
            <HomeOutlined />
          </Breadcrumb.Item>
          {
            console.log(props.breadcrumbName)
          }
        </Breadcrumb>
      </div>

      <div
        style={{
          lineHeight: 3,
          display: "flex",
          marginRight: 30,
        }}
      >
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
        <a
          href="/admin/suplier"
          style={{
            marginTop: 12,
            marginLeft: 14,
          }}
        >
          <QuestionCircleOutlined
            style={{
              fontSize: 18,
            }}
          />
        </a>
        <MyProfile
          style={{
            display: "flex",
            marginLeft: 20,
            marginTop: 10,
          }}
          count={9}
          username={''}
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
