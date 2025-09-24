import "./App.css";
import "antd/dist/reset.css";
import { Layout } from "antd";
import { AppHeader } from "./components/Layout/AppHeader/AppHeader";
import { AppFooter } from "./components/Layout/AppFooter/AppFooter";
import { Post } from "./components/Post/Post";
import { PostList } from "./components/PostList/PostList";
import { Route, Router, Routes } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { About } from "./Pages/About/About";
import { NotFound } from "./Pages/NotFound/NotFound";

const { Content } = Layout;

export const URL = "https://dummyjson.com/posts";

function App() {
  return (
    <Layout>
      <AppHeader />
      <Content
        style={{ padding: "20px", width: 1200, margin: "20vh auto 10vh auto" }}
      >
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
