import "./App.css";
import Sidebar from "./Component/Sidebar";
import Chat from "./Component/Chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from './Component/Login'
import { useStateValue } from "./Component/StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
