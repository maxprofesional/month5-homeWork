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
import { Layoutr } from "./components/Layout/Layoutr";
import { PostsPage } from "./Pages/PostsPage/PostsPage";
import { PostPage } from "./Pages/PostPage";

const { Content } = Layout;

export const URL = "https://dummyjson.com/posts";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Layoutr />}>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
