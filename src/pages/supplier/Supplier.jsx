import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Space,
  Radio,
  Modal,
  Table,
  Tabs,
} from "antd";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import "./Supplier.css";
const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const RowInfoForm = ({ visible, onCreate, onCancel, record }) => {
  return (
    <Modal
      visible={visible}
      title="编辑信息"
      okText="确认"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        console.log("record", record);
      }}
    >
      <Form
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          name: record.name,
          code: record.code,
            address: record.address,
            phone: record.phone,
        }}
      >
        <Form.Item
          name="name"
          label="供应商名称"
          rules={[
            {
              required: true,
              message: "请输入供应商名称!",
            },
          ]}
        >
          <Input value={record.name} />
        </Form.Item>
        <Form.Item
          name="code"
          label="供应商编码"
          rules={[
            {
              required: true,
              message: "请输入供应商编码!",
            },
          ]}
        >
          <Input value={record.code} />
        </Form.Item>
        <Form.Item
          name="address"
          label="供应商地址"
          rules={[
            {
              required: true,
              message: "请输入供应商地址!",
            },
          ]}
        >
          <Input value={record.address} />
        </Form.Item>
        <Form.Item
          name="phone"
          label="供应商电话"
          rules={[
            {
              required: true,
              message: "请输入供应商电话!",
            },
          ]}
        >
          <Input  />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export const Supplier = () => {
  const [visible, setVisible] = useState(false);
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState({});
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };
  const columns = [
    {
      title: "供应商名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "供应商编码",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "供应商地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "联系电话",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "备注",
      dataIndex: "remark",
      key: "remark",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            size="small"
            type="primary"
            shape="round"
            onClick={() => {
                setRecord(record);
                setVisibleInfo(true);
            }}
          >
            <EditOutlined /> 编辑
          </Button>
          <Button size="small" type="danger" shape="round">
            <DeleteOutlined /> 删除
          </Button>
        </Space>
      ),
    },
  ];
  const names = [
    "阿里巴巴科技有限公司",
    "腾讯科技有限公司",
    "百度科技有限公司",
    "京东科技有限公司",
    "淘宝网科技有限公司",
    "美团网科技有限公司",
    "饿了么科技有限公司",
    "口碑科技有限公司",
    "优酷科技有限公司",
  ];
  const addresses = [
    "四川省南充市西充县xxx路",
    "广州市天河区xxx路",
    "北京市朝阳区xxx路",
    "上海市浦东新区xxx路",
    "深圳市南山区xxx路",
    "杭州市滨江区xxx路",
  ];
  const phones = [
    "13888888888",
    "13999999999",
    "13777777777",
    "13666666666",
    "13555555555"
  ];
  const data = [];
  for (let i=0; i<40; i++) {
    data.push({
      key: i,
      name: names[Math.floor(Math.random() * names.length)],
      code: Math.floor(Math.random() * 1000000),
      address: addresses[Math.floor(Math.random() * addresses.length)],
      phone: phones[Math.floor(Math.random() * phones.length)],
      remark: "这个供应商是一家超级大的供应商",
    });
  }
  
  const rowSelection = (selectedRowKeys, selectedRows) => {
    console.log("selectedRowKeys", selectedRowKeys);
    console.log("selectedRows", selectedRows);
  }
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab={"供货商管理"} key={1}>
      <Content>
      <Form
        layout={"inline"}
        style={{
          marginTop: 10,
          padding: 10,
          background: "#fff",
          justifyContent: "space-between",
        }}
      >
        <Form.Item
          name={"supplierName"}
          label={"供应商名称"}
          style={{
            marginRight: 20,
            padding: 10,
          }}
        >
          <Input
            style={{
              width: 300,
            }}
          />
        </Form.Item>
        <Form.Item
          name={"supplierCode"}
          label={"供应商编号"}
          style={{
            marginRight: 20,
            padding: 10,
          }}
          rules={[
            {
              required: true,
              message: "请输入供应商编号",
            },
          ]}
        >
          <Input
            style={{
              width: 300,
            }}
          />
        </Form.Item>
        <Form.Item
          style={{
            padding: 10,
          }}
        >
          <Space>
            <Button type={"primary"}>查询</Button>
            <Button>重置</Button>
          </Space>
        </Form.Item>
      </Form>
      <div className="body">
        <Space>
        <Button type={"primary"} onClick={() => setVisible(true)}>
          新建
        </Button>
        <Button >导出信息</Button>
        <Button type={"danger"}>批量移除</Button>
        </Space>
        <CollectionCreateForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => setVisible(false)}
        />
        <RowInfoForm
            visible={visibleInfo}
            onCreate={() => setVisibleInfo(true)}
            onCancel={() => setVisibleInfo(false)}
            record={record}
        />
        <Table
        rowSelection={rowSelection}
            loading={loading}
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          
          style={{
            marginTop: 10,
          }}
        />
      </div>
    </Content>
      </Tabs.TabPane>

      <Tabs.TabPane tab={"供货商设置"} key={2}>
          
      </Tabs.TabPane>
    </Tabs>
  );
};
