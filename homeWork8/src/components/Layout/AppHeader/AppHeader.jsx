import { Layout, Menu } from "antd";
const { Header } = Layout;
import cls from "./AppHeader.module.scss";
import { Link } from "react-router-dom";
export const AppHeader = () => {
  const menuItems = [
    { key: "1", label: <Link to="/">Главная</Link> },
    { key: "2", label: <Link to="/about">О нас</Link> },
    { key: "3", label: <Link to="/post">Посты</Link> },
  ];
  return (
    <Header
      className={cls.header}
      style={{
        position: "fixed",
        width: "100%",
        color: "white",
        fontSize: "20px",
      }}
    >
      <div className="logo">Мой Логотип</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menuItems}
      />
    </Header>
  );
};
