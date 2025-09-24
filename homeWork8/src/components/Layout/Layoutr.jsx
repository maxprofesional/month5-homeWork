import React from "react";
import { AppFooter } from "./AppFooter/AppFooter";
import { AppHeader } from "./AppHeader/AppHeader";
import { Outlet } from "react-router-dom";
import { Content } from "antd/es/layout/layout";

export const Layoutr = () => {
  return (
    <>
      <AppHeader />
      <Content
        style={{
          padding: "20px",
          width: 1200,
          margin: "20vh auto 10vh auto",
        }}
      >
        <Outlet />
      </Content>

      <AppFooter />
    </>
  );
};
