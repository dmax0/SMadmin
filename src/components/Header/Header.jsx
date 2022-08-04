import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import { Logo } from "../Logo/Logo";
const { Header } = Layout;

export const AppHeader = (props) => {
  const { theme, mode,  items, style, ...rest } = props;
  return (
    <Header style={{ ...style }}>
        <Logo />
      <Menu
        theme={theme}
        mode={mode}
        items={items.map((value, index) => {
          const key = index + 1;
          return {
            key,
            label: value,
            
          };
        })}
        {...rest}
      ></Menu>
    </Header>
  );
};
AppHeader.propTypes = {
    theme: PropTypes.string, 
    mode: PropTypes.string,
    items: PropTypes.array.isRequired,
    style: PropTypes.object,
    rest: PropTypes.object
}
AppHeader.defaultProps = {
    theme: "dark",
    mode: "horizontal"
}