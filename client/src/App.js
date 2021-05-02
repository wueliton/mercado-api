import "./App.css";
import { UserProvider } from "./contexts/user";
import TabelaUsersComponent from "./components/TabelaUsers";

function App() {
  return (
    <UserProvider>
      <TabelaUsersComponent></TabelaUsersComponent>
    </UserProvider>
  );
}

export default App;
