/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  DownCircleOutlined,
  DownOutlined,
  QuestionCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import { logout } from "@context/actions";
import { useAuthDispatch, useAuthState } from "@context/context";
import { Avatar, Badge, Dropdown, Menu, Modal, Space } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({
  visible,
  onCancel,
  onConfirm,
  modalText,
}) => {
  return <Modal
    title="退出登录"
    visible={visible}
    onCancel={onCancel}
    onOk={onConfirm}
    okText="确认"
    cancelText="取消"
  >
    <p><QuestionCircleFilled style={{
      fontSize: "20px",
    }}/>{modalText}</p>
  </Modal>;
}

export const MyProfile = (props) => {
  const {
    count,
    style,
    imgSrc = "http://cdn.dmax.wang/assets/avatar.jpg",
  } = props;
  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState('确定？');
  const showLogoutModal = () => {
    setVisible(true);
  }
  const handleCancel = () => {
    setVisible(false);
  }
  const handleOK = () => {
    logout(dispatch);
    navigate("/admin/user");
  };
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();
  const navigate = useNavigate();
  
  const menu = (
    <Menu
      onClick={({ key }) => {
        if (key === "logout") {
          showLogoutModal();
        }
      }}
      items={[
        {
          key: "profile",
          label: "个人中心",
        },
        {
          key: "settings",
          label: "个人设置",
        },
        {
          key: "logout",
          label: "退出登录",
        },
      ]}
    />
  );
  return (
    
    <div style={style}>
      <Badge count={count} size={"small"}>
        {userDetails ? (
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
              {userDetails.username}
              <DownOutlined />
            </Space>
          </a>
        </div>
      </Dropdown>
     <LogoutModal visible={visible} onCancel={handleCancel} onConfirm={handleOK} modalText={modalText} />
    </div>
  );
};
