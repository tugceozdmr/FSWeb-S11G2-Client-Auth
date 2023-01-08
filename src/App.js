import React from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FriendsList from "./FriendsList";
import AddFriends from "./AddFriends";
import PrivateRoute from "./PrivateRoute";
import Logout from "./Logout";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <header className="header">
            <h1>FRIENDS DATABASE</h1>
            <nav className="navs">
              <Link to="/login">Login</Link>
              <br/>
              <Link to="/friends">FriendsList</Link>
              <br/>
              <Link to="/friends/add">AddFriends</Link>
              <br/>
              <Link
                to="/logout"
                style={{
                  color: "black",
                }}
              >
                Logout
              </Link>
              <br/>
            </nav>
          </header>
        </div>
      </div>

      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <PrivateRoute path="/friends/add" component={AddFriends} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;