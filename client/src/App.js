import "./App.css";
import { UserProvider } from "./contexts/user";
import TabelaUsersComponent from "./components/TabelaUsers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route>
          <div>Index</div>
        </Route>
        <UserProvider>
          <Route path="/users">
            <TabelaUsersComponent></TabelaUsersComponent>
          </Route>
          <Route path="/user/:id">
            <div>Teste</div>
          </Route>
        </UserProvider>
      </Switch>
    </Router>
  );
}

export default App;
