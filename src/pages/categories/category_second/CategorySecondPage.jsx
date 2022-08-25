import { Button, PageHeader } from "antd";

export const CategorySecondPage = () => {
  return (<div>
    <PageHeader
      title="二级商品分类"
      subTitle="二级商品分类,可以增加、删除、修改二级商品分类"
      extra={[
        <Button key="new" type="primary">
          新增分类
        </Button>,
      ]}
    />
  </div>);
};
