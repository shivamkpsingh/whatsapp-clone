import "./App.css";
import Sidebar from "./Component/Sidebar";
import Chat from "./Component/Chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useState } from "react";
import Login from './Component/Login'

function App() {
  const [user, setUser] = useState(null);
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
