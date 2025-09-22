import "./App.css";
import "antd/dist/reset.css";
import { Layout } from "antd";
import { AppHeader } from "./components/Layout/AppHeader/AppHeader";
import { AppFooter } from "./components/Layout/AppFooter/AppFooter";
import { Post } from "./components/Post/Post";
import { PostList } from "./components/PostList/PostList";
const { Content } = Layout;

export const URL = "https://dummyjson.com/posts";

function App() {
  return (
    <Layout>
      <AppHeader />
      <Content
        style={{ padding: "20px", width: 1200, margin: "20vh auto 10vh auto" }}
      >
        <PostList />
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
