import "./App.css";
import "antd/dist/reset.css";
import { Layout } from "antd";
import { AppHeader } from "./components/Layout/AppHeader/AppHeader";
import { AppFooter } from "./components/Layout/AppFooter/AppFooter";
import { Counter } from "./components/Counter/Counter";
import { FilteredList } from "./components/FilteredList/FilteredList";
const { Content } = Layout;
function App() {
  return (
    <Layout>
      <AppHeader />
      <Content
        style={{ padding: "20px", width: 1200, margin: "20vh auto 10vh auto" }}
      >
        <Counter />
        <FilteredList />
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
