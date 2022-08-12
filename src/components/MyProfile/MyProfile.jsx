/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  DownCircleOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Image, Menu, Space } from "antd";

export const MyProfile = (props) => {
  const { count, username, style, imgSrc } = props;
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: "个人中心",
        },
        {
          key: "2",
          label: "个人设置",
        },
        {
          key: "3",
          label: "退出登录",
        },
      ]}
    />
  );
  return (
    <div style={style}>
      <Badge count={count} size={"small"}>
        {imgSrc ? (
          <Avatar size={40} src={imgSrc} />
        ) : (
          <Avatar size={40} icon={<UserOutlined />} />
        )}
      </Badge>
      <Dropdown overlay={menu}>
        <div
          style={{
            marginLeft: 10,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {username}
              <DownOutlined />
            </Space>
          </a>
        </div>
      </Dropdown>
    </div>
  );
};
