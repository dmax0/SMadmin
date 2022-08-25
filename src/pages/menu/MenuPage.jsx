import { DownOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Select, Table, Tabs } from "antd";
import { useState } from "react";
import { Icons } from "@/config/icon";
import { useEffect } from "react";
import axios from "axios";
import { TabPane } from "rc-tabs";
const { Option } = Select;

const MenuList = () => {
  return (
    <Table 
    
    />
  )
}
const AddMenuForm = ({ visible }) => {
  const [parent_menu, setParentMenu] = useState([]);
  useEffect(() => {
    axios
      .get("/menu/first")
      .then((res) => {
        if (res.code === 0) {
          setParentMenu(res.data);
        }
      })
      .catch((error) => message.error(error));
  }, []);
  const onSubmit = (values) => {
    console.log(values);
  }
  return (
      <Form name="AddMenu"
        onFinish={onSubmit}
      >
        <Form.Item
          label={"菜单名称"}
          name="menuName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"菜单路径"}
          name="menuUrl"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="菜单图标">
          <Select
            suffixIcon={<DownOutlined />}
            defaultValue={"UserOutlined"}
            dropdownStyle={
              {
                // display: "table-column"
              }
            }
          >
            <Option value={0} key={0}>
              无
            </Option>
            {Object.keys(Icons).map((key) => {
              return (
                <Option value={key} key={key}>
                  {Icons[key]}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label={"父菜单"}>
          <Select
          // suffixIcon={<DownOutlined />}
          >
            <Option value={0} key={0}>
              无
            </Option>
            {parent_menu.map((menu) => {
              return (
                <Option key={menu.id} value={menu.id}>
                  {menu.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item >
          <Button htmlType="submit" type="primary" block>
            提交
          </Button>
        </Form.Item>
      </Form>
  );
};
export const MenuPage = () => {
  return (
    <div>
      <Tabs>
        <TabPane tab="菜单列表" key={"menuList"}>
          <MenuList />
        </TabPane>
        <TabPane tab="添加菜单" key={"addMenus"}>
          <AddMenuForm />
        </TabPane>
      </Tabs>
    </div>
  );
};
