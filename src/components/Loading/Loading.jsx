import { Spin } from "antd";

export const Loading = (props) => {
  const { loading, style } = props;
  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      ...style
    }}>
      <Spin spinning={loading} />
    </div>
  );
};
