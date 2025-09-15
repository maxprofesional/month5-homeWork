import "./App.css";
import "antd/dist/reset.css";
import { Layout } from "antd";
import { AppHeader } from "./components/Layout/AppHeader/AppHeader";
import { AppFooter } from "./components/Layout/AppFooter/AppFooter";
import { WeatherSearch } from "./components/WeatherSearch/WeatherSearch";
const { Content } = Layout;
function App() {
  return (
    <Layout>
      <AppHeader />
      <Content
        style={{ padding: "20px", width: 1200, margin: "20vh auto 10vh auto" }}
      >
        <WeatherSearch />
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
