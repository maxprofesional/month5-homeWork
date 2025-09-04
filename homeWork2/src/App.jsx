import "./App.css";
import { UserList } from "./components/UserList";
import users from "./data/users.json";

function App() {
  return <UserList data={users} />;
}

export default App;
