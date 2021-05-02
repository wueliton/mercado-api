import "./App.css";
import { UserProvider } from "./contexts/user";
import TabelaUsersComponent from "./components/TabelaUsers";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <UserProvider>
        <TabelaUsersComponent></TabelaUsersComponent>
      </UserProvider>
    </Router>
  );
}

export default App;
