import "./App.css";
import { Content } from "./components/content";

const description =
  "ipsum dolor sit amet consectetur adipisicing elit. Odit natus, perspiciatis ex accusantium, autem voluptatem iure eligendi ad itaque est optio, id laborum? Possimus, enim aliquid aliquam fugiat est voluptatum.";

const title = "My React Project";
function App() {
  return <Content description={description} title={title} />;
}

export default App;
